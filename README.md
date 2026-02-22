🌸 Project Zenith: The Digital Bloom 🌿Welcome to Project Zenith, a modern, full-stack Flower Shop application built with the Monolith Pattern. This platform seamlessly connects floral enthusiasts with their favorite blooms through a robust Express.js backend and a sleek, responsive frontend.🚀 OverviewProject Zenith isn't just a shop; it’s an experience. Built for speed and simplicity, the application uses a unified architecture where the server manages both the API data and the user interface.Frontend: HTML5, CSS3, JavaScript (Vanilla)Backend: Node.js, Express.jsDatabase: MongoDBArchitecture: Monolith Pattern🛠️ Features✨ Automated Catalog: Serves fresh floral data directly from MongoDB.🛒 Seamless Browsing: High-performance static file serving for a smooth UI.🔐 Secure Configuration: Environment variables to keep database credentials safe.📦 Integrated API: A unified engine for both web pages and data endpoints.📁 Project StructureTo keep the garden organized, we follow this clean directory layout:Plaintext/project-zenith
  ├── /public         <-- 🎨 The Shop Window (HTML/CSS/JS)
  │    ├── index.html
  │    ├── style.css
  │    └── script.js
  ├── .env            <-- 🔑 Secret Garden (API Keys/DB URI)
  ├── server.js       <-- ⚙️ The Engine (Express Server)
  └── package.json    <-- 📑 Project DNA
⚙️ Installation & SetupReady to plant the seeds? Follow these steps to get your local environment running:Clone the RepositoryBashgit clone https://github.com/jamuna9495/flower-shop.git
cd flower-shop
Install DependenciesBashnpm install
Configure EnvironmentCreate a .env file in the root directory and add your MongoDB string:PlaintextPORT=3000
MONGO_URI=your_mongodb_connection_string
Launch the ShopBashnpm start
The shop will be live at http://localhost:3000 🌐🌻 API Endpoints (Phase 1)MethodEndpointDescriptionGET/Serves the main shopfrontGET/api/flowersFetches the list of available flowersPOST/api/ordersSubmits a new customer order🤝 ContributingWe love seeing our garden grow! If you have ideas for new features or UI improvements:Fork the project.Create your Feature Branch (git checkout -b feature/AmazingFeature).Commit your changes (git commit -m 'Add some AmazingFeature').Push to the Branch (git push origin feature/AmazingFeature).Open a Pull Request.📜 LicenseDistributed under the MIT License. See LICENSE for more information.Built with ❤️ by [Jamuna] Let's make the web a more beautiful place, one petal at a time. 🌹
