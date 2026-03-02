// ============================================
// JSON-LD Structured Data Component
// Inject schema.org markup into page <head>
// ============================================

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Record<string, any>[];
}

/**
 * Renders one or more JSON-LD script tags.
 * Accepts a single schema object or an array of schemas.
 *
 * @example
 * <JsonLd data={getOrganizationSchema()} />
 * <JsonLd data={[getOrganizationSchema(), getLocalBusinessSchema()]} />
 */
export default function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
