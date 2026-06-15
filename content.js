// ============================================================
//  EDIT YOUR CONTENT HERE
//  Save the file, then refresh your browser to see changes.
// ============================================================

const content = {

  // --- HOME PAGE ---
  home: {
    name:    "Emma Stokki",
    tagline: "Game Programmer"
  },

  // --- HOME PAGE: the three clickable section links ---
  // ✏️ image: shown in the thumbnail. Leave "" for emoji only.
  // ✏️ video: short clip that plays on hover. Leave "" for no video.
  sections: [
    {
      title:       "A grid-based world builder - farm edition",
      description: "Specialisation Project",
      emoji:       "🖼",
      image:       "img/spec-preview_still.png",
      video:       "img/spec-preview.mp4", //  e.g. "img/spec-preview.mp4"
      link:        "portfolio.html"
    },
    {
      title:       "Game Projects",
      description: "Games I have collaborated on.",
      emoji:       "🎮",
      image:       "img/thumbnail_P7.png",
      video:       "img/games-preview_v2.mp4", // ✏️ e.g. "img/games-preview.mp4"
      link:        "gameprojects.html"
    },
    {
      title:       "About Me & Contact",
      description: "Get in touch - I would love to hear from you.",
      emoji:       "✉️",
      image:       "img/letter.png",
      video:       "",
      link:        "contact.html"
    }
  ],

  // --- SPECIALISATION PROJECT PAGE ---
  // portfolio: {
  //   heading: "Specialisation Project",
  //   intro:   "A grid-based world builder - farm edition",
  //   // ✏️ Paste a YouTube URL or a local file path e.g. "img/myvideo.mp4". Leave "" for placeholder.
  //   video:   "img/spec_Inspelning.mp4",
  //   projects: [
  //     {
  //       title:       "Project Title",
  //       description: "Short description of what this project is and what you did.",
  //       emoji:       "🖼"
  //     }
  //   ]
  // },

  // --- SPECIALISATION PROJECT PAGE ---
  portfolio: {
    heading: "Specialisation Project",
    intro:   "A selection of projects I have worked on.",
    // ✏️ Main video at the top of the page.
    video:   "img/spec_Inspelning.mp4",
    // ✏️ Video shown after the Excel diagonal example image, before the bitmask explanation.
    videoTiling:  "img/changetile.mp4", // e.g. "img/tiling_demo.mp4"
    // ✏️ Video shown just before the fence code block.
    videoFence:   "img/changefence.mp4", // e.g. "img/fence_demo.mp4"
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
  // ✏️ image: put your thumbnail in the img/ folder. Leave "" if none.
  // ✏️ youtube: paste the full YouTube URL. Leave "" if none.
  gameprojects: {
    heading: "Game Projects",
    intro:   "Games I have collaborated on.",
    projects: [
      {
        title:       "Project 1 - BugBot",
        description: "Made in Unity.",
        text:        "Engine: Unity\nTheme: Obstacle course\nDuration: 6 weeks, 15h/week\nContributions: UI, Sound",
        emoji:       "🎮",
        image:       "img/Project1_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer1_BugBot.mp4"
      },
      {
        title:       "Project 2 - SewerMasterchef",
        description: "Mobile game. Made in Unity.",
        text:        "Engine: Unity\nTheme: Puzzle Mobile game\nDuration: 6 weeks, 15h/week\nContributions: Puzzle triggers, UI, Sound, Tutorial",
        emoji:       "🎮",
        image:       "img/Project2_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer2_SewerMasterchef.mp4"
      },
      {
        title:       "Project 3 - Blade of Will",
        description: "Made in TGE.",
        text:        "Engine: TGE\nTheme: Platformer\nDuration: 12 weeks, 20h/week\nContributions: Collision system, UI, PickUp ",
        emoji:       "🎮",
        image:       "img/Project3_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer3_BladeOfWill.mp4"
      },
      {
        title:       "Project 4 - Cheff Jeff",
        description: "Made in TGE.",
        text:        "Engine: TGE\nTheme: Adventure\nDuration: 8 weeks, 20h/week\nContributions: UI",
        emoji:       "🎮",
        image:       "img/Project4_Thumbnail.png",
        youtube:     "",
        video:       "img/Trailer4_CJ.mp4"
      },
      {
        title:       "Project 5 - Cycles Of Deluge",
        description: "Made in custom engine, No Carry Engine.",
        text:        "Engine: No Carry Engine\nTheme: Spite\nDuration: 14 weeks, 20h/week\nContributions: Animation system, UI, VFX",
        emoji:       "🎮",
        image:       "img/Project5_thumbnail.png",
        youtube:     "",
        video:       "img/Trailer5_CoD.mp4"
      },
      {
        title:       "Project 6 - Human Resources",
        description: "Made in custom engine, No Carry Engine.",
        text:        "Engine: No Carry Engine\nTheme: First Person Perspective\nDuration: 15 weeks, 20h/week\nnContributions: Player movement (PhysX), Gameplay mechanics",
        emoji:       "🎮",
        image:       "",
        youtube:     "",
        video:       "img/Trailer_P6.mp4"
      },
       {
        title:       "Project 7 - Milk of Tomorrow",
        description: "Made in custom engine, No Carry Engine.",
        text:        "Engine: No Carry Engine\nTheme: \nDuration: 9 weeks, 40h/week\nContributions: PhysX character controller, NPC spline pathing, Spline editor tool",
        //Write your longer description here.\n\nYou can have multiple paragraphs by adding \\n\\n between them.
        details:     "",
        emoji:       "🎮",
        image:       "img/thumbnail_P7.png",
        youtube:     "",
        video:       "img/Trailer_final_Milk.mp4"
      }
    ]
  },

  // --- ABOUT ME & CONTACT PAGE ---
  contact: {
    heading: "About Me & Contact",
    aboutHeading: "About Me",
    // ✏️ Write your about me text here. Each entry becomes a paragraph.
    aboutParagraphs: [
      "I'm a Game Programming student at The Game Assembly, a higher vocational school.\nI've loved playing video games for as long as I can remember, as cliché as that might sound, and this education has been a great introduction to this wonderful world of game development.\nAside from gaming, I spend a lot of time on different creative hobbies like knitting, sewing, drawing, and honestly anything else that falls into that category. I enjoy creating things, whether it's digital or something I can hold in my hands."
    ],
    contactHeading: "Contact",
    intro: ""
  }

};
