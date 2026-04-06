// ============================================================
//  EDIT YOUR CONTENT HERE
//  Save the file, then refresh your browser to see changes.
// ============================================================

const content = {

  // --- HOME PAGE ---
  home: {
    name:    "Emma Stokki",
    tagline: "Game Programmer student at The Game Assembly, Stockholm"
  },

  // --- HOME PAGE: the three clickable section links ---
  sections: [
    {
      title:       "Specialisation Project",
      description: "",
      //emoji:       "🖼",
      image:       "img/grass2.png",
      link:        "portfolio.html"
    },
    {
      title:       "Game Projects",
      description: "Games I have collaborated on.",
      emoji:       "🎮",
      link:        "gameprojects.html"
    },
    {
      title:       "About Me & Contact",
      description: "Get in touch - I would love to hear from you.",
      emoji:       "✉️",
      link:        "contact.html"
    }
  ],

  // --- SPECIALISATION PROJECT PAGE ---
  portfolio: {
    heading: "Specialisation Project",
    intro:   "",
    // ✏️ Paste a YouTube URL or a local file path e.g. "img/myvideo.mp4". Leave "" for placeholder.
    video:   "img/spec_Inspelning.mp4",
    projects: [
      {
        title:       "Project Title",
        description: "",
        emoji:       "🖼"
      }
    ]
  },

  // --- GAME PROJECTS PAGE ---
  // ✏️ Write projects oldest first — the page shows them newest first automatically.
  // ✏️ image: put your thumbnail in the img/ folder. Leave "" if none.
  // ✏️ youtube: paste the full YouTube URL. Leave "" if none.
  //Games I have designed, developed, or contributed to.
  gameprojects: {
    heading: "Game Projects",
    intro:   "Games I have collaborated on.",
    projects: [
      {
        title:       "Project 1 - BugBot",
        description: "Made in Unity.",
        text:        "Engine: Unity\nTheme: Obstacle course\nLength/Time: 6 weeks, 15h/week",
        emoji:       "🎮",
        image:       "img/Project1_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer1_BugBot.mp4"
      },
      {
        title:       "Project 2 - SewerMasterchef",
        description: "Mobile game. Made in Unity.",
        text:        "Engine: Unity\nTheme: Puzzle Mobile game\nLength/Time: 6 weeks, 15h/week",
        emoji:       "🎮",
        image:       "img/Project2_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer2_SewerMasterchef.mp4"
      },
      {
        title:       "Project 3 - Blade of Will",
        description: "Made in TGE.",
        text:        "Engine: TGE\nTheme: Platformer\nLength/Time: 12 weeks, 20h/week",
        emoji:       "🎮",
        image:       "img/Project3_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer3_BladeOfWill.mp4"
      },
      {
        title:       "Project 4 - Cheff Jeff",
        description: "Made in TGE.",
        text:        "Engine: TGE\nTheme: Adventure\nLength/Time: 8 weeks, 20h/week",
        emoji:       "🎮",
        image:       "img/Project4_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer4_CJ.mp4"
      },
      {
        title:       "Project 5 - Cycles Of Deluge",
        description: "Made in our own engine, No Carry Engine.",
        text:        "Engine: No Carry\nTheme: Spite\nLength/Time: 14 weeks, 20h/week",
        emoji:       "🎮",
        image:       "img/Project5_thumbnail.png",
        youtube:     "",
        video:       "img/Trailer5_CoD.mp4"
      },
      {
        title:       "Project 6 - Human Resources",
        description: "WIP",
        text:        "Engine: No Carry\nTheme: First Person Perspective\nLength/Time: 15 weeks, 20h/week",
        emoji:       "🎮",
        image:       "",
        youtube:     "",
        video:       ""
      }
    ]
  },

  // --- ABOUT ME & CONTACT PAGE ---
  contact: {
    heading: "About Me & Contact",
    aboutHeading: "About Me",
    // ✏️ Write your about me text here. Each entry becomes a paragraph.
    aboutParagraphs: [
      "---",
      "I am part of The Game Assembly's internship program. As per the agreement between the Games Industry and The Game Assembly, neither student nor company may be in contact with one another regarding internships before April 15. Any internship offers can be made on April 27th, at the earliest."
    ],
    contactHeading: "Contact",
    intro: ""
  }

};
