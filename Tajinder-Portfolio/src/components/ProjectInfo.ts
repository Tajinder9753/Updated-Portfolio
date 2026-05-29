import UncleJoeImage from "@/assets/Projects_Images/UncleJoe.png";
import MystifyingSorceryImage from "@/assets/Projects_Images/MystifyingSorcery.png";
import ThreeMealsADayImage from "@/assets/Projects_Images/ThreeMeals.png";
import CardsAndCavernsImage from "@/assets/Projects_Images/CardsAndCaverns.png";
import TowerDefenceImage from "@/assets/Projects_Images/TowerDefence.png";
import BacklogImage from "@/assets/Projects_Images/Backlog.png"
import TankImage from "@/assets/Projects_Images/Tank.png"

export const projects = [
    {
        title: "Uncle Joe's Fishing Extravaganza",
        description: "A casual sim game similar to Stardew Valley where you can fish and manage a restaurant, earning money to pay down your debt.",
        image: UncleJoeImage,
        link: "https://github.com/ilhl3/Uncle-Joe-s-Fishing-Extravaganza",
        moreInfoDescription:"A casual sim game developed as a group project. The game is built in Unity 2D, using c#. The game features multiple different minigames, including two types of fishing and the restaurant management."
            +"There is also a shop where players can buy different upgrades to help them in the minigames such as unlocking new fish that are available to catch. I primarily worked on the land fishing minigame," +
            "where players catch fish in a similar minigame to Stardew Valley, with a bar that you must keep a moving fish icon within to successfully catch the fish.",
        bullets: [ 
            "Two fishing minigames: one on land and one on a boat", 
            "Restaurant management minigame where you cook and serve food to customers", 
            "Store where you can buy upgrades to help you in the minigames such as unlocking new fish that are available to catch",
            "Developed in Unity 2D using c#",
            "Developed as a group project, with 6 members",
            "Debt system where players must pay down their debt every week or lose the game"
        ],
        website: false,
        videoLink: "https://youtu.be/WUUs4FHhzDA"
    },
    {
        title: "Mystifying Sorcery",
        description: "A simple 2D platformer, where you navigate through levels collecting keys and avoiding various obstacles to make it to the end of the level.",
        image: MystifyingSorceryImage,
        link: "https://github.com/ilhl3/Mystifying-Sorcery",
        moreInfoDescription: "A simple 2D platformer developed as a group project. The game is built in Unity 2D, using c#. The game features simple, yet satisfying platforming mechanics, with various different obstacles such as falling and moving platforms."
        + "Players move through each of the three levels, starting from the bottom and making their way to the top, collecting keys and avoiding obstacles. I worked on various components of the game, including designing and implementing levels, as well as implementing " 
        + "the obstacles such as the moving platforms and the falling platforms.",
        bullets: [
            "Developed in Unity 2D using c#",
            "Simple, yet satisfying to control platformer",
            "Collect keys and avoid various obstacles to make it to the end of the level",
            "Developed as a group project, with 4 members",
            "Designed and implemented 3 different levels",
        ],
        website: false,
        videoLink: "https://youtu.be/9wHN65hwF5I"
    },
    {
        title: "Three Meals a Day",
        description: "A 3D simulation game where players can go through the steps of cooking three different meals, in three different levels.",
        image: ThreeMealsADayImage,
        link: "https://github.com/ilhl3/Three-meals-a-day",
        moreInfoDescription: "A 3D simulation game developed as a group project. The game is built in Unity 3D, using c#. The game features three different levels, each with a different meal that players can cook. Players go through the steps of cooking the meal, "
        + "such as chopping vegetables. The game is meant to be used as a teaching tool for people to learn how to cook a recipe, with simple but effective animations displaying each step of the process."
        + "I worked on various components of the game, but primarily was involved in working on the second level, where players cook garlic fried rice for lunch.",
        bullets: [
            "Developed in Unity 3D using c#",
            "Go through the steps of cooking three different meals in three different levels",
            "One recipe for breakfast, one for lunch, and one for dinner",
            "Simple but effective animations displaying each step of the cooking process",
            "Developed as a group project, with 4 members",
            "Worked primarily on the second level, where players cook garlic fried rice for lunch"
        ],
        website: false,
        videoLink: "https://youtu.be/Y06Nzj-PmX8"
    },
    {
        title: "Cards and Caverns",
        description: "A 2D card game where players use cards to battle against various monsters and bosses, with the goal of making it to the end of the dungeon.",
        image: CardsAndCavernsImage,
        link: "https://github.com/ilhl3/Cards-and-Caverns",
        moreInfoDescription: "A 2D card game developed as a group project. The game is built in Unity 2D, using c#. The game features various different cards that players can use to battle against monsters and bosses, with the goal of making it to the end of the dungeon." 
        + "Players start with a basic deck of cards, and can acquire new cards as they progress through the dungeon. I worked on various components of the game, including designing and implementing levels, as well as implementing the card system and the combat mechanics."
        + "The game features a map which players can use to navigate through the dungeon, clicking on the next level they wish to visit. Each path has different monsters and bosses, as well as different rewards such as new cards or regaining lost health.",
        bullets: [
            "Developed in Unity 2D using c#",
            "Use cards to battle against various monsters and bosses, with the goal of making it to the end of the dungeon",
            "Multiple different levels, each with different monsters",
            "Final boss level to end the game",
            "Map system where players can choose which level to go to next",
            "Developed as a group project, with 6 members"
        ],
        website: false,
        videoLink: ""
    },
    {
        title: "Tower Defence",
        description: "A 2D tower defence game where players can place different turrets to defend against waves of enemies",
        image: TowerDefenceImage,
        link: "https://youtu.be/45lPIEgSpXI",
        moreInfoDescription: "A 2D tower defence game developed as a group project. The game is built in Unity 2D, using c#. The game features various different turrets that players can place to defend against waves of enemies."
        + "Players have a menu on the left side of the screen where they can select which turret to place and then click on a tile to place the turret. Each turret has different stats such as damage, range, and fire rate, and players must strategically place their turrets"
        + "to defend against the waves of enemies.",
        bullets: [
            "Developed in Unity 2D using c#",
            "Place different turrets to defend against waves of enemies",
            "Multiple different turrets with different stats such as damage, range, and fire rate",
            "Multiple different levels with increasing difficulty",
            "Developed as a group project, with 2 members",
            "Created the art assets for the game, including the turrets, enemies, and background",
            "Early school project but still a functional and enjoyable tower defence game"
        ],
        website: false,
        noGitHub: true,
    }, 
    {
        title: "Backlog Tracker",
        description: "A simple website where users can create an account and track the games they own as well as details such as rating and review",
        image: BacklogImage,
        link: "https://github.com/Tajinder9753/Backlog-Tracker",
        moreInfoDescription: "A simple website meant for users to be able to securely create an account and sign in, to add/update the games they have and the status of their playthroughs."
        + "Players can also add a star rating, write up a review of the game, and store the systems they own the game on. The website was built using vite react on the frontend and express, node.js on the backend"
        + "The information is being fetched from RAWG database, with user information being stored in MongoDB",
        bullets: [
            "Developed using vite, react, express, node.js, graphql, MongoDB",
            "Secure sign in using jwt with a token being stored in the cookies",
            "Protected routes setup so only signed in users can access the dashboard page or add/update game info",
            "Information fetched from RAWG for all the games, with user specific info stored in MongoDB",
            "Users can add/update games along with rating, review, status and owned platforms for the game",
            "Searchbar to search for specific games",
            "Note: backend is hosted on render which shuts down after inactivity, so the first entry to the site may take a few minutes to load the details"
        ],
        website: true,
        websiteLink: "https://backlog-tracker-p7px.vercel.app/"
    },

    {
        title: "Tank Commanders",
        description: "A simple 3D tank battling multiplayer game built in Unreal Engine. Players battle enemy NPCs scattered throughout the level, collecting powerups and earning a score for each destroyed tank.",
        image: TankImage,
        link: "https://youtu.be/CPi5C5GGoVo",
        moreInfoDescription: "A simple 3D tank battling multiplayer game built in Unreal Engine. Players engage in simple tank battles with enemy NPCs which are patrolling throughout the level."
        + "NPCs may drop collectibles when they are defeated including health powerups and score powerups. The goal is to defeat the most amount of enemies and get the highest score.",
        bullets: [
            "Built in Unreal Engine",
            "Multiplayer game",
            "Simple but fun to play gameplay mechanics",
            "Simple powerups to make the game more engaging",
            "Simple enemy AI which can chase and shoot back at the player"
        ],
        website:false,
        noGitHub: true,

    },
];