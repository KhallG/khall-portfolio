const plugins = [
  {
    title: "Combine Fabricator",
    shortDescription: "A machine that allows Combine units to create weapons, ammunition, and equipment.",
    detailedDescription: `The Combine Fabricator is a unique crafting system inspired by Half-Life: Alyx. 
      It allows units to manufacture authorized weapons, ammunition, and specialized Combine equipment using resin tubes as a core resource.
      <br><br>Featuring the ported model by <a href="https://steamcommunity.com/profiles/76561198981346192/" target="_blank" rel="noopener noreferrer">@Tohey</a>, 
      it comes complete with all the authentic animations and sounds from the game.`,
    media: [
      { type: 'video', src: "https://www.youtube.com/watch?v=ZH9Naj9w8uA" },
      { type: 'image', src: "https://media.discordapp.net/attachments/567765409252638913/1418189001491222599/image.png?ex=68df032e&is=68ddb1ae&hm=d9b3d58b77a0e7e185099d7a7e3ae1cb96f0639d61ed85306b4da6f10e1d84f6&=&format=webp&quality=lossless&width=1523&height=856" }
    ],
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Infestation Control",
    shortDescription: "A system that allows Workforce units to contain and eliminate Xen infestations.",
    detailedDescription: `The <strong>Infestation Control System</strong> brings the <strong>Xen flora</strong> from <em>Half-Life: Alyx</em> into the game, along with its signature mechanics. Contaminated growths must be <strong>contained with foam</strong> to prevent further spread, a critical task assigned to the <strong>Combine Workers</strong>.  
    <br><br>
    The plugin introduces the <strong>Foam Applicator</strong>, used to neutralize infestations, and the <strong>Foam Tank</strong>, where applicators can be recharged. Once collected, the contaminated biomass must be <strong>incinerated</strong> to ensure total eradication of the threat.  
    <br><br>
    This system was <strong>inspired by the work of</strong> <a href="https://steamcommunity.com/profiles/76561198251001690" target="_blank" rel="noopener noreferrer">@Aspect</a>, and further expanded with custom mechanics and immersive integration.`,
    video: "https://www.youtube.com/watch?v=BDFsUezctc0&t=1s",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Sleep System",
    shortDescription: "A system that manages player sleep and fatigue, affecting gameplay and interactions.",
    detailedDescription: `The <strong>Sleep System</strong> introduces a new <strong>fatigue mechanic</strong> that gradually affects your character over the course of the day. The longer they remain active, the more <strong>tired</strong> they become, eventually requiring rest to recover.  
    <br><br>
    To enhance immersion, automatic <strong>/me actions</strong> are triggered in the chat, reflecting the character’s growing exhaustion. In addition, <strong>yawning sounds</strong> will occasionally play, signaling to others that the player is becoming fatigued.`,
    video: "https://www.youtube.com/watch?v=tR0gvDWpolc",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Better Forcefields",
    shortDescription: "Revamped forcefield system with new access options, hackable and repairable.",
    detailedDescription: `The <strong>Better Forcefields</strong> plugin expands the standard system with new functional <strong>variants</strong>, offering greater control over movement and security.  
    <br><br>
    - The <strong>yellow forcefield</strong> allows passage only to <strong>Combine Workers</strong> and the civilian population.<br>  
    - The <strong>red forcefield</strong> is restricted exclusively to <strong>Combine units</strong>.  
    <br><br>
    Forcefields are not invincible: they can be <strong>hacked</strong> using a <strong>Multi-Tool</strong>, or even <strong>broken down by zombies</strong> during attacks. However, they can also be <strong>repaired and restored</strong> by authorized Combine Workers, ensuring continued control of secured zones.`,
    video: "https://www.youtube.com/watch?v=hjMa-H3U44o",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Bodybags",
    shortDescription: "A simple system for disposing of bodies, featuring interactions and corpse incineration.",
    detailedDescription: `The <strong>Bodybags System</strong> provides a complete method for handling corpses in an immersive way. Fallen characters can be placed inside a <strong>bodybag</strong>, allowing units to transport and conceal the remains with efficiency.  
    <br><br>
    Once secured in a bodybag, the only proper method of disposal is <strong>incineration in a furnace</strong>, ensuring that no trace is left behind.`,
    video: "https://www.youtube.com/watch?v=_njeB7TGO1s",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Zombies !",
    shortDescription: "A system where headcrab can take control of players, turning them into playable zombies.",
    detailedDescription: `The <strong>Zombie System</strong> brings the terrifying creatures of <em>Half-Life: Alyx</em> into the game, faithfully integrating multiple iconic types such as the <strong>Classic zombie</strong>, the <strong>Fast zombie</strong>, and the fearsome <strong>Zombine</strong>.  
    <br><br>
    In addition to these core variants, the plugin also introduces <strong>Armored Headcrab Zombies</strong>, whose reinforced shell make them completely <strong>immune to headshot damage</strong>, forcing players to adapt their combat strategies.`,
    video: "https://www.youtube.com/watch?v=Du7ha3ic7GY",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Combine Wallhammer",
    shortDescription: "Fully working wall hammer for HL:A, featuring shield functionality and accurate animations.",
    detailedDescription: `The <strong>Wallhammer System</strong> faithfully recreates the behavior of the <strong>Wallhammer unit</strong> from <em>Half-Life: Alyx</em>. This plugin features its <strong>original animations</strong> along with a <strong>custom model</strong> created by <a href="https://steamcommunity.com/profiles/76561198981346192/" target="_blank" rel="noopener noreferrer">@Tohey</a>.  
    <br><br>
    The unit’s iconic <strong>energy shield</strong> is fully functional, allowing it to <strong>block bullets, melee strikes, and other attacks</strong>. In addition, the shield is capable of performing a <strong>flash attack</strong> that disorients and blinds opponents, creating unique tactical opportunities during combat.`,
    video: "https://www.youtube.com/watch?v=XvmgggAi858&t=3s",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Gaz System",
    shortDescription: "A system where areas can contain toxic gas, forcing players to rely on gas masks to survive.",
    detailedDescription: `The <strong>Gas System</strong> introduces specialized <strong>Helix areas</strong> filled with toxic gas. Players who remain inside these zones will continuously <strong>take damage</strong> over time, making them highly dangerous to traverse without proper protection.  
    <br><br>
    The primary method of survival is the use of a <strong>gas mask</strong>, which shields the wearer from the harmful effects. This mechanic encourages strategic gameplay, resource management, and reinforces the oppressive atmosphere of the city.`,
    video: "https://www.youtube.com/watch?v=mgGyXf4-RkM",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Apartment System",
    shortDescription: "A system that manages player apartments, allowing them to customize their living space.",
    detailedDescription: `The <strong>Apartment System</strong> allows citizens to <strong>claim an apartment</strong> through the Civil Station by spending a required amount of <strong>loyalty points</strong>.  
    <br><br>
    Once acquired, the apartment becomes the player’s personal living space, which can be <strong>modified and customized</strong> to their needs. Players are able to place, move, and arrange <strong>furniture</strong> inside, creating a unique environment that reflects their status within the city.`,
    video: "https://www.youtube.com/watch?v=JEp41kIEZWA",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Padlocks system",
    shortDescription: "A padlock system that interact with helix containers and completely secures them.",
    detailedDescription: `The <strong>Padlocks System</strong> allows players to secure both <strong>Helix containers</strong> and <strong>doors</strong> with attachable padlocks.  
    <br><br>
    When a padlock is placed, the player automatically receives a <strong>unique key</strong> that matches the lock. This key can then be duplicated onto a <strong>blank key</strong>, enabling trusted allies to gain access while preventing unauthorized entry.  
    <br><br>
    Padlocks are not permanent: once placed, they can also be <strong>removed and recovered</strong>, allowing players to reuse them or reposition them as needed.  
    <br><br>
    Inspired by the work of <a href="https://steamcommunity.com/profiles/76561198251001690" target="_blank" rel="noopener noreferrer">@Aspect</a>, this plugin expands the original idea with seamless Helix integration, providing communities with a flexible and immersive security system.`,
    video: "https://www.youtube.com/watch?v=Ltcw4udFxg0",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Fast Zombie",
    shortDescription: "A fast-moving HL2 inspired zombie that poses a greater threat to players.",
    detailedDescription: `This plugin introduces the Fast Zombie from Half-Life 2, reimagined with adaptations to fit the Half-Life: Alyx lore. 
    These creatures are capable of climbing walls, making them far more unpredictable and dangerous during encounters.  
    <br><br>
    The system also includes variant types, such as the Armored Headcrab, which makes the zombie's head completely immune to head damage, forcing players to adapt their tactics in order to survive.`,
    video: "https://www.youtube.com/watch?v=2Qny7RBvB-o",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  },
  {
    title: "Radios",
    shortDescription: "A system that allows players to use radios for listening music and propaganda.",
    detailedDescription: `The Radio System is an interactive entity that comes with multiple radio models, allowing players to tune in to music broadcasts or propaganda speeches within the city.  
    <br><br>
    Originally developed by <a href="https://steamcommunity.com/profiles/76561198162492482/" target="_blank" rel="noopener noreferrer">@Biazox</a>, the base plugin has been modified and expanded by me to add more customization, improved visuals, and immersive integration.`,
    video: "https://www.youtube.com/watch?v=6ZWDI-X0k-w",
    links: [
      {
        url: "https://www.youtube.com/@resoproject",
        label: "See more on Youtube"
      }
    ]
  }
];

export default plugins;
