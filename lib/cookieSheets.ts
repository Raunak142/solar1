import { google } from 'googleapis';

interface CookieConsentData {
  email: string;
  status: 'accepted' | 'rejected';
  timestamp: string;
  ip: string;
  userAgent: string;
  page: string;
}

/**
 * Get authenticated Google Sheets client (reuses existing service account)
 */
async function getAuthenticatedClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !privateKey || !sheetId) {
    throw new Error(
      'Google Sheets config missing: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID'
    );
  }

  const auth = new google.auth.JWT({
    email,
    key: privateKey.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  await auth.authorize();

  return {
    sheets: google.sheets({ version: 'v4', auth }),
    sheetId,
  };
}

const SHEET_TAB_NAME = 'Cookies';

/**
 * Ensure the "Cookies" sheet tab exists in the spreadsheet.
 * Creates it with headers if it doesn't exist.
 */
async function ensureCookiesTabExists(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string
): Promise<void> {
  // Check if the tab already exists
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
  const tabExists = spreadsheet.data.sheets?.some(
    (s) => s.properties?.title === SHEET_TAB_NAME
  );

  if (tabExists) return;

  // Create the tab
  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: { title: SHEET_TAB_NAME },
          },
        },
      ],
    },
  });

  // Add header row
  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: `${SHEET_TAB_NAME}!A1:F1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [['Email', 'Consent Status', 'Timestamp', 'IP Address', 'User Agent', 'Page URL']],
    },
  });
}

/**
 * Append cookie consent data to the "Cookies" sheet tab.
 * Columns: Email | Consent Status | Timestamp | IP Address | User Agent | Page URL
 */
export async function appendCookieConsent(data: CookieConsentData): Promise<void> {
  const { sheets, sheetId } = await getAuthenticatedClient();

  // Ensure the "Cookies" tab exists (auto-creates on first call)
  await ensureCookiesTabExists(sheets, sheetId);

  const formattedTimestamp = new Date(data.timestamp).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const rowData = [
    data.email || 'Not provided',
    data.status,
    formattedTimestamp,
    data.ip,
    data.userAgent,
    data.page,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${SHEET_TAB_NAME}!A:F`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [rowData],
    },
  });
}
