const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.paxillin.com';

export interface LegalDocumentSection {
  id: string;
  title: string;
  content: string;
  order?: number;
}

export interface LegalDocumentPublic {
  title: string;
  subtitle?: string;
  introduction?: string;
  sections: LegalDocumentSection[];
  version: string;
  effectiveDate: string;
  lastUpdated: string;
}

export async function getPrivacyPolicy(): Promise<LegalDocumentPublic | null> {
  try {
    const response = await fetch(`${API_URL}/legal-documents/public/privacy-policy`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      console.error('Failed to fetch privacy policy:', response.status);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching privacy policy:', error);
    return null;
  }
}

export async function getTermsOfService(): Promise<LegalDocumentPublic | null> {
  try {
    const response = await fetch(`${API_URL}/legal-documents/public/terms-of-service`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      console.error('Failed to fetch terms of service:', response.status);
      return null;
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching terms of service:', error);
    return null;
  }
}
