// ============================================================
//  EDIT YOUR CONTENT HERE
//  Save the file, then refresh your browser to see changes.
// ============================================================

const content = {

  // --- HOME PAGE ---
  home: {
    name:    "Your Name",
    tagline: "A short description about yourself — designer, developer, creator, or whatever fits you best."
  },

  // --- HOME PAGE: the three clickable section links ---
  sections: [
    {
      title:       "Portfolio",
      description: "A collection of my work — design, development, and creative projects.",
      emoji:       "🖼",
      link:        "portfolio.html"
    },
    {
      title:       "Game Projects",
      description: "Games I have built, prototyped, or collaborated on.",
      emoji:       "🎮",
      link:        "gameprojects.html"
    },
    {
      title:       "Contact",
      description: "Get in touch — I would love to hear from you.",
      emoji:       "✉️",
      link:        "contact.html"
    }
  ],

  // --- PORTFOLIO PAGE ---
  portfolio: {
    heading: "Portfolio",
    intro:   "A selection of projects I have worked on.",
    projects: [
      {
        title:       "Project Title",
        description: "Short description of what this project is and what you did.",
        emoji:       "🖼"
      }
    ]
  },

  // --- GAME PROJECTS PAGE ---     
  // ✏️ Write projects oldest first — the page shows them newest first automatically.
  // ✏️ image: put your thumbnail in the img/ folder, e.g. "img/game1.jpg". Leave "" if none.
  // ✏️ video: put your video file in the img/ folder, e.g. "img/game1.mp4". Leave "" if none.
  //    Supported formats: .mp4 (recommended), .webm
  gameprojects: {
    heading: "Game Projects",
    intro:   "Games I have designed, developed, or contributed to.",
    projects: [
      {
        title:       "Game Title 1",
        description: "Made in Unity.",
        emoji:       "🎮",
        image:       "img/Thumbnail_P1_G4.png",
        video:       "img/SP1_G4_BugBot_Trailer.mp4"
      },
      {
        title:       "Game Title 2",
        description: "Mobile game. Made in Unity.",
        emoji:       "🎮",
        image:       "img/Trailer_Thumbnail.png",
        video:       "img/Trailer_SewerMasterchef_SP2G2.mp4"
      },
      {
        title:       "Project 3 - Blade of Will",
        description: "Made in TGE.",
        emoji:       "🎮",
        image:       "img/BladeOfWill_YoutubeThumbnail.png",
        video:       "img/BladeOfWill_Trailer.mp4"
      },
      {
        title:       "Project 4 - Cheff Jeff",
        description: "Made in TGE.",
        emoji:       "🎮",
        image:       "img/Trailer_Thumbnail_SP4_Gr6.png",
        video:       "img/Trailer_SP4_Gr6.mp4"
      },
      {
        title:       "Project 5 - Cycles Of Deluge",
        description: "Made in our own engine, No Carry Engine.",
        emoji:       "🎮",
        image:       "",
        video:       "img/CoD_Trailer.mp4"
      },
      {
        title:       "Game Title 6",
        description: "WIP.",
        emoji:       "🎮",
        image:       "",
        video:       ""
      }
    ]
  },

  // --- CONTACT PAGE ---
  contact: {
    heading: "Contact",
    intro:   "Have a question or want to work together? Send me a message!"
  }

};
