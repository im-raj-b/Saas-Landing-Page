import React from "react";
import configuration from "../../Configurations.json";

export default function Support() {
  return (
    <>
      <section className="w-full bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              How we support our <br /> partner all over the world
            </h2>
            <p className="text-gray-600 mb-8">
              {configuration.support.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex text-yellow-400 mb-2">
                  <StarIcon />
                </div>
                <div className="font-bold">4.9 / 5 rating</div>
                <div className="text-gray-500">Databricks</div>
              </div>

              <div>
                <div className="flex text-yellow-400 mb-2">
                  <StarHalfIcon />
                </div>
                <div className="font-bold">4.8 / 5 rating</div>
                <div className="text-gray-500">Chainalysis</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {[ChartIcon, ClockIcon, UsersIcon].map((Icon, index) => {
              return (
                <div className="flex gap-4 items-start" key={index}>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {configuration.support.categories[index].title}
                    </h3>
                    <p className="text-gray-600">
                      {configuration.support.categories[index].subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function ChartIcon(props) {
  return (
    <svg
      {...props}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5 15H22.5L18.75 26.25L11.25 3.75L7.5 15H2.5"
        stroke="#54BD95"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.512 19.8626C25.7168 21.7432 24.473 23.4004 22.8894 24.6892C21.3057 25.9781 19.4305 26.8594 17.4276 27.2561C15.4247 27.6528 13.3551 27.5528 11.3997 26.9648C9.44436 26.3769 7.66281 25.3189 6.2108 23.8834C4.75879 22.4479 3.68055 20.6785 3.07032 18.73C2.4601 16.7815 2.33648 14.7132 2.71027 12.7059C3.08407 10.6986 3.9439 8.81338 5.21458 7.21513C6.48527 5.61689 8.12813 4.35424 9.99953 3.5376"
        stroke="#54BD95"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5V15H27.5Z"
        stroke="#54BD95"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 3.75C21.5054 3.75 20.5516 4.14509 19.8483 4.84835C19.1451 5.55161 18.75 6.50544 18.75 7.5V22.5C18.75 23.4946 19.1451 24.4484 19.8483 25.1517C20.5516 25.8549 21.5054 26.25 22.5 26.25C23.4946 26.25 24.4484 25.8549 25.1517 25.1517C25.8549 24.4484 26.25 23.4946 26.25 22.5C26.25 21.5054 25.8549 20.5516 25.1517 19.8483C24.4484 19.1451 23.4946 18.75 22.5 18.75H7.5C6.50544 18.75 5.55161 19.1451 4.84835 19.8483C4.14509 20.5516 3.75 21.5054 3.75 22.5C3.75 23.4946 4.14509 24.4484 4.84835 25.1517C5.55161 25.8549 6.50544 26.25 7.5 26.25C8.49456 26.25 9.44839 25.8549 10.1517 25.1517C10.8549 24.4484 11.25 23.4946 11.25 22.5V7.5C11.25 6.50544 10.8549 5.55161 10.1517 4.84835C9.44839 4.14509 8.49456 3.75 7.5 3.75C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5C3.75 8.49456 4.14509 9.44839 4.84835 10.1517C5.55161 10.8549 6.50544 11.25 7.5 11.25H22.5C23.4946 11.25 24.4484 10.8549 25.1517 10.1517C25.8549 9.44839 26.25 8.49456 26.25 7.5C26.25 6.50544 25.8549 5.55161 25.1517 4.84835C24.4484 4.14509 23.4946 3.75 22.5 3.75Z"
        stroke="#54BD95"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      width="142"
      height="26"
      viewBox="0 0 142 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
        fill="#FFC728"
      />
      <path
        d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z"
        fill="#FFC728"
      />
      <path
        d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z"
        fill="#FFC728"
      />
      <path
        d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z"
        fill="#FFC728"
      />
      <path
        d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z"
        fill="#FFC728"
      />
    </svg>
  );
}

function StarHalfIcon(props) {
  return (
    <svg
      {...props}
      width="142"
      height="26"
      viewBox="0 0 142 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
        fill="#FFC728"
      />
      <path
        d="M42 0L44.9187 8.98278H54.3637L46.7225 14.5344L49.6412 23.5172L42 17.9656L34.3588 23.5172L37.2775 14.5344L29.6363 8.98278H39.0813L42 0Z"
        fill="#FFC728"
      />
      <path
        d="M71 0L73.9187 8.98278H83.3637L75.7225 14.5344L78.6412 23.5172L71 17.9656L63.3588 23.5172L66.2775 14.5344L58.6363 8.98278H68.0813L71 0Z"
        fill="#FFC728"
      />
      <path
        d="M100 0L102.919 8.98278H112.364L104.723 14.5344L107.641 23.5172L100 17.9656L92.3588 23.5172L95.2775 14.5344L87.6363 8.98278H97.0813L100 0Z"
        fill="#FFC728"
      />
      <path
        d="M129 0L131.919 8.98278H141.364L133.723 14.5344L136.641 23.5172L129 17.9656L121.359 23.5172L124.277 14.5344L116.636 8.98278H126.081L129 0Z"
        fill="#BBBBBB"
      />
    </svg>
  );
}
