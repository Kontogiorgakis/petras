import { TermsAndConditions } from "@/components/TermsAndConditions";
import { BasePageProps } from "@/types/pageprops";

export default async function TermsAndConditionsPage({ params }: BasePageProps) {
  const { locale } = await params;

  return <TermsAndConditions />;
}
