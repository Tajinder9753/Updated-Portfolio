import UncleJoeImage from "@/assets/Projects_Images/UncleJoe.png";
import MystifyingSorceryImage from "@/assets/Projects_Images/MystifyingSorcery.png";
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
        ]
    },
    {
        title: "Mystifying Sorcery",
        description: "A simple 2D platformer, where you navigate through levels collecting keys and avoiding various obstacles to make it to the end of the level.",
        image: MystifyingSorceryImage,
        link: "https://github.com/ilhl3/Mystifying-Sorcery",
        moreInfoDescription: "This is more info 2",
        bullets: [
            "Developed in Unity 2D using c#",
            "Simple, yet satisfying to control platformer",
            "Collect keys and avoid various obstacles to make it to the end of the level",
            "Developed as a group project, with 4 members",
            "Designed and implemented 3 different levels",
        ]
    }
];