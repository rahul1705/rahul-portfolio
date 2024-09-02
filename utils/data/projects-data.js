import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Auction System",
    description:
      "Auction Hub is a real-time bidding platform designed for Android users, offering a seamless auction experience. Developed using Java and Firebase, the app allows users to participate in live auctions with real-time updates. Key features include a secure wallet system powered by Razorpay, an advanced search mechanism for easy navigation, and a comprehensive admin panel for managing auctions. The intuitive interface ensures users can effortlessly bid, track auctions, and manage their accounts.",
    tools: [
      "Java",
      "Android Studio",
      "XML",
      "Firebase",
      "Razorpay",
      "Android SDK",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "PHP",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Book buying and selling platform",
    description:
      "Bookhazana is a web application that connects book enthusiasts, allowing them to buy and sell books online. Built with HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, and MySQL, the platform is designed for a user-friendly experience. The website features a clean, responsive interface that makes browsing and purchasing books easy. Sellers can list their books, manage inventories, and track sales, while buyers can search, filter, and purchase books securely. An efficient admin panel ensures smooth operation and management of the platform.",
    tools: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "MySQL"],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Quotes App",
    description:
      "Quotes Hub is an Android application that provides users with a collection of inspirational quotes from various sources. The app, developed with Java and Firebase, allows users to browse, share, and save their favorite quotes. Key features include integration with Cloud Firestore for storing quotes, a ViewPager for smooth navigation between categories, and AdMob integration for monetization. The clean and simple interface ensures that users can easily find motivation whenever they need it.",
    tools: ["Java", "Android Studio", "XML", "Firebase", "Android SDK"],
    code: "",
    role: "Full Stack Developer",
    demo: "",
    image: realEstate,
  },
];
