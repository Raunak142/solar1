import { google } from 'googleapis';

interface SheetRowData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  timestamp: string;
}

/**
 * Get authenticated Google Sheets client using service account credentials
 */
async function getAuthenticatedClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!email || !privateKey || !sheetId) {
    throw new Error(
      'Google Sheets configuration missing: GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID required'
    );
  }

  // Create JWT auth client
  const auth = new google.auth.JWT({
    email,
    key: privateKey.replace(/\\n/g, '\n'), // Handle escaped newlines from env
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  // Authorize and get sheets client
  await auth.authorize();
  
  return {
    sheets: google.sheets({ version: 'v4', auth }),
    sheetId,
  };
}

/**
 * Append contact form data to Google Sheet
 */
export async function appendToSheet(data: Omit<SheetRowData, 'timestamp'>): Promise<void> {
  const { sheets, sheetId } = await getAuthenticatedClient();

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Prepare row data in order matching sheet columns
  const rowData = [
    timestamp,
    data.name,
    data.email,
    data.phone,
    data.city,
    data.message,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A:F', // Assumes columns: Timestamp, Name, Email, Phone, City, Message
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [rowData],
    },
  });
}
