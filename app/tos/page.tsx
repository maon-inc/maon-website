import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { FONTS } from "@/lib/constants";

export const metadata = {
  title: "Terms of Service | MAON",
  description: "MAON Terms of Service - Terms and conditions for using our service",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#f7f6f5] text-[#1b1b1b]">
      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 pb-20 pt-24">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: FONTS.sans }}
        >
          Terms of Service
        </h1>
        <p
          className="text-[#8d8d8d] mb-12"
          style={{ fontFamily: FONTS.sans }}
        >
          Last Updated: March 2, 2025
        </p>

        <div
          className="space-y-8 text-[17px] leading-relaxed"
          style={{ fontFamily: FONTS.sans }}
        >
          {/* Agreement */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using MAON (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, you may not access the Service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and MAON Intelligence (&quot;MAON,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) regarding your use of the Service.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              MAON is an AI-powered mental health assistant that analyzes biometric data from wearable devices and app usage patterns to provide insights and supportive interventions. The Service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Integration with wearable devices (Apple Watch, Galaxy Watch, Fitbit, Bangle.js 2, and others)</li>
              <li>Analysis of biometric signals including heart rate, sleep patterns, and activity data</li>
              <li>Screen time and app usage pattern analysis</li>
              <li>AI-generated insights about emotional patterns</li>
              <li>Optional supportive interventions and suggestions</li>
              <li>SMS and voice-based communications, reminders, and check-ins (with your consent)</li>
            </ul>
          </section>

          {/* Medical Disclaimer */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Medical Disclaimer</h2>
            <div className="bg-white p-6 rounded-xl border border-[#e5e5e5] mb-4">
              <p className="font-semibold text-lg mb-3">IMPORTANT: MAON IS NOT A MEDICAL SERVICE</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>MAON does <strong>not</strong> diagnose mental health conditions</li>
                <li>MAON does <strong>not</strong> provide medical advice, treatment, or therapy</li>
                <li>MAON does <strong>not</strong> replace professional healthcare providers</li>
                <li>MAON does <strong>not</strong> label you with disorders or conditions</li>
              </ul>
            </div>
            <p className="mb-4">
              The Service is intended for informational and wellness purposes only. The insights, patterns, and suggestions provided by MAON should not be considered medical advice.
            </p>
            <p className="mb-4">
              <strong>If you are experiencing a mental health crisis, suicidal thoughts, or any medical emergency, please contact emergency services (911), a crisis hotline, or seek immediate professional help.</strong>
            </p>
            <p>
              Always consult with a qualified healthcare provider before making decisions about your health. Do not disregard professional medical advice or delay seeking treatment based on information from MAON.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Eligibility</h2>
            <p className="mb-4">
              To use MAON, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 13 years of age (or 16 in the European Economic Area)</li>
              <li>Have the legal capacity to enter into a binding agreement</li>
              <li>Not be prohibited from using the Service under applicable laws</li>
              <li>Provide accurate and complete information when creating an account</li>
            </ul>
            <p className="mt-4">
              If you are under 18, you represent that you have your parent or guardian&apos;s permission to use the Service.
            </p>
          </section>

          {/* Account Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Account Responsibilities</h2>
            <p className="mb-4">
              When you create an account with us, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="mt-4">
              You may not share your account credentials with others or use another person&apos;s account without permission.
            </p>
          </section>

          {/* User Data and Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. User Data and Privacy</h2>
            <p className="mb-4">
              Your privacy is important to us. Our collection and use of personal information is governed by our <Link href="/privacy" className="text-[#00A452] hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
            </p>
            <p className="mb-4">
              By using the Service, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect biometric data from your connected wearable devices</li>
              <li>We collect app usage and screen time data with your permission</li>
              <li>We use AI to analyze this data and provide insights</li>
              <li>You have control over your data and can request its deletion at any time</li>
            </ul>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Acceptable Use</h2>
            <p className="mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
              <li>Use the Service for any commercial purpose without our consent</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Collect data about other users without their consent</li>
              <li>Use automated systems (bots, scrapers) to access the Service</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
            <p className="mb-4">
              The Service, including its content, features, and functionality, is owned by MAON Intelligence and is protected by intellectual property laws. This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Software, algorithms, and AI models</li>
              <li>Trademarks, logos, and brand elements</li>
              <li>Visual design and user interface</li>
              <li>Written content and documentation</li>
            </ul>
            <p className="mt-4">
              You are granted a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes in accordance with these Terms.
            </p>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. User Content</h2>
            <p className="mb-4">
              You retain ownership of any content you submit to the Service (such as mood check-ins, notes, or feedback). By submitting content, you grant us a license to use, process, and analyze this content to provide and improve the Service.
            </p>
            <p>
              You represent that you have the right to submit any content you provide and that it does not violate any third-party rights.
            </p>
          </section>

          {/* Third-Party Integrations */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Third-Party Integrations</h2>
            <p className="mb-4">
              The Service integrates with third-party devices, platforms, and service providers (such as Apple HealthKit, Samsung Health, Fitbit, and Twilio for communications). Your use of these third-party services is subject to their respective terms and privacy policies.
            </p>
            <p>
              We are not responsible for the operation, availability, or content of third-party services. Any issues with third-party integrations should be directed to the respective service provider.
            </p>
          </section>

          {/* SMS and Voice Communications Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. SMS and Voice Communications</h2>
            <p className="mb-4">
              MAON may offer SMS and voice communication features powered by Twilio. By opting in to receive SMS or voice communications, you agree to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Consent:</strong> You expressly consent to receive automated SMS messages and/or voice calls from MAON at the phone number you provide, including wellness check-ins, reminders, service notifications, and supportive interventions</li>
              <li><strong>Frequency:</strong> Message frequency varies based on your settings and usage patterns</li>
              <li><strong>Costs:</strong> Message and data rates may apply. MAON is not responsible for any charges from your mobile carrier</li>
              <li><strong>Opt-out:</strong> You may opt out at any time by replying STOP to any SMS message or by updating your preferences in the app. After opting out, you will receive a one-time confirmation message</li>
              <li><strong>Help:</strong> Reply HELP to any message for assistance, or contact us at <a href="mailto:lks@maonhealth.com" className="text-[#00A452] hover:underline">lks@maonhealth.com</a> or <a href="mailto:daniel.lee@maonhealth.com" className="text-[#00A452] hover:underline">daniel.lee@maonhealth.com</a></li>
              <li><strong>Not required:</strong> Consent to receive SMS or voice communications is not a condition of purchasing any goods or services from MAON</li>
            </ul>
            <p className="mb-4">
              Supported carriers include but are not limited to AT&amp;T, T-Mobile, Verizon, and Sprint. Service may not be available on all carriers.
            </p>
            <p>
              MAON and its service providers (including Twilio) may use your phone number and messaging data only to deliver the communications you have consented to and for no other purpose. We will not share your phone number with third parties for their own marketing purposes.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Disclaimers</h2>
            <p className="mb-4 uppercase font-semibold">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service will be uninterrupted, secure, or error-free</li>
              <li>The results obtained from the Service will be accurate or reliable</li>
              <li>The Service will meet your specific requirements or expectations</li>
              <li>Any defects in the Service will be corrected</li>
            </ul>
            <p className="mt-4">
              The insights and suggestions provided by MAON are generated by AI and may not always be accurate. You should use your own judgment when acting on any information from the Service.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. Limitation of Liability</h2>
            <p className="mb-4 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAON INTELLIGENCE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>
            <p className="mb-4">
              This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any health outcomes or decisions based on the Service</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Personal injury or emotional distress</li>
              <li>Errors or inaccuracies in the AI-generated insights</li>
              <li>Unauthorized access to your data</li>
            </ul>
            <p className="mt-4">
              Our total liability for any claims arising from your use of the Service shall not exceed the amount you paid us, if any, in the twelve (12) months preceding the claim.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold mb-4">14. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless MAON Intelligence, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney&apos;s fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold mb-4">15. Termination</h2>
            <p className="mb-4">
              You may terminate your account at any time by contacting us or using the account deletion feature in the app.
            </p>
            <p className="mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice, if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You violate these Terms</li>
              <li>Your use of the Service poses a security risk</li>
              <li>We are required to do so by law</li>
              <li>We discontinue the Service</li>
            </ul>
            <p className="mt-4">
              Upon termination, your right to use the Service will immediately cease. Provisions that by their nature should survive termination shall survive.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold mb-4">16. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms and updating the &quot;Last Updated&quot; date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold mb-4">17. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts located in the United States.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">18. Dispute Resolution</h2>
            <p className="mb-4">
              In the event of any dispute arising from these Terms or your use of the Service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to first attempt to resolve the dispute informally by contacting us</li>
              <li>If the dispute cannot be resolved informally, you agree to submit to binding arbitration</li>
              <li>You waive any right to participate in a class action lawsuit or class-wide arbitration</li>
            </ul>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold mb-4">19. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold mb-4">20. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and MAON Intelligence regarding the Service and supersede all prior agreements and understandings.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">21. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-white p-6 rounded-xl border border-[#e5e5e5]">
              <p className="font-semibold mb-2">MAON Intelligence</p>
              <p>Email: <a href="mailto:lks@maonhealth.com" className="text-[#00A452] hover:underline">lks@maonhealth.com</a> | <a href="mailto:daniel.lee@maonhealth.com" className="text-[#00A452] hover:underline">daniel.lee@maonhealth.com</a></p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
