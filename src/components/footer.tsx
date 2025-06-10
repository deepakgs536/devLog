
export default function Footer() {
  return (
    <footer className="bg-[#0c062c] text-white p-4 px-6 md:px-20 flex flex-col md:flex-row pb-[70px] md:pb-4">
      <div className="text-[13px] md:text-sm text-gray-400 md:w-4/5 flex items-center mb-2 md:mb-0">
        © Copyright 2023 powered by deepakgs536
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
        <div className="md:w-1/2">
          <h3 className="text-md font-semibold mb-1 md:mb-2">My Account</h3>
          <p className="text-[12px] text-gray-300">
            Manage your profile, settings, and preferences all in one place.
          </p>
        </div>
        <div>
          <h3 className="!text-md font-semibold mb-1 md:mb-2">Contact</h3>
          <p className="text-[12px] text-gray-300">
            2/45 Tower Street, New York, USA
          </p>
          <p className="text-[12px] text-gray-300">contact@elemart.com</p>
          <p className="text-[12px] text-gray-300">www.elemart.com</p>
        </div>
      </div>
    </footer>
  );
}
