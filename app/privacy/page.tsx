import Footer from "@/components/ui/Footer";
import { FONTS } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy | MAON",
  description: "MAON Privacy Policy - How we collect, use, and protect your data",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f7f6f5] text-[#1b1b1b]">
      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 pb-20 pt-24">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: FONTS.sans }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-[#8d8d8d] mb-12"
          style={{ fontFamily: FONTS.sans }}
        >
          Last Updated: March 7, 2026
        </p>

        <div
          className="space-y-8 text-[17px] leading-relaxed"
          style={{ fontFamily: FONTS.sans }}
        >
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-4">
              MAON Intelligence (&quot;MAON,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI Therapist application and related services (collectively, the &quot;Service&quot;).
            </p>
            <p>
              By using MAON, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">1. Biometric and Biosignal Data</h3>
            <p className="mb-3">
              When you connect a wearable device to MAON, we may collect the following types of biometric data:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Heart rate and heart rate variability (HRV)</li>
              <li>Sleep patterns and sleep stages</li>
              <li>Activity and movement data</li>
              <li>Stress indicators and physiological signals</li>
              <li>Body temperature variations</li>
              <li>Respiratory rate</li>
              <li>Other sensor data from supported devices (Apple Watch, Galaxy Watch, Fitbit, Bangle.js 2)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2. App Usage and Screen Time Data</h3>
            <p className="mb-3">
              With your permission, we collect information about your digital habits through screen time APIs:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>App usage patterns and frequency</li>
              <li>Screen time duration and schedules</li>
              <li>App categories you interact with</li>
              <li>Device pickup frequency</li>
              <li>Notification patterns (aggregate, not content)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Account information (email address, name, phone number)</li>
              <li>Device preferences and settings</li>
              <li>Mood check-ins and self-reported data</li>
              <li>Responses to prompts and interventions</li>
              <li>Feedback and communications with us</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">4. Phone Number and Communications Data</h3>
            <p className="mb-3">
              If you opt in to receive SMS or voice communications from MAON, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your phone number</li>
              <li>SMS and voice communication logs (timestamps, delivery status)</li>
              <li>Your communication preferences and opt-in/opt-out status</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">5. Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Device type, operating system, and version</li>
              <li>IP address and general location (country/region)</li>
              <li>App performance and crash data</li>
              <li>Usage analytics (features used, session duration)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">6. Google Calendar Data</h3>
            <p className="mb-3">
              If you choose to connect your Google Calendar account to MAON, we access the following data through the Google Calendar API:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Calendar event titles, dates, times, and durations</li>
              <li>Event frequency and scheduling patterns</li>
              <li>Free/busy status</li>
            </ul>
            <p>
              We access this data solely to analyze your scheduling patterns and provide personalized wellness insights, such as detecting overloaded schedules or insufficient rest periods. We do not access the content of event descriptions, attendee lists, or any other calendar metadata beyond what is listed above unless explicitly disclosed.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Provide personalized insights:</strong> Analyze your biometric and behavioral data to identify emotional patterns and provide relevant support</li>
              <li><strong>Deliver interventions:</strong> Offer timely, supportive suggestions based on detected patterns in your data</li>
              <li><strong>Improve our Service:</strong> Understand how users interact with MAON to enhance features and user experience</li>
              <li><strong>Communicate with you:</strong> Send service-related notifications, updates, reminders, and wellness check-ins via SMS, voice, or push notifications</li>
              <li><strong>Verify your identity:</strong> Send one-time verification codes (OTP) via SMS during account registration and login to confirm your identity</li>
              <li><strong>Ensure security:</strong> Detect and prevent fraud, abuse, and security incidents</li>
              <li><strong>Research and development:</strong> Develop new features and improve our AI models using aggregated, de-identified data</li>
              <li><strong>Calendar-based insights:</strong> Analyze your Google Calendar scheduling patterns to provide wellness recommendations, detect potential burnout indicators such as overloaded schedules, and suggest healthier time management habits</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How We Share Your Information</h2>
            <p className="mb-4">
              <strong>We do not sell your personal data.</strong> We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Service providers:</strong> We work with trusted third parties who help us operate our Service (cloud hosting, analytics, customer support, and communications platforms such as Twilio for SMS and voice services). These providers are bound by confidentiality obligations and process your data only on our behalf. Google Calendar data is not shared with any third-party service providers except as necessary to provide the core functionality described in this policy.</li>
              <li><strong>With your consent:</strong> We may share data when you explicitly authorize us to do so.</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law, court order, or government request.</li>
              <li><strong>Safety:</strong> We may share information if we believe it&apos;s necessary to prevent harm to you or others.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption in transit using TLS 1.2 or higher</li>
              <li>Encryption at rest using AES-256</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security audits and monitoring</li>
              <li>Employee access limited on a need-to-know basis</li>
            </ul>
            <p className="mt-4">
              While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed to provide you with our Service. You may request deletion of your data at any time. Upon account deletion, we will remove or anonymize your personal data within 30 days, except where retention is required by law.
            </p>
            <p className="mt-4">
              Google Calendar data is retained only for as long as necessary to provide you with calendar-based wellness insights. If you disconnect your Google Calendar account or revoke access, we will delete all stored Google Calendar data within 30 days.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
              <li><strong>Withdraw consent:</strong> Withdraw previously given consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at <a href="mailto:lks@maonhealth.com" className="text-[#00A452] hover:underline">lks@maonhealth.com</a>.
            </p>
          </section>

          {/* HIPAA Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Health Information Disclaimer</h2>
            <p className="mb-4">
              MAON is a consumer wellness application, not a healthcare provider. We are not a &quot;covered entity&quot; or &quot;business associate&quot; under the Health Insurance Portability and Accountability Act (HIPAA). This means HIPAA regulations do not apply to the data we collect.
            </p>
            <p>
              However, we treat your health-related data with the highest level of care and apply robust security measures that meet or exceed industry standards for protecting sensitive health information.
            </p>
          </section>

          {/* California Residents */}
          <section>
            <h2 className="text-2xl font-bold mb-4">California Residents (CCPA/CPRA)</h2>
            <p className="mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information we collect and how it&apos;s used</li>
              <li>Right to delete your personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
              <li>Right to non-discrimination for exercising your privacy rights</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to limit use of sensitive personal information</li>
            </ul>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold mb-4">International Users (GDPR)</h2>
            <p className="mb-4">
              If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, we process your data under the General Data Protection Regulation (GDPR). Our legal bases for processing include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> For biometric data and sensitive health information</li>
              <li><strong>Contract:</strong> To provide the Service you requested</li>
              <li><strong>Legitimate interests:</strong> To improve our Service and ensure security</li>
            </ul>
            <p className="mt-4">
              You may also lodge a complaint with your local data protection authority.
            </p>
          </section>

          {/* SMS and Voice Communications */}
          <section>
            <h2 className="text-2xl font-bold mb-4">SMS and Voice Communications</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Phone Verification (OTP)</h3>
            <p className="mb-4">
              During account registration and login, we send one-time verification codes (OTP) via SMS to the phone number you provide. These messages are sent through Auth0&apos;s phone verification flow, which uses Twilio as the underlying delivery provider. The sole purpose of these messages is to verify your identity, and no marketing content is included. By providing your phone number during sign-up, you consent to receiving these verification messages. Standard message and data rates may apply.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Optional Wellness Communications</h3>
            <p className="mb-4">
              If you separately opt in to receive additional SMS or voice communications from MAON, you may also receive:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Wellness check-ins and reminders</li>
              <li>Service notifications and account alerts</li>
              <li>AI-generated supportive interventions</li>
            </ul>
            <p className="mb-4">
              <strong>Message frequency varies.</strong> Message and data rates may apply. You can opt out of wellness communications at any time by replying STOP to any SMS message or by adjusting your communication preferences in the app. Reply HELP for assistance. Opting out of wellness communications does not affect verification messages required for account security.
            </p>
            <p className="mb-4">
              When we send you SMS or voice communications, your phone number and message data are processed by Twilio in accordance with{" "}
              <a href="https://www.twilio.com/en-us/legal/privacy" className="text-[#00A452] hover:underline" target="_blank" rel="noopener noreferrer">Twilio&apos;s Privacy Policy</a>.
              We do not share your phone number with third parties for marketing purposes.
            </p>
            <p>
              Your consent to receive optional wellness communications is not a condition of using the Service. However, phone number verification via OTP is required to create and access your account.
            </p>
          </section>

          {/* Google API Services User Data Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Google API Services User Data Policy</h2>
            <p className="mb-4">
              MAON&apos;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-[#00A452] hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">How We Access Google Calendar Data</h3>
            <p className="mb-4">
              When you connect your Google Calendar account to MAON, we request access to your calendar data through Google&apos;s OAuth 2.0 authorization flow. You will be prompted by Google to grant MAON permission before any data is accessed. We only request the minimum scopes necessary to provide calendar-based wellness insights.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">How We Use Google Calendar Data</h3>
            <p className="mb-4">
              We use your Google Calendar data exclusively to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Analyze your scheduling patterns to detect signs of overwork, burnout, or insufficient rest</li>
              <li>Provide personalized wellness recommendations based on your calendar activity</li>
              <li>Correlate calendar patterns with your biometric and behavioral data to deliver more accurate insights</li>
            </ul>
            <p className="mb-4">
              We do <strong>not</strong> use Google Calendar data for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Serving advertisements or targeting ads</li>
              <li>Selling or sharing data with third parties for their own purposes</li>
              <li>Training generalized AI or machine learning models unrelated to your personal wellness insights</li>
              <li>Any purpose other than providing and improving the MAON wellness features described in this policy</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">How We Store and Protect Google Calendar Data</h3>
            <p className="mb-4">
              All Google Calendar data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access to this data is strictly limited to the systems and personnel necessary to provide the Service. We do not store raw calendar data longer than necessary to generate your wellness insights.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">How We Share Google Calendar Data</h3>
            <p className="mb-4">
              We do not sell, rent, or share your Google Calendar data with any third parties, except:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>With your explicit consent</li>
              <li>As necessary to comply with applicable law, regulation, or legal process</li>
              <li>To protect the safety, rights, or property of MAON, our users, or the public</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Limited Use Disclosure</h3>
            <p className="mb-4">
              Notwithstanding anything else in this Privacy Policy, MAON&apos;s use of information received from Google APIs adheres to the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" className="text-[#00A452] hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements. Specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>We only use Google Calendar data to provide and improve user-facing features that are prominent in the MAON application&apos;s user interface</li>
              <li>We do not transfer Google Calendar data to third parties unless necessary to provide or improve user-facing features, as required by law, or with the user&apos;s affirmative consent</li>
              <li>We do not use Google Calendar data for serving advertisements</li>
              <li>Humans do not read Google Calendar data unless we have your affirmative consent, it is necessary for security purposes, to comply with applicable law, or our use is limited to internal operations with data that has been aggregated and anonymized</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Revoking Access</h3>
            <p>
              You can disconnect your Google Calendar from MAON at any time through your account settings in the app or by visiting your{" "}
              <a href="https://myaccount.google.com/permissions" className="text-[#00A452] hover:underline" target="_blank" rel="noopener noreferrer">Google Account permissions page</a>. Upon revocation, we will stop accessing your Google Calendar data and delete all stored Google Calendar data within 30 days.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
            <p>
              MAON is not intended for children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If we learn that we have collected data from a child, we will delete it promptly.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-white p-6 rounded-xl border border-[#e5e5e5]">
              <p className="font-semibold mb-2">MAON Intelligence</p>
              <p>Email: <a href="mailto:lks@maonhealth.com" className="text-[#00A452] hover:underline">lks@maonhealth.com</a></p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
