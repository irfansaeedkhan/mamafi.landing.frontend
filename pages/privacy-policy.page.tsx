import React from "react";
import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "./_app.page";

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <div>
      <div className="pt-10 lg:pt-18 mx-auto mt-[60px] max-w-[826px] px-0 py-0 flg:py-6">
        <h3 className="px-4 pt-4 text-base font-semibold text-white fsm:text-[30px] flg:px-0 flg:text-[34px]">
          MamaFi Privacy Policy
        </h3>
        <div className="mt-4 px-4 text-sm font-medium text-[#888DAA] flg:px-0">
          Effective Date: 11 August 2025
          <br />
          Last Updated: April 2026
        </div>
        <p className="mt-6 px-4 text-sm font-medium text-white fsm:text-lg flg:px-0">
          This Privacy Policy applies to the Memeth mobile application
          (&quot;App&quot;), operated by MamaFi Ltd (&quot;MamaFi&quot;,
          &quot;we&quot;, &quot;us&quot;).
        </p>
        <p className="mt-4 px-4 text-sm font-medium text-white fsm:text-lg flg:px-0">
          MamaFi is committed to protecting your privacy and ensuring
          transparency in how your data is collected, used, and protected.
        </p>

        <div className="mt-10 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            1. Data Controller
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <p>
              <strong>MamaFi Ltd</strong>
              <br />
              71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United
              Kingdom
              <br />
              Company Number: 16470954
              <br />
              ICO Registration Number: ZB904632
              <br />
              Email: privacy@mamafi.io
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            2. Information We Collect
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <p>
              <strong>2.1 Information You Provide</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Phone number (OTP verification)</li>
              <li>Username, profile info, avatar</li>
              <li>Posts, media (photos, videos, audio)</li>
              <li>Chat messages</li>
              <li>Voice messages</li>
              <li>Subscription data (via Stripe)</li>
            </ol>
            <br />
            <p>
              <strong>2.2 Automatically Collected Data</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Device identifiers and user-agent</li>
              <li>IP address</li>
              <li>Usage and engagement metrics</li>
              <li>Push notification tokens (FCM)</li>
              <li>Crash and performance logs (Sentry)</li>
            </ol>
            <br />
            <p>
              <strong>2.3 Blockchain Data</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Wallet address</li>
              <li>Transaction history (public blockchain)</li>
              <li>Crypto activity (immutable)</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            3. App Store Data Disclosure (Apple)
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                <thead>
                  <tr>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Category
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Data
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Collected
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Linked
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Tracking
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Contact Info</td>
                    <td className="border border-white/40 px-3 py-2">Phone Number</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Contact Info</td>
                    <td className="border border-white/40 px-3 py-2">Username</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">User Content</td>
                    <td className="border border-white/40 px-3 py-2">Posts / Media</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">User Content</td>
                    <td className="border border-white/40 px-3 py-2">Chat Messages</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">User Content</td>
                    <td className="border border-white/40 px-3 py-2">Voice Messages</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Identifiers</td>
                    <td className="border border-white/40 px-3 py-2">Device ID</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Financial</td>
                    <td className="border border-white/40 px-3 py-2">Payments (Stripe)</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Usage</td>
                    <td className="border border-white/40 px-3 py-2">Engagement Data</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Diagnostics</td>
                    <td className="border border-white/40 px-3 py-2">Crash Logs</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Other</td>
                    <td className="border border-white/40 px-3 py-2">IP Address</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Other</td>
                    <td className="border border-white/40 px-3 py-2">Wallet Address</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Location</td>
                    <td className="border border-white/40 px-3 py-2">Location Data</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                    <td className="border border-white/40 px-3 py-2">N/A</td>
                    <td className="border border-white/40 px-3 py-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            4. How We Use Your Data
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Account authentication (OTP)</li>
              <li>Messaging and social features</li>
              <li>Crypto wallet functionality</li>
              <li>Payments and subscriptions</li>
              <li>Push notifications</li>
              <li>Security and fraud prevention</li>
              <li>Product improvement</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            5. Information Sharing (Google Data Safety Aligned)
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Data
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Shared With
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Purpose
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      User Control
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Phone</td>
                    <td className="border border-white/40 px-3 py-2">sms.to</td>
                    <td className="border border-white/40 px-3 py-2">OTP verification</td>
                    <td className="border border-white/40 px-3 py-2">Required</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Media</td>
                    <td className="border border-white/40 px-3 py-2">AWS S3</td>
                    <td className="border border-white/40 px-3 py-2">Storage</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Voice Messages</td>
                    <td className="border border-white/40 px-3 py-2">AWS S3</td>
                    <td className="border border-white/40 px-3 py-2">Storage</td>
                    <td className="border border-white/40 px-3 py-2">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Payments</td>
                    <td className="border border-white/40 px-3 py-2">Stripe</td>
                    <td className="border border-white/40 px-3 py-2">Billing</td>
                    <td className="border border-white/40 px-3 py-2">Required</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Device Tokens</td>
                    <td className="border border-white/40 px-3 py-2">Firebase</td>
                    <td className="border border-white/40 px-3 py-2">Notifications</td>
                    <td className="border border-white/40 px-3 py-2">Opt-out</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">IP / Logs</td>
                    <td className="border border-white/40 px-3 py-2">Sentry</td>
                    <td className="border border-white/40 px-3 py-2">Security</td>
                    <td className="border border-white/40 px-3 py-2">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <p>
              <strong>Opt-Out</strong>
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-3">
              <li>Disable push notifications (device settings)</li>
              <li>Delete account (full data removal within 30 days)</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            6. Data Retention
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Data
                    </th>
                    <th className="border border-white/40 px-3 py-2 font-semibold">
                      Retention
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Phone number</td>
                    <td className="border border-white/40 px-3 py-2">Account + 30 days</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Profile data</td>
                    <td className="border border-white/40 px-3 py-2">Account + 30 days</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Posts/media</td>
                    <td className="border border-white/40 px-3 py-2">Until deleted</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Chat messages</td>
                    <td className="border border-white/40 px-3 py-2">Account + 30 days</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Voice messages</td>
                    <td className="border border-white/40 px-3 py-2">Account + 30 days</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Payments</td>
                    <td className="border border-white/40 px-3 py-2">7 years (Stripe/legal)</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">IP address</td>
                    <td className="border border-white/40 px-3 py-2">90 days</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Logs (Sentry)</td>
                    <td className="border border-white/40 px-3 py-2">30 days</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">FCM tokens</td>
                    <td className="border border-white/40 px-3 py-2">Until account deletion</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Usage data</td>
                    <td className="border border-white/40 px-3 py-2">12 months</td>
                  </tr>
                  <tr>
                    <td className="border border-white/40 px-3 py-2">Blockchain</td>
                    <td className="border border-white/40 px-3 py-2">Permanent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            7. Security
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <ol className="list-decimal pl-6 space-y-2">
              <li>TLS encryption (in transit)</li>
              <li>AES-256 encryption (wallet keys)</li>
              <li>End-to-end encrypted chats</li>
              <li>Secure infrastructure (AWS, EU hosting)</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            8. International Data Transfers
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <p>
              Data may be processed outside your country with appropriate
              safeguards (GDPR SCCs).
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            9. Tracking and Cookies
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <p>
              This App does not track users across third-party apps or websites.
              We do not use IDFA, GAID, or advertising SDKs.
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            10. Your Rights
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Access and correction</li>
              <li>Deletion</li>
              <li>Data portability</li>
              <li>Restriction of processing</li>
              <li>
                Delete account via: Settings &gt; Privacy &gt; Delete Account
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            11. Device Permissions
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <p>
              Camera, microphone, storage, and notifications are all optional
              and user-controlled.
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            12. Cryptocurrency and Wallet Disclosure
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Users do not directly hold private keys</li>
              <li>Keys are encrypted and securely stored</li>
              <li>Blockchain transactions are irreversible and public</li>
              <li>
                MamaFi is not a financial institution and provides no investment
                advice
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            13. Children&apos;s Privacy
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <ol className="list-decimal pl-6 space-y-2">
              <li>The App is not intended for users under 18.</li>
              <li>No automated age verification is implemented.</li>
              <li>Users confirm their age during registration.</li>
              <li>
                Parents/guardians can contact{" "}
                <a
                  href="mailto:privacy@mamafi.io"
                  className="hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy@mamafi.io
                </a>{" "}
                if needed.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            14. Changes to Policy
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <p>
              We may update this policy and notify users.
            </p>
          </div>
        </div>

        <div className="mt-6 max-w-[826px] rounded-none bg-[#1B1C22] fmd:rounded-xl">
          <h3 className="px-4 pt-4 text-sm font-semibold text-white flg:px-8 flg:text-lg">
            15. Contact
          </h3>
          <div className="mt-4 px-4 pb-8 text-sm font-normal text-white flg:px-8">
            <p>
              <a
                href="mailto:privacy@mamafi.io"
                className="hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy@mamafi.io
              </a>
            </p>
            <br />
            <p>Last Updated: April 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

PrivacyPolicy.getLayout = (page) => {
  return <PageLayout Layout={"landing"}>{page}</PageLayout>;
};

export default PrivacyPolicy;
