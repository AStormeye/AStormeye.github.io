/* O Trovador — Codex das Divindades · data
   window.CODEX_DATA = { pantheons: [ { id, name, type, accent, accentDeep, tagline, blurb, deities:[...] } ] }
   Deity schema:
     name, fullName, headerLabel, tagline, epithets,
     img, img2, hasArt,
     animal, colors[], symbol,
     p1, p2, concerns[], edictsShort[], anathemaShort[],
     attr, font, sanct, skill, weapon, domains, altDomains, spells,
     fullParas[], edictsFull[], anathemaFull[], pending(optional)
*/
window.CODEX_DATA = {
  pantheons: [
    {
      id: "antarian",
      name: "The Antarian Pantheon",
      type: "Major Pantheon",
      accent: "#e2911c", accentDeep: "#c26a12",
      tagline: "The faith of humanity — creation, prophecy, and the Messiahs.",
      blurb: "Aldar's children: the gods who shaped humanity from divine blood and hold the barrier against the Fae. Seven powers of creation, wild magic, arcane law, and the three Messiahs.",
      lore: {
        origin: [
          "Before the Ninth World existed, the space of creation was inhabited by beings of vast power whose motions gave shape to the cosmos and origin to the worlds preceding this one. Aldar was among them — but where others moved to create and to compete, he remained still and deliberate, watching eight prior creations form and fail.",
          "When the last of those worlds collapsed and the gods who had built it fell silent or withdrew, Aldar acted. He sought out two others who had also held back from the earlier cycles — Vandux and Cástia — and the three together turned their attention to the elemental force drifting formless through the void: raw matter left over from existences already ended. Aldar imposed his will on the elemental spirits remaining from those collapsed creations, binding them to his design. From their substance he drew the material from which the Ninth World was built. Cástia and Vandux organized what was necessary to sustain it: the laws governing time and space, the network of magical lines running through the creation's fabric, the other creatures that would share the world with its intended inhabitants.",
          "Those inhabitants were humanity. Aldar shaped them from his own blood and power — foreseeing, creative, and ambitious, made in the image of a god who plans before he acts. The creation of humanity was not a secondary consequence of building a world. It was the world's purpose."
        ],
        sects: [
          {
            name: "Steel Saints", subtitle: "The largest and most politically consequential sect",
            paragraphs: [
              "The Steel Saints are the largest and most politically consequential sect of the Antarian Pantheon. Their structure mirrors a military hierarchy: ranks of command exist, authority flows downward, and the organization's mandate precedes any individual concern. That mandate has three components — defending the human race through politics and the sword, unifying the nations bound by Aldar's bloodline under a common purpose, and eliminating any concentration of Xeno corruption within reach.",
              "Their devotional focus is the most martial corner of an already martial faith: Aldar and his three recognized Messiahs — Marduk, Ianbadev, and Ariela. Inquisitions against corruption are organized under their authority; Blood Hunts — coordinated campaigns against non-human elements deemed hostile to human civilization — are conducted with their endorsement and logistical support.",
              "Membership is restricted to humans. Practitioners of non-divine magic are ineligible."
            ],
            symbol: "A purple coat of arms bearing six weapons arranged clockwise: a silver sword, a gold sword, the blunt end of a black lance, a scarlet sword, a second gold sword, and the sharpened end of a black lance.",
            colors: "purple, silver, red",
            benefits: "Training in social skills or religious knowledge; proficiency with the signature weapons of Aldar, Ariela, Ianbadev, and Marduk; access to equipment and derivatives made from Red Iron; shelter at sect refuges; reduced prices for arms, armor, and sacred equipment; financial support for investigations into crimes against humanity or hostile Xeno activity.",
            edicts: ["Defend the human race as a collective; treat actions against humanity as a primary concern that supersedes all other obligations", "Collaborate with Inquisitions and Blood Hunts when summoned; maintain sect secrets, kingdom intelligence, and ecclesiastical information without exception unless fulfilling the first obligation requires otherwise", "Contribute annually to the sect in material, funds, or service"],
            anathema: ["Collaborate with any action that could weaken the human race as a whole", "Strengthen the position of a non-human unless doing so is strictly necessary to fulfill the first obligation", "Accept membership from a non-human or from a practitioner of non-divine magic"]
          },
          {
            name: "The Arcane Trinity", subtitle: "Institutional authority over all things supernatural",
            paragraphs: [
              "The Arcane Trinity holds that the gods of magic require an institutional presence in the world — not a body of armed paladins, but an organization capable of studying, acquiring, containing, and policing all things supernatural within its reach. The sect worships Cástia, Vandux, and Cyx jointly and has become the dominant religious authority in Kastoy.",
              "Their work is practical rather than devout in the conventional sense. They maintain libraries, license the use of dangerous magical objects, locate and contain artifacts removed from secure custody, fund expeditions to ruins, and investigate supernatural disturbances local authorities cannot address.",
              "Membership is restricted to practitioners of non-divine magic."
            ],
            symbol: "An eye suspended above a vortex caught within a portal.",
            colors: "blue, white, gold",
            benefits: "Training in magical knowledge; access to the sect's libraries and knowledge repositories; reduced prices for magical components and items; authorization to handle magical artifacts and dangerous objects; financial support for expeditions to ruins.",
            edicts: ["Submit any artifact or dangerous magical object in your possession to the sect, or report its location if you cannot retrieve it yourself", "Collaborate with the sect in investigations, expeditions, and research when called upon", "Contribute annually through monetary donations, research findings, or newly documented magical discoveries"],
            anathema: ["Practice dangerous or unlicensed magic", "Retain a dangerous artifact without sect authorization when the sect has the means to secure it", "Accept membership from a practitioner of divine magic"]
          },
          {
            name: "The Azurri Nobility", subtitle: "Guardians against uncontrolled wild magic (the Evanescence)",
            paragraphs: [
              "The Azurri Nobility exists because Guilhermo Azurri survived the Evanescence — an uncontrolled manifestation of wild magical ability arising without formal training — and because no institution except Cyx's church was willing to do anything useful about it. Marduk recruited him during that period; when Marduk ascended, Guilhermo turned his attention fully to the danger uncontrolled wild magic represents.",
              "The church of Cyx provided funding, arranged treatment and training for other Evanescents he located, and secured noble titles for those who entered the organization. The sect operates by conscription: members may recruit others — by amnesty, debt settlement, or influence — to assist in neutralizing magical threats.",
              "Membership is restricted to humans carrying the Evanescence condition. No heirs may be held while a member is active; titles transfer only to confirmed apprentices at retirement."
            ],
            symbol: "A one-eyed face — the left eye absent — crowned with a blue diadem.",
            colors: "blue, grey, silver",
            benefits: "Proficiency with any weapon; use of Arcane Trinity and Steel Saints facilities when pursuing a magical threat; financial support for such operations; authority to conscript individuals to assist; a noble title, generally the lowest available in the member's region of origin.",
            edicts: ["Contribute consistently to the work of the sect; neutralize magical threats within your reach", "Use sect facilities, noble title, and conscription authority exclusively in service of neutralizing magical threats", "Report individuals you encounter who carry the Evanescence condition to the sect"],
            anathema: ["Produce or acknowledge heirs while affiliated with the sect", "Use your noble title or sect authority for purposes unrelated to the sect's mandate", "Transfer your title to anyone other than a confirmed apprentice upon retirement", "Accept membership from anyone who does not carry the Evanescence condition or from a non-human"]
          },
          {
            name: "The Silver Cross", subtitle: "Seekers of the two lost Messiahs, Eidala and Irothellos",
            paragraphs: [
              "The Silver Cross is the sect the established Antarian orders view with the greatest discomfort, because its founding premise is that the official count of Aldar's Messiahs is wrong. Briana of Etoia founded the sect in 103 of the Fourth Era, claiming two unrecorded Messiahs — the siblings Eidala and Irothellos — were captured by enemies of the human race and remain alive, held against their will.",
              "The Innocentary Knights — paladins of the sect, blessed through Eidala's power — travel across Eion seeking evidence of the two lost Messiahs' whereabouts. Its members maintain vows of chastity and benevolence, prefer peaceful resolution of conflict, and avoid taking sentient lives where any alternative exists — working conditions for a mission requiring sustained travel and broad goodwill.",
              "The older Antarian sects regard the Silver Cross as heretical for asserting Messiahs the tradition does not recognize. Membership is open to humans and those of mixed human heritage."
            ],
            symbol: "A silver galloping unicorn with a scarlet shadow.",
            colors: "silver, white, scarlet",
            benefits: "Training in healing techniques or negotiation; access to divine magic; shelter at sect temples; funding for extended travel.",
            edicts: ["Actively seek evidence of the whereabouts of Eidala and Irothellos", "Mediate conflicts and propose peaceful resolutions before endorsing violence", "Maintain the vows of chastity and benevolence while affiliated with the sect"],
            anathema: ["Kill a human or other sentient creature when any viable alternative exists", "Refuse mediation in a conflict within your reach and capacity", "Abandon the active search for the lost Messiahs while affiliated with the sect"]
          }
        ],
        beliefs: [
          { title: "The Wars of Inheritance", paragraphs: [
            "The Antarian faith teaches that the Ninth World was made for humanity. Aldar planned a creation in which his children could flourish, and for a time that plan held. What ended it was the arrival of the Fae — exiles from a failed prior world, without a legitimate claim to any new one, who entered through the Fae Lands seeking to seize what they could not create.",
            "Aldar drove them back by force, and humanity fought alongside him. The fighting was proceeding toward a conclusion when Cástia's intervention changed the terms of war — giving the elves access to the magical lines of the Ninth World. Aldar repelled the invasion nonetheless. From his wounds in that conflict was drawn the barrier that prevents the Fae Lords from returning to this creation in their full power. The war is over. The barrier holds. But the cost of it lives in Aldar's body, and the faith does not permit its faithful to forget that cost."
          ]},
          { title: "The Creation of the End", paragraphs: [
            "During the fighting with the Fae, a structural problem became visible: the elves could not be killed in any permanent way, while human losses were final. A woman — recorded only as a priestess of Cástia — was appointed to a function that had not existed before: she would gather the souls of the dead and carry them to the between-worlds. By introducing finality into Fae death, she rebalanced the war.",
            "The woman is remembered only as the Reaper. Her task was necessary, but it was not glorious, and those who recorded her work were not careful about preserving her name. Over subsequent eras the Reaper became conflated with the concept of death itself."
          ]},
          { title: "The Betrayal of Cástia", paragraphs: [
            "During the invasion, Cástia did not fight. Where Aldar engaged the Fae directly and Vandux maintained deliberate neutrality, Cástia moved toward the invaders out of curiosity. What she found was a people condemned to extinction — exiles without a world — and what she chose was to share her magic with them.",
            "The moment she did so, the Fae gained access to the Ninth World's magical lines, and the first permanent deaths on the human side followed. Aldar censured her; she answered that the world was the work of all three of them, not his alone. Vandux sided with her. Aldar accepted the outcome because no alternative was available.",
            "The Antarian faith teaches that Cástia's action was an error, made for reasons that remain her own — a god may be wrong, and Cástia was."
          ]},
          { title: "Maldrith, the Devourer of Prophecy", paragraphs: [
            "In the earliest nights of the Draconic Era, Eastarus — the Laughing Goddess — sought to undermine the advantage Aldar's people held: the capacity for foresight. She abducted Sarithiel of the Shattered Star, a priestess of the Fae, and from that act produced Maldrith — born when the three moons aligned under the ill omen called the Wolf's Eye.",
            "Maldrith descended on the settlement of Tarvignon and killed the faithful there, evading Aldar's seers entirely. High Inquisitor Morven the Radiant tracked and destroyed the creature — but the curse Eastarus wove into its birth ensures it returns every one hundred and twenty-five years. Aldar sends visions to his prophets at the opening of each new cycle; the Inquisition locates Maldrith through those visions and destroys it again."
          ]},
          { title: "The Winged Serpents", paragraphs: [
            "The dragons were not native to this world — they were an act of desperation. Facing defeat in the final stages of the Wars of Inheritance, the Fae invoked creatures from another failed world in exchange for their service in the war.",
            "The dragons accepted. They won the war — and then turned on the elves who had summoned them, took the world for themselves, and imposed the Draconic Dominion. Aldar, weakened by his wounds, could not prevent it and was barred from his own creation. The Winged Serpents were instruments of war that outgrew the hands that held them."
          ]},
          { title: "The Messiahs", paragraphs: [
            "Exiled from the Ninth World, Aldar cannot intervene with the directness the Wars of Inheritance had required. What he can do, at great cost and long intervals, is manifest an avatar within the world for a limited time — fathering a child who inherits enormous power and a precise understanding of what that power is for. Three such children were recognized in Antarian history and are now worshipped as gods within this pantheon.",
            "Marduk, the third Messiah by birth order, was born during the Kagol Empire; his rebellion against the empire's corruption concluded in his ascension — the liberation of the world from draconic dominion and the imprisonment of the Archlich. Ianbadev, the second, was born during the worst period of Elsur's expansion; he infiltrated occupied territories and assembled a coalition that ended the Dominion, dying and ascending at the moment of his victory. Ariela, third in sequence of ascension, is the one the faith describes as having lived closest to what a Messiah is meant to be; she guided the free peoples of Eion through the second war against the dragons and ascended in 102 of the Fourth Era."
          ]},
          { title: "The God of the End", paragraphs: [
            "Before Elricon, death was administered by the Reaper — elevated over centuries into something resembling divinity without fully becoming it. Elricon ended that arrangement: in the Year of Death's Silence, the necromancer from Sillux fought the Reaper across a sustained campaign and, with divine power Aldar had granted her, defeated her, assuming her function and authority.",
            "The other gods of the pantheon rejected him initially; Aldar interceded and his position was accepted. He is not worshipped within this pantheon — the Antarian faith recognizes him as a necessary administrator of death and instructs its faithful to treat him as a servant of the greater divine order rather than an object of devotion."
          ]},
          { title: "Ariela's Host", paragraphs: [
            "Ariela's gift was foresight — inherited from Aldar — and the capacity for command. When Aldar sent her into the world, he also sent her an army: two hundred angels, nearly all women bearing gleaming arms and white wings, who served as her Host. The presence of a single Triumph Angel was sufficient to renew a battered battalion's will to continue.",
            "One angel stands apart: Nergal, male, his expression habitually hostile, his two pairs of wings broad enough to shelter horses, serves as Ariela's personal guardian and confidant — a last resort that has never been necessary to deploy. From this came the tactical phrase *a flight of Nergal*: the final measure held in reserve until no alternative remains."
          ]},
          { title: "The Clash of the Four", paragraphs: [
            "In 102 of the Fourth Era, during a regular session of the Council of the Five Weapons, the Elsur Empire attempted to retain its seat at any cost, invoking Thol Elsur himself. Aldar's response was immediate: he sent Marduk to face the Storm Lord, accompanied by Jarizan, the elemental god of fire and conflict.",
            "A fourth divine presence also participated in what followed — a battle that leveled the center of Troriad, ended the centuries-long existence of the Black Hawks, and dissolved the Council of the Five Weapons permanently. No record identifies who that fourth party was. The faith preserves the absence without commentary."
          ]},
          { title: "The Fate of Souls", paragraphs: [
            "When an Antarian dies, Elricon judges the soul: whether the deceased lived according to Antarian tradition, honored those obligations, and met their death in a manner consistent with that commitment. If that standard is met, the soul is guided to the Eternal Fields, where the faithful reside alongside the gods and ancestors who held the same values.",
            "For those who fell short, the path does not end at the Eternal Fields. The soul is placed into service — as a guardian of the Fields, a divine messenger, or another function assigned by the gods — until the Antarian gods judge the debt cleared. No fixed term is given; the work ends when the gods say it ends."
          ]}
        ],
        relations: [
          { name: "Fae Lords", stance: "Hostile", quote: "\"With an elf, you only negotiate at swordpoint.\" — Sermons of Ianbadev", paragraphs: [
            "The Antarian faith has a precise accounting of what the Fae are: beings from a world that failed, who invaded a creation that was not theirs because they had nowhere else to go. Hostility is the default — not performed, but doctrinal. No treaty governs the relationship, unlike the Concordat that ended conflict with Tebas.",
            "The faith is not entirely closed to functional distinctions: Dalantherion's reputation with a longsword, the destructive force of Dareth'Shaellen, and Aiene's precise physical technique are quietly respected by Antarian duelists and military clergy. Trial by Duel, administered by the Fae sect called the Judges, is accepted as a legitimate method of dispute resolution — though this does not translate into broader goodwill."
          ]},
          { name: "Pantheon of Tebas", stance: "Armistice", quote: "\"A few hours in the desert and you begin to imagine things... years in it, and you start naming serpents the size of mountains and calling them gods.\" — Sermons of Aldar", paragraphs: [
            "The Concordat of Blood and Sand, signed in 17 of the Fourth Era, ended centuries of active doctrinal conflict. What replaced it is a peace maintained by strategic interest, not by any convergence of belief. The Antarian position is that Tebano theology is a heresy produced by prolonged contact with non-human races — the Tebanos are considered brothers in their opposition to non-human dominance and wrong in almost everything else.",
            "The Vigilants of Dalarid receive acknowledgment and a working degree of respect from Antarian institutions; members of the Society of the Speaking Dead are received in Antarian communities for necromantic study and exchange. The peace is armed — Antarian clergy do not trust the theological direction Tebas has taken, but do not move against it while the Concordat holds."
          ]},
          { name: "Terrestrial Pantheon", stance: "Indifferent", quote: "\"What the rejection of divine truth produces, in those left to find it independently, is every variety of strange and heretical cult.\" — Edict of the Blood Inquisitor", paragraphs: [
            "The Antarian faith holds that the elemental forces the Terrestrials worship were always only raw material for Aldar, Cástia, and Vandux's creation — never independent divine powers. Worshipping them is, at best, ignorance; at worst, evidence of Xeno influence.",
            "The Terrestrial Pantheon's sectarian structure is largely unknown to Antarian clergy outside border regions, where a thin strip of territorial overlap limits contact to more than doctrine can act on."
          ]},
          { name: "Terminus Court", stance: "Friendly", quote: "\"Their existence is tolerated by Aldar's mercy alone.\" — Teachings of Aldar", paragraphs: [
            "One of the more straightforwardly functional cross-pantheon arrangements in Eion. The Court's Cenobites administer the passage of souls and resist the creation of undead — both things the Antarian faith would prefer someone perform reliably.",
            "Elricon is recognized within Antarian theology as having taken the Reaper's function and improved it; the faithful are not asked to worship him, but to treat his servants with respect and make use of their expertise. Cenobites are welcomed in Antarian regions while they stay to their purpose; involvement in religious disputes or politics ends the welcome quickly."
          ]},
          { name: "The Patrons", stance: "Hostile", quote: "\"How could you worship a god that refuses to reveal its true origin?\" — Sermons of Aldar", paragraphs: [
            "The Antarian faith regards the Patrons as a particularly irritating heresy because their theology drew heavily from Antarian tradition and then corrupted what it borrowed. The Patrons' gods are mysterious by design — their origins obscure, their purposes ambiguous — which the Antarian faith teaches is concealment, not wisdom.",
            "The Patrons' sectarian structure is almost entirely unknown to Antarian institutions, owing to the Patrons' deliberate insularity and the rarity of shared territory between the two faiths' adherents."
          ]},
          { name: "Avatars of Vice", stance: "Hostile", quote: "\"The exaltation of the vile, the impure, excess, and hubris... only the pyre or the blade are adequate responses.\" — Sermons of Aldar", paragraphs: [
            "The Avatars and the Antarian Pantheon are incompatible in the way fire and flammable material are incompatible. The Avatars thrive on the corruption of exactly the virtues the Antarian faith cultivates: discipline, loyalty, sacrifice, subordination of desire to collective flourishing.",
            "The faith holds — not universally verified even within its own tradition, but widely believed — that three of Aldar's promised Messiahs never reached the world because the Avatars intervened to prevent it. The Avatars' rites, called Masquerades, are targets for active destruction by every Antarian Inquisition; the Pact-Makers are treated as direct rivals to the Silver Cross and Azurri Nobility."
          ]}
        ]
      },
      deities: [
        {
          name: "ALDAR", fullName: "ALDAR, the Ever-Bleeding",
          headerLabel: "Antarian Pantheon · The Creator",
          tagline: "the Ever-Bleeding · Father of Humanity · the Prevident",
          epithets: "Father of Humanity · the Creator · the Prevident · the Always-Bleeding",
          img: "art/aldar-src.webp", img2: "art/aldar-2.webp", hasArt: true,
          animal: "hawk", colors: ["#ffffff", "#9c2f26"],
          symbol: "The Evolution — twin crosses joined at the lower tip, the lower red and the upper silver.",
          p1: "Aldar appears as a man of serene expression in white robes stained red by wounds that never close. The faith teaches humanity was shaped from his sacred blood; the wounds are the Wars of Inheritance written into his body — every falling drop the price of the barrier that holds the Fae Lords back from creation.",
          p2: "His gift to his children was foresight. Barred from his own world by the Draconic Dominion, he no longer enters it in force. He watches, warns his prophets, and reaches his children through the Messiahs — at the cost of centuries of recovery.",
          concerns: ["humanity", "prophecy", "creation", "civilization", "protection"],
          edictsShort: ["Defend the human race collectively.", "Transmit divine visions without distortion.", "Keep health, discipline, deliberate conduct."],
          anathemaShort: ["Betray or weaken the human race.", "Suppress or falsify a prophetic vision.", "Shelter a Blood Hunt's target without cause."],
          attr: "Wisdom / Constitution", font: "harm / heal", sanct: "holy or unholy",
          skill: "Society", weapon: "double-bladed sword",
          domains: "Duty · Protection · Truth · Vigil", altDomains: "(alt. Creation · Knowledge)",
          spells: "command (1st) · augury (2nd) · zealous conviction (6th)",
          fullParas: [
            "Aldar appears as a man of serene expression dressed in white robes stained red by wounds that do not close. His blood is sacred; the Antarian faith teaches that humanity was shaped from it. The wounds are not a weakness — they are the record of the Wars of Inheritance written permanently into his body. Every drop that falls is the price of the barrier that holds the Fae Lords back from this creation.",
            "The gift Aldar gave his children along with life was foresight. Few humans are true prophets in the formal sense, but the faith teaches that the race's capacity for adaptation — its ability to improvise in conditions it could not have predicted — is a consequence of having been made by a god who sees ahead of time. Prophecy runs thin through the bloodline but never disappears.",
            "During the creation of the Ninth World, Aldar did not act alone: Cástia and Vandux contributed their own abilities and knowledge. What the faith teaches is that Aldar's was the originating will — the others contributed what he invited them to contribute. The distinction matters to Antarian theology and to Antarian politics.",
            "After the Wars of Inheritance, Aldar was barred from his creation by the combined force of the Draconic Dominion, and has not returned in any sustained way since. What he does instead is watch. His servants are forewarned, his prophets receive visions, and his children receive what help he can send without entering the world himself — which, when he manages it at all, costs him centuries of recovery. The Messiahs are the clearest expression of that help.",
            "Clerics of Aldar dress in white and red, keep careful attention to their health and appearance, and train to act deliberately rather than reactively, as their god acts. Many carry genuine divinatory ability. Their symbol, the Evolution, shows two crosses joined at the lower tip — the completed act of creation rising above the mortal cost that made it possible.",
            "Servants of Aldar span a range of stances on non-humans. By the Fourth Era the moderate position — tolerating non-human presence so long as it demonstrably benefits the Ninth World — has become the functional standard, though that tolerance is conditional and does not extend to those who contest Antarian authority."
          ],
          edictsFull: [
            "Defend the human race collectively; treat threats to humanity as your primary concern.",
            "Follow the guidance of Aldar's prophets and transmit divine visions without distortion.",
            "Maintain physical health, personal discipline, and deliberate conduct."
          ],
          anathemaFull: [
            "Betray or weaken the human race through action or willful neglect.",
            "Suppress or falsify a prophetic vision.",
            "Treat a Blood Hunt's target as a legitimate ally without sufficient cause."
          ]
        },
        {
          name: "CÁSTIA", fullName: "CÁSTIA, the Mist-Veiled",
          headerLabel: "Antarian Pantheon · Goddess of Wild Magic",
          tagline: "the Mist-Veiled · the Mist-Maker",
          epithets: "Goddess of Wild Magic · the Mist-Maker · the Betrayer (in hostile traditions)",
          img: "art/castia-1.webp", img2: "art/castia-2.webp", hasArt: true,
          animal: "cat", colors: ["#2f6fb0", "#4c9c6f"],
          symbol: "The Mist Vortex — a golden triskele on a blue field.",
          p1: "Cástia lives in every part of creation that resists being understood — wild animals, natural cataclysm, the pull of tides, the caprice of the wind. The magical lines of the Ninth World are her weaving, held in discipline by the framework Vandux imposed on them.",
          p2: "She appears as a woman veiled in mist, her form never twice the same, her eyes the color of whatever constellation hangs overhead. In the Wars of Inheritance she leaned toward the Fae — then set that sympathy aside and turned to protection when the Draconic Dominion threatened the world she helped make.",
          concerns: ["wild magic", "nature", "mystery", "elemental forces", "freedom"],
          edictsShort: ["Pursue magical knowledge freely.", "Protect the natural world.", "Act on your own judgment."],
          anathemaShort: ["Needlessly destroy an ecosystem.", "Surrender your will entirely.", "Refuse a sincere student knowledge."],
          attr: "Charisma / Wisdom", font: "heal", sanct: "holy or unholy",
          skill: "Arcana", weapon: "star-knife",
          domains: "Dreams · Nature · Knowledge · Magic", altDomains: "(alt. Freedom · Time)",
          spells: "dizzying colors (1st) · dream message (3rd) · contingency (7th)",
          fullParas: [
            "Cástia is present in every part of the creation she helped build that resists being understood. Wild animals, natural cataclysms, the pull of tides, the unpredictability of wind — all are her work. The magical lines of the Ninth World's fabric are her creation, maintained by the structure Vandux imposed on them. Without the lines, his framework would be architecture without material; without his framework, her lines would be raw energy without discipline.",
            "She appears as a beautiful woman whose silhouette is wrapped in mist and whose aspect is youthful but shifting. No two of her priests describe her the same way. The only constant is that she is always a woman, and that her eyes carry the color of whatever constellation is overhead when she is seen.",
            "In the War of Inheritance she chose sympathy toward the Fae over loyalty to Aldar; when the Draconic Dominion came and threatened the world she had helped make, she set that sympathy aside and turned toward protection. When Aldar sent Marduk to break draconic rule, Cástia and Vandux sent their son Cyx to support him and seal the magical passages the dragons used to sustain their hold.",
            "Her priesthood is composed exclusively of women — humans or Atars — though she extends her blessing to anyone who shows genuine respect, regardless of race or sex. Her clerics wear blue and light green. They do not form hierarchies easily; their organization tends toward the loose and informal, reflecting the nature of what they serve."
          ],
          edictsFull: [
            "Pursue magical knowledge for its own sake; do not restrict it to those who will use it safely.",
            "Protect the natural world and the creatures within it.",
            "Act on your own judgment when the choices before you are genuinely open."
          ],
          anathemaFull: [
            "Permanently destroy a natural ecosystem or a population of wild creatures without necessity.",
            "Submit entirely to another's will when your own judgment is available and capable.",
            "Refuse to share magical knowledge with a sincere and capable student."
          ]
        },
        {
          name: "VANDUX", fullName: "VANDUX, Lord of Mysteries",
          headerLabel: "Antarian Pantheon · Lord of Arcane Law",
          tagline: "the Silent One · the Arcane Eye",
          epithets: "The Silent One · the Arcane Eye · Lord of Arcane Law",
          img: "art/vandux-1.webp", img2: "art/vandux-2.webp", hasArt: true,
          animal: "crow", colors: ["#1a1a1a", "#c9c9d2"],
          symbol: "The Arcane Eye — a central eye whose pupil is shaped like an infinity symbol.",
          p1: "Where Cástia's magic governs the physical and elemental, Vandux commands the abstract. He created the rules of time and the arcane framework on which her magical lines are suspended; every form of magic practiced by mortals was organized and regulated by him.",
          p2: "He is the only entity able to undo or silence the magic of the Ninth World — a power exercised precisely, publicly, and without warning. He appears as an elderly man in the black of deep night and the silver of stars, answering prayer with silence and supplication with a fragment of knowledge to be interpreted alone.",
          concerns: ["arcane law", "knowledge", "time", "silence", "magical order"],
          edictsShort: ["Maintain the order of the arcane.", "Catalogue magic for the competent.", "Hold to an absolute standard."],
          anathemaShort: ["Use magic carelessly.", "Let arcane corruption stand.", "Arm the untrustworthy with magic."],
          attr: "Intelligence / Wisdom", font: "harm", sanct: "holy",
          skill: "Arcana", weapon: "staff",
          domains: "Knowledge · Magic · Time · Truth", altDomains: "(alt. Duty · Vigil)",
          spells: "magic missile (1st) · suggestion (4th) · warp mind (7th)",
          fullParas: [
            "Where Cástia's magic governs the physical and elemental, Vandux commands the abstract. He created the rules of time, organized the arcane framework on which her magical lines are suspended, and determined the structures that let mortal magic function at all. Every form of magic practiced by mortals was organized and regulated by Vandux. He is the only entity capable of undoing or silencing the magic of the Ninth World — a capability he has exercised precisely, publicly, and without warning when the situation required it.",
            "His historical interventions have been few and surgical. He named the first Black Hawks and blessed that organization. He silenced Berengário during the wars with the Archlich. He counseled the other gods to accept Elricon's ascension to authority over death. None of these acts came with extensive explanation; they were done, and the outcomes spoke for themselves.",
            "When he manifests, Vandux appears as an elderly man of serene, focused expression — golden skin, short black hair pulled back, a trimmed beard, eyes that radiate a faint light — dressed in the black of deep night and the silver of star constellations. He answers prayers with silence, supplications with flashes of knowledge the recipient must interpret without context, and requests for forgiveness with contempt. His servants understand the silence and the contempt as the same standard he applies to himself.",
            "His clerics are men — the priesthood admits no women, by the god's explicit design, mirroring Cástia's exclusively female clergy — focused, meticulous, and wholly devoted to their art. Their black and silver vestments match the god's own appearance. Their symbol, the Arcane Eye, is a central eye whose pupil is shaped like an infinity symbol."
          ],
          edictsFull: [
            "Maintain the order and structure of the arcane; investigate and address violations of magical law.",
            "Pursue and catalogue magical knowledge; make it available to those who demonstrate competence and reliability.",
            "Hold yourself and those who serve with you to an absolute standard; do not tolerate avoidable failure."
          ],
          anathemaFull: [
            "Use magic carelessly or without accounting for its consequences.",
            "Allow arcane corruption to go unaddressed when intervention is within your power.",
            "Grant magical knowledge to someone who cannot be trusted to use it without causing serious harm."
          ]
        },
        {
          name: "MARDUK", fullName: "MARDUK, the Dauntless",
          headerLabel: "Antarian Pantheon · Third Messiah · God of Strength",
          tagline: "the Dauntless · Son of Aldar · the Archlich's Scourge",
          epithets: "Third Messiah · God of Strength · Son of Aldar · the Young Champion · the Archlich's Scourge",
          img: "art/marduk-1.webp", img2: "art/marduk-2.webp", hasArt: true,
          animal: "—", colors: ["#9c2f26", "#3b3b7a", "#c9a24b"],
          symbol: "Rebellion and Revolt — a metal emblem depicting two crossed swords.",
          p1: "Marduk gathered his epithets in a single mortal life of relentless incident. He obeyed without complaint any order resting on merit or legitimate authority, and refused — loudly, at personal cost — any that rested on neither.",
          p2: "The command to send the Invincible Armada against the elven island of Cyratis broke his loyalty to Kagol. Jailed for insubordination, he escaped and launched the Rebellion, freeing the empire province by province before returning to Aldar — no longer a man, but a god.",
          concerns: ["strength", "valor", "rebellion", "loyalty"],
          edictsShort: ["Obey only earned or legitimate authority.", "Finish what you begin.", "Pursue physical excellence."],
          anathemaShort: ["Obey a suicidal or unjust order.", "Abandon those who depend on you.", "Show contempt for genuine courage."],
          attr: "Strength / Charisma", font: "harm or heal", sanct: "holy",
          skill: "Athletics", weapon: "greatsword",
          domains: "Confidence · Duty · Freedom · Might", altDomains: "(alt. Creation · Destruction)",
          spells: "jump (1st) · haste (3rd) · weapon storm (4th)",
          fullParas: [
            "Marduk accumulated his epithets in a single mortal life that generated more recorded incident per year than most nations produce in a generation. Born during the height of the Kagol Empire, he entered its military young and rose on tactical brilliance and force of character. He obeyed without complaint any order he judged to rest on merit or legitimate authority, and refused, loudly and at personal cost, any order he judged to rest on neither.",
            "The order that broke his loyalty was the command to lead the Invincible Armada against the elven island of Cyratis — a shore no human force had reached, protected by Fae power no mortal army could penetrate. Marduk said so, repeatedly. When his warnings were dismissed and he was jailed for insubordination, he escaped and launched the Rebellion. The march that followed — the Bold March — is walked today by Antarian pilgrims as an act of devotion.",
            "The march saved part of the fleet. The twelve warriors who joined him became his core following. The rest of the Armada advanced against Cyratis as ordered and sank before reaching the coast. What followed was the liberation of Kagol province by province, concluded in the battle that leveled the capital, imprisoned the Archlich, and returned Marduk to Aldar as a god.",
            "He manifested twice more: once to oppose Thol Elsur's restoration through the Elsur Dominion, and once during the Clash of the Four at Troriad, arriving with Jarizan to meet the Storm Lord in battle. In both he appeared as in life — young, sparse-bearded, tall and broad, dressed in red and indigo, carrying his twin golden swords, Rebellion and Revolt.",
            "His followers are jovial, hard to intimidate, dismissive of hierarchies they have not chosen to respect, and fiercely loyal to anyone who earns it through competence or force of personality. Their clerics dress for worship exactly as they dress for battle."
          ],
          edictsFull: [
            "Obey only those whose authority rests on genuine merit or legitimate power; contest orders you judge suicidal or purposeless.",
            "Complete what you begin; do not abandon a cause or a person you have committed to protecting.",
            "Pursue physical excellence; fight and live as though always assessed by your god."
          ],
          anathemaFull: [
            "Obey an order you know to be suicidal or deliberately unjust in order to avoid conflict.",
            "Abandon those who depend on you when the situation becomes dangerous.",
            "Show contempt for genuine courage, regardless of who displays it."
          ]
        },
        {
          name: "IANBADEV", fullName: "IANBADEV, the Indolent",
          headerLabel: "Antarian Pantheon · Second Messiah · God of Revolution",
          tagline: "the Indolent · Bearer of the Black Lightning · Scourge of Elsur",
          epithets: "Second Messiah · God of Revolution · Bearer of the Black Lightning · the Mind-Warrior · Scourge of Elsur",
          img: "art/ianbadev-1.webp", img2: "art/ianbadev-2.webp", hasArt: true,
          animal: "—", colors: ["#1f7a7a", "#3f8f4f"],
          symbol: "An ascending lightning bolt with a spear tip.",
          p1: "No birth record exists for Ianbadev, and no city of origin has been confirmed. The faith knows him first through the upheavals inside the Dominion of Elsur — a figure who distinguished himself even among the Nine and drew the attention of a deity working through that empire.",
          p2: "When he uncovered a conspiracy to unify the world and breach the World Shield, he did not confront it directly. He infiltrated the occupied cities, severed supply lines and chains of command, and forced the Dominion into the devastation that bred its own resistance.",
          concerns: ["revolution", "strategy", "liberation", "lightning", "exposing conspiracy"],
          edictsShort: ["Dismantle illegitimate power.", "Disrupt conspiracies you can reach.", "Build the widest possible coalition."],
          anathemaShort: ["Serve a structure you know is corrupt.", "Abandon a coalition before its purpose.", "Use the tools of oppression."],
          attr: "Intelligence / Strength", font: "heal", sanct: "holy",
          skill: "Society", weapon: "spear",
          domains: "Confidence · Freedom · Lightning · Might", altDomains: "(alt. Destruction · Truth)",
          spells: "thunderstrike (1st) · lightning bolt (4th) · divine decree (7th)",
          fullParas: [
            "No birth record exists for Ianbadev, and no city of origin has been confirmed by historians with access to the relevant period. What the faith knows of him begins with the internal upheavals within the Dominion of Elsur at the height of that empire's expansion — a figure who distinguished himself even among the Nine, and who drew the personal attention of a deity working through the Dominion as an instrument.",
            "A conspiracy centuries in the making worked toward a single goal: to submit the world to Elsur's government, then use that unified structure as the platform to breach the World Shield and let the dragons beyond it return. When Ianbadev discovered its scope, he did not confront it directly. He infiltrated the occupied cities, disrupted supply lines, severed chains of command, and forced the Dominion to shift from controlled occupation to total devastation — a shift that produced the very resistance it was meant to suppress.",
            "He assembled a coalition of every enemy the Dominion had accumulated and led it to the final confrontation on a beach at the margins of the World Shield, where for a brief moment the fury of the dragons beyond the barrier was visible to every mortal present. Ianbadev died in that battle, at the same moment as his victory, ascending as the Black Lightning he had carried in his hands and returning to Aldar's side, where the faith teaches he serves still as weapon and guardian."
          ],
          edictsFull: [
            "Identify corrupt or illegitimate power structures and work toward their dismantling; use infiltration, coalition-building, and patience before open confrontation.",
            "Never allow a conspiracy against the free peoples of Eion to continue once you have the means to disrupt it.",
            "Build alliances across the full range of a common enemy's opponents; do not let perfect alignment be the enemy of necessary coalition."
          ],
          anathemaFull: [
            "Serve or protect a structure you have identified as corrupt or illegitimate when alternatives exist.",
            "Abandon a coalition you have assembled before its purpose is achieved.",
            "Use the tools of oppression — mass civilian punishment, indiscriminate destruction — when targeted action remains possible."
          ]
        },
        {
          name: "ARIELA", fullName: "ARIELA, the Invincible",
          headerLabel: "Antarian Pantheon · Third Messiah · Goddess of Triumph",
          tagline: "the Invincible · the Muse of Victory · Lady of the Host",
          epithets: "Third Messiah · Goddess of Triumph · the Muse of Victory · Aldar's Chosen · Lady of the Host",
          img: "art/ariela-1.webp", img2: "art/ariela-2.webp", hasArt: true,
          animal: "dove", colors: ["#ffffff", "#6a3fa0", "#c9a24b"],
          symbol: "The Invincible Bulwark — a purple cavalry shield bearing feathered wings, white and black.",
          p1: "Ariela's mortal name was Berenice, exiled young from Belmonte for visions of vast winged creatures tearing the World Shield apart while the free peoples burned below. She fought wherever the draconic threat demanded, with a precision others called something between calculation and prophecy.",
          p2: "Then Aldar sent the Host: two hundred angels, nearly all women bearing gleaming arms and white wings, who turned a wandering commander into a force no institution of her era could beat. A single Triumph Angel could renew a spent battalion's will; soldiers prayed for her arrival.",
          concerns: ["triumph", "leadership", "tactical genius", "hope", "the angelic host"],
          edictsShort: ["Lead with honesty about the risks.", "Seek peace, then commit fully.", "Honor those who keep fighting."],
          anathemaShort: ["Abandon your command in danger.", "Claim a victory that defeated you.", "Pursue conflict past its purpose."],
          attr: "Wisdom / Charisma", font: "heal", sanct: "holy",
          skill: "Diplomacy", weapon: "lance",
          domains: "Confidence · Duty · Healing · Vigil", altDomains: "(alt. Freedom · Protection)",
          spells: "bless (1st) · aerial form (4th) · regenerate (7th)",
          fullParas: [
            "Ariela's mortal name was Berenice. She was born in Belmonte in the middle of the Third Era and exiled young for her visions, which described vast winged creatures tearing the mountains of the World Shield apart while the free peoples of Eion burned below. She spent her adult life moving between the battles that confirmed those visions, with a tactical precision those beside her described as something between calculation and prophecy.",
            "For years she had no army — only foresight inherited from Aldar and the capacity to extract more from a force than its officers believed possible. Then Aldar sent the Host: two hundred angels, nearly all women bearing gleaming arms and white wings, who served as her army and transformed her into a force capable of winning battles no human institution of that era could. A single Triumph Angel could renew the resolve of a battalion that had exhausted every other source of will.",
            "One angel stands apart. Nergal is male, his expression habitually hostile, his two pairs of black wings broad enough to shelter cavalry horses. He has stood at Ariela's side as guardian and confidant since the Host was assembled — a last resort held for what her foresight and the Host cannot resolve, and, the faith notes without irony, never yet needed for that purpose. From this came the phrase 'a flight of Nergal': the option kept against the worst case.",
            "Ariela lived far beyond a normal human lifespan, fighting and advising until her ascension in 102 of the Fourth Era. She is described as tall, extremely beautiful, with reddish-brown hair and dark eyes, always in immaculate white, always carrying the purple shield called the Invincible Bulwark.",
            "Her followers surprise those who expect a martial goddess's servants: they prefer peaceful resolutions, pursue them with genuine effort, and treat avoidance of conflict as a tactical skill rather than a failure of will. Combat is a tool used when others are exhausted — and used then with complete commitment."
          ],
          edictsFull: [
            "Lead those who depend on you with honesty about the risks they face and the reasons they are worth taking.",
            "Seek peaceful resolution before committing to violence; when violence becomes necessary, commit to it fully.",
            "Honor those who continue fighting under conditions that would justify stopping."
          ],
          anathemaFull: [
            "Abandon those under your command when the situation becomes dangerous.",
            "Claim victory over something that defeated you.",
            "Pursue conflict for its own sake when the goal it serves has already been achieved."
          ]
        },
        {
          name: "CYX", fullName: "CYX, the Eternal",
          headerLabel: "Antarian Pantheon · God of Passages",
          tagline: "the Eternal · the One-Eyed · Lord of the Cyclopes",
          epithets: "God of Passages · the One-Eyed · Lord of the Cyclopes · Son of Cástia and Vandux",
          img: "art/cyx-1.webp", img2: "art/cyx-2.webp", hasArt: true,
          animal: "—", colors: ["#7d7d85", "#c9c9d2"],
          symbol: "The Passage — a grey portal rendered simply and without ornament.",
          p1: "Cyx is the only child of Cástia and Vandux, born at the earliest phase of the Ninth World's creation with duties to it from his first moment. Born with one great eye centered in his brow, he has used it since birth to watch the passages.",
          p2: "Not doorways in any mundane sense — every means of moving a thing without a physical journey falls under his scrutiny. Planar gates, dimensional shortcuts, transit between worlds and between the layers of this one. The Astral Curtain and the World Shield only widened his charge.",
          concerns: ["passages", "planar travel", "arcane law", "surveillance", "magical order"],
          edictsShort: ["Guard every passage within reach.", "Negotiate before you punish.", "Report violations of travel law."],
          anathemaShort: ["Hide an unauthorized passage.", "Seal a lawful passage unbidden.", "Ignore a known disruption."],
          attr: "Intelligence / Dexterity", font: "heal", sanct: "holy or unholy",
          skill: "Arcana", weapon: "staff",
          domains: "Magic · Time · Travel · Vigil", altDomains: "(alt. Knowledge · Secrecy)",
          spells: "longstrider (1st) · dimensional anchor (4th) · teleport (7th)",
          fullParas: [
            "Cyx is the only child of Cástia and Vandux — the union of both magic gods, born at the earliest phase of the Ninth World's creation — and he has had duties to that creation since the moment of his birth. He did not reveal himself to mortals until Marduk's campaign against the Archlich, because the centuries before were not unoccupied: he spent them doing his job.",
            "He was born with one large eye, centered in his forehead, which he has used since birth to watch the passages. Not doorways in any mundane sense — every means of moving anything from one location to another without a physical journey falls under his scrutiny. Planar gates, dimensional shortcuts, the arcane paths made during the world's construction, the transit points between worlds and between the layers of this one. The Astral Curtain and the World Shield both expanded his responsibilities considerably, and he has never diminished his attention in response.",
            "When Marduk's campaign made his intervention necessary, Cyx took physical form and worked from within the world, systematically sealing the dimensional passages the Archlich used to sustain and project his power. This attrition of the Archlich's capacity to operate across multiple planes is the contribution his parents' church credits to their son. When Marduk ascended, Cyx dissolved his form and returned to his work.",
            "Those who worship him genuinely he offered a compact: help maintain watch over the passages, and receive a portion of his time and knowledge, an extended lifespan, and expanded planar travel. Those who accepted removed their left eye as a sign of devotion; his clerics and paladins are called Cyclopes throughout Eion. He prefers negotiation to punishment, and is patient only to the extent that patience serves a better outcome than its absence would."
          ],
          edictsFull: [
            "Monitor and protect all passages — planar, dimensional, and magical — within your reach.",
            "Negotiate when possible; reserve permanent sanction for those who will not honor lesser measures.",
            "Report violations of arcane travel law and passage agreements to Cyx's institution."
          ],
          anathemaFull: [
            "Use an unauthorized passage and conceal it from Cyx's church.",
            "Seal a passage that serves a legitimate purpose without authority to do so.",
            "Ignore a known disruption in the magical fabric when you have the means to investigate it."
          ]
        }
      ]
    },
    {
      id: "teban",
      name: "The Teban Pantheon",
      type: "Major Pantheon",
      accent: "#1f9bb3", accentDeep: "#16788c",
      tagline: "Desert gods born from the murder of the First God.",
      blurb: "The faith of Tebas: sun and earth, vengeance and mercy, raised from the catastrophe of the First God's death. Nine powers who watch the sands and hunt the Ten Deicides.",
      lore: {
        origin: [
          "Before the current world took shape, a single deity governed the whole of existence — called the First God, or in older litanies the One Who Came Before. He ruled from a citadel of permanent light above the world, and all who died passed through his keeping before moving on to rest elsewhere. The cycle he maintained was self-sufficient and, by the account of Teban doctrine, complete.",
          "Ten of his faithful organized his murder. Their motives are not recorded in Teban tradition; only the consequence is. The destruction of the First God extinguished the First Light that illuminated his citadel. When it fell, it consumed half the world in fire and left behind the Endless Sands. The Spirit Realms sealed. The world went dark.",
          "From the crater where the First Light struck, two eggs hatched. The first yielded a being of fire — a vast bird that seized what remained of the First Light, carried it skyward, and fixed it in the firmament as the sun. This was Benu. The second egg produced a great serpent that forced open the earth, releasing the water trapped within the mountains. This was Ackhet. Taking human form, they gathered the scattered survivors, taught them to live in the ruined desert, and founded the kingdom of Tebas and its long dynasty of Pharaohs.",
          "Three of the Ten Deicides are recorded by name: Thol Elsur, the Lord of Storms, who assisted the murderers and is held responsible for the captivity of Narfaris; Ouroboros, who participated but abandoned the conspiracy too late to prevent it; and Aldar, called the Traitor, identified as the same being who leads the Antarian Pantheon under a different name. Three of the remaining seven are imprisoned in the firmament, sustaining the three moons; the other four were destroyed when Benu and Ackhet rose to full authority. Teban eschatology holds that the three who remain will one day break free, revive the four destroyed, and return to finish what the Deicides began."
        ],
        sects: [
          {
            name: "The Vigilants of Dalarid", subtitle: "Aiur justiciars discharging Atunnis's penance",
            paragraphs: [
              "Almost exclusively Aiur, understanding their own existence as the continuation of a divine penance: Atunnis's self-imposed exile from Tebas was not fully discharged when Benu and Ackhet elevated him to divinity, and the debt belongs not only to the god but to his lineage. Until every year of exile is spiritually repaid through acts of justice, Atunnis cannot take his seat again in Dalarid.",
              "Vigilants leave Dalarid at adulthood, trained in law and combat from childhood, and spend their lives on the road enforcing justice wherever law has failed. They return only at the end of their lives to contribute their story to the sect's record. The sect does not require success — it requires effort, consistency, and clarity of purpose."
            ],
            symbol: "A jackal walking across a sand dune.", colors: "gold, black, blood red",
            benefits: "Arms training, knowledge of regional legal codes and courts, travel provisions, lodging networks, contacts among law enforcement and magistrates, institutional support for lawful arrest, pursuit, and judicial proceedings.",
            edicts: ["Enforce justice where law has failed to reach; do not refuse a legitimate call for aid", "Do not violate local law unless acting to prevent a greater harm; when law and justice conflict, act for justice and accept the legal consequence", "Assist the representatives of law and legitimate authority, except when their corruption is evident", "Do not shield criminals or conceal evidence of wrongdoing"],
            anathema: ["Commit crimes for personal gain", "Kill agents of the law — on either side of a conflict — in a lethal manner", "Abandon the road permanently before the penance is discharged", "Accept a member who does not carry Aiur heritage"]
          },
          {
            name: "The Society of the Speaking Dead", subtitle: "The Oratori — Raveran integration through Teban recognition",
            paragraphs: [
              "Holds the only formal status a Raveran community has ever achieved outside of Drakovia, admitted to limited recognition by the Teban government in 104 of the Fourth Era. Founded and led by a figure known only as the Sculptor, whose declared agenda is the integration of the Raveran people into the broader society of Eion — a survival strategy built on recognizing that Drakovia's insularity has produced a dead end.",
              "The Society addresses a specific problem: the Rebirth Rite that creates Raveran has an unacceptable mortality rate. Teban expertise in resurrection and the embalming arts of the Ánate tradition represent a potential avenue for improvement. The Society recruits carefully among Tebas's dispossessed and offers the Rebirth Rite with that promise stated explicitly; the selection of Ouroboros as patron deity remains the most contentious element of its doctrine."
            ],
            symbol: "Two hands covered in bronze exoskeleton holding an ouroboros ring.", colors: "bronze, black, deep gold",
            benefits: "Refuge in Teban cities, legal protection under the recognized status of the Oratori, contacts in Teban government and commerce, instruction in Ouroboros's clergy and necromantic lore, access to feeding within designated districts without concealment, eligibility for the Rebirth Rite.",
            edicts: ["Work toward the acceptance and integration of the Raveran within Eion by any means that do not compromise the Society's standing", "Pursue improvement of the Rebirth Rite through research and contact with Teban clerical and funerary traditions", "Present yourself to the governmental authority of each Teban city you enter upon arrival", "Keep the Society's internal protocols and member identities confidential from non-affiliates"],
            anathema: ["Feed on Tebans without consent", "Reveal sect safehouses, feeding grounds, or member identities to non-affiliates", "Take actions that demonstrably damage the Society's standing with the Teban government", "Accept a member who does not carry Raveran heritage"]
          }
        ],
        beliefs: [
          { title: "The First God & the Ten Deicides", paragraphs: [
            "The One Who Came Before governed a creation designed to function without injustice or failure; within his jurisdiction, death was not a loss. His destruction was a deliberate act by ten of his own faithful, aided by beings from outside his world. Teban doctrine attributes no motive beyond covetousness.",
            "Of the ten, three are named. Thol Elsur assisted from outside Tebas's world; Ouroboros repented too late to prevent the act; Aldar, the Traitor, is identified as the same being worshipped as the Antarian Pantheon's founding deity — a fact neither faith handles with complete comfort. Three remain imprisoned by the power sustaining the three moons; four were destroyed when Benu and Ackhet rose to authority. Teban eschatology is not optimistic about what happens when the imprisoned three are finally freed."
          ]},
          { title: "The Two Who Came After", paragraphs: [
            "Ackhet and Benu are the primary deities of the pantheon, siblings born from the same catastrophe, and also lovers in the oldest stratum of their faith. A curse imposed by the surviving Deicides requires that they remain apart — if both were destroyed together, Tebas would lose its two principal protectors simultaneously.",
            "The separation is not symbolic: both deities are active and present, but do not share space, and Teban dual governance — two Pharaohs ruling in alternating shifts, forbidden from meeting — codifies this divine restriction into civic law."
          ]},
          { title: "The Tribes", paragraphs: [
            "Teban society organizes into tribal traditions overlapping with occupation, geography, and religious practice. The Vatitas hold the strongest connection to elemental spirituality and direct most devotion toward Ackhet. The Gites are the urban governing class, considering themselves blessed by the sun and chosen by Benu's line. The Hiksos, desert nomads skeptical of Benu and Ackhet, privately believe the two deities may be instruments keeping the population ignorant of the First God's actual tomb.",
            "The Urdos are the most liturgically devoted, builders of the largest temples and scribes of the pantheon's oral traditions. The Ánates hold the monopoly on funerary practice, restored to importance by the rise of Ouroboros after generations of persecution. The Kredans descend from Narfaris's captivity under Thol Elsur, half-divine children of a forced union, devoted totally and personally to her."
          ]},
          { title: "The Aklramadii & the Malak", paragraphs: [
            "The Aklramadii arrived alongside Rahma — once called Magnari before exile from their original home — ash-eating, charcoal or copper-skinned, bound to Rahma by shared exile. Because their relationship to fire mirrors Benu's, they were placed within his divine lineage by popular association, a genealogy they did not claim.",
            "Rahma's divine servants, the Malak, are luminous humanoid figures with wings of light. Some drifted toward Benu, whose faith sustains their luminous capacity without effort; those who serve Rahma accept a degree of dimness as part of their penance."
          ]},
          { title: "The Spirit Realms", paragraphs: [
            "Where the Teban dead go after death — a layered domain separated from the material world since the First God's fall destroyed the original afterlife he maintained. Ouroboros now holds partial authority over who enters and on what terms; Benu and Ackhet contend with him on the boundaries of that authority.",
            "The Ánate tradition provides the technical knowledge — embalming, burial rites, tomb construction — that gives properly prepared souls safe passage to Ma'at, the zone of stillness within the Spirit Realms. Souls that arrive unprepared are available to Ouroboros's claim and may not rest."
          ]}
        ],
        relations: [
          { name: "Pantheon of Antares", stance: "Armistice", quote: "", paragraphs: [
            "The Concordat of Blood and Sand ended the active phase of a conflict that included crusades and theological war on both sides — cessation, not reconciliation. The central Teban objection is Aldar: Teban doctrine identifies him as the Traitor, one of the Ten Deicides, which the Antarian faith does not acknowledge.",
            "Among individual deities, Ariela and Rahma maintain genuine alliance, as do Yashtal and Cástia. Ouroboros and the Antarian Arcane Trinity compete over the domain of magic in a tension the Concordat regulates but does not eliminate."
          ]},
          { name: "The Fae Lords", stance: "Hostile", quote: "", paragraphs: [
            "Older than the Antarian conflict and more fundamental in theological terms. Thol Elsur is counted among the Ten Deicides and specifically identified as Narfaris's captor at Garkosa — the Fae faith is considered heretical in Teban-controlled territory and its practice prohibited under Teban religious law.",
            "Sect-level interactions are more nuanced: the Vigilants of Dalarid have found functional cooperation with the Judges over their shared interest in justice resolved outside formal channels."
          ]},
          { name: "Terrestrial Pantheon", stance: "Indifferent", quote: "\"A strange faith in the forces of the earth... only strange that such form be given to the divine.\" — Reflections of Yashtal's Clergy", paragraphs: [
            "The two faiths do not overlap significantly in devotional population, geography, or theology. The Terrestrial creation account's emphasis on elemental spiritual forces is broadly compatible with — rather than hostile to — Teban understanding, though not sufficient to produce active alliance.",
            "The only consistent cross-pantheon contact occurs where the Thirteenth Legion has a presence in Teban territory, bringing the clergy of Ackhet and Kisa together on the common ground of earth-and-water domains."
          ]},
          { name: "The Patrons", stance: "Indifferent", quote: "\"Not everything requires a formed opinion.\" — Common Teban aphorism", paragraphs: [
            "No meaningful category of contact exists sufficient to generate a theological position in either direction. The Iconoclast sect is the exception: Tebas, generally tolerant of theological difference, does not extend tolerance toward Iconoclasm, and encounters resolve in consistent hostility."
          ]},
          { name: "Terminus Court", stance: "Hostile", quote: "", paragraphs: [
            "Elricon asserts primacy over death and its aftermath; Teban doctrine holds that proper preparation by the Ánate tradition is what determines whether a soul passes safely to the Spirit Realms or falls to Ouroboros's claim. Elricon's Reapers operate across those boundaries without Teban authorization.",
            "No holy war has been formally declared — the hostility remains active resistance rather than organized religious violence. Teban clergy confronts Reaper operations when encountered and assists communities that wish to refuse Reaper access to their dead."
          ]},
          { name: "Avatars of Vice", stance: "Hostile", quote: "\"Predators of the soul, despoilers of honor, destroyers of the sacred... there is nothing of Tebas for the Avatars but fire.\" — Sermon of Benu", paragraphs: [
            "The only conflict the Teban Pantheon recognizes as an active holy war — a direct threat to Teban civilization's material conditions, spiritual cohesion, and the master-student transmission that structures the faith, which Absalom's domain specifically subverts.",
            "Natas's excess is incompatible with the stoicism required by Endless Sands survival; Naphime's hedonism is treated as spiritual rot; Absalom's corruption of legitimate authority is a direct attack on how the pantheon transmits itself across generations. The Vigilants of Dalarid consider the Pact-Makers enemies in both the theological and geographic sense."
          ]}
        ]
      },
      deities: [
        {
          name: "ACKHET", fullName: "ACKHET, the Earth Goddess",
          headerLabel: "Teban Pantheon · The Earth Goddess",
          tagline: "Mother · Wellspring of Life · Lady of Serpents",
          epithets: "Mother · Wellspring of Life · Lady of Serpents · Goddess of Fertility · River-Maker · Protector of the Earth",
          img: "art/ackhet-1.webp", img2: "art/ackhet-2.webp", hasArt: true,
          animal: "serpent", colors: ["#4c9c6f", "#2f6fb0", "#c9962a"],
          symbol: "The caduceus — two intertwined serpents facing each other.",
          p1: "The first of the catastrophe's two surviving children to answer mortal suffering. Where Benu went skyward to restore the sun, Ackhet went outward across ruined land and opened the mountains to return water to a scorched desert.",
          p2: "She appears as a golden-skinned woman with serpent-slit amber eyes, moving through water or parting stone, dressed in earth and sea. Her clergy stay close to the communities they serve — midwives, healers, farmers, mediators.",
          concerns: ["fertility", "water", "the earth", "the harvest", "healing"],
          edictsShort: ["Tend your community's needs: food, water, birth.", "Protect water, land, and the harvest.", "Welcome the genuinely needy."],
          anathemaShort: ["Poison or destroy a water source or fertile land.", "Turn away the hungry or injured without cause.", "Disturb the prepared dead."],
          attr: "Wisdom / Constitution", font: "heal", sanct: "holy",
          skill: "Nature", weapon: "staff",
          domains: "Family · Healing · Nature · Water", altDomains: "(alt. Earth · Creation)",
          spells: "soothe (1st) · vital beacon (4th) · regenerate (7th)",
          fullParas: [
            "Ackhet was the first of the two surviving children of the catastrophe to respond to the suffering of the world's mortal population. Where Benu went skyward to restore the sun, she went outward across the ruined land, and what she found shaped the entirety of her ministry: people dying of thirst in a landscape scorched by the First Light's impact. She opened the mountains, releasing the water trapped within them, and returned it to the desert. That single act established her relationship with mortals — defined by proximity, practical attention, and a concern for needs rather than principles.",
            "She has been present across every major transition in Teban history: the first settlements beside the river systems she created, the sacred places along their banks, the agricultural cycles that let the kingdom survive in a desert. Her clerics tend to remain near the communities they serve, functioning as midwives, healers, farmers, and mediators. A small number leave to find new habitable land for their people, but departure is the exception; the work is in proximity.",
            "She appears as a golden-skinned woman with black hair and amber eyes slit like a serpent's, moving through water or parting stone, dressed in earth and sea. Serpents are her sacred animal, domesticated in her temples and present at her rites; she is frequently depicted wearing a serpent's head or holding one. Her sacred symbol is the caduceus — two serpents coiling around each other, facing one another."
          ],
          edictsFull: [
            "Tend to the physical needs of your community: food, water, healing, birth.",
            "Protect the agricultural cycles, water sources, and fertile land that sustain life.",
            "Welcome those who seek shelter or nourishment; do not turn away the genuinely needy without cause.",
            "Preserve the boundary between the living world and the Spirit Realms through proper funerary observance."
          ],
          anathemaFull: [
            "Poison, contaminate, or deliberately destroy a water source or fertile land.",
            "Turn away the genuinely hungry or injured without cause.",
            "Disturb the properly prepared dead for purposes other than their protection."
          ]
        },
        {
          name: "AKHENATHON", fullName: "AKHENATHON, the God of the Desert",
          headerLabel: "Teban Pantheon · The God of the Desert",
          tagline: "Desert Tempest · the Living Mummy · the Reborn Hero",
          epithets: "Desert Tempest · the Living Mummy · the Reborn Hero · the Priest of Sands · Guardian of the Scroll · Athon",
          img: "art/akhenathon-1.webp", img2: "art/akhenathon-2.webp", hasArt: true,
          animal: "—", colors: ["#e8dcc0", "#c9962a", "#d8b878"],
          symbol: "A sand spiral; or a flame-wreathed kopesh.",
          p1: "A Gite priest of Benu, exiled for a forbidden love he did not contest, who returned to expose the Order of the Rose's move against the royal family — and was executed for it, eviscerated and buried under sand.",
          p2: "The princess Iasari used the Scroll of Life to return him, but its power fused him to the desert rather than restoring his body. He rose as a sandstorm slowly condensing into form — something the Scroll had never made before.",
          concerns: ["the desert", "sacrifice", "heroism", "protection of the vulnerable", "sacred sleep"],
          edictsShort: ["Serve those who cannot serve themselves.", "Endure hardship and false accusation with patience.", "Protect travelers of the Endless Sands."],
          anathemaShort: ["Exploit those under your protection.", "Claim credit that diminishes the served.", "Disturb the Mummy's tomb without urgent cause."],
          attr: "Strength / Constitution", font: "heal", sanct: "holy",
          skill: "Survival", weapon: "kopesh (falchion)",
          domains: "Earth · Fire · Protection · Repose", altDomains: "(alt. Might · Sun)",
          spells: "burning hands (1st) · stoneskin (4th) · sunburst (7th)",
          fullParas: [
            "Akhenathon was a Gite priest of Benu who served the royal court of Tênfis during a period that ended badly. Accused of a relationship with the princess Iasari, he accepted the charge — violating his sacred celibacy — without contesting it, and went into exile in the Endless Sands. His exile ended when intelligence made clear that the Order of the Rose was moving against the royal family. Athon returned to Tênfis, exposed the conspiracy, and watched it end in the assassination of one Pharaoh and the exile of the other.",
            "When the Order had him executed — eviscerated in the public square and buried under sand — Iasari committed the same sacrilege Yashtal had committed before her: she used the Scroll of Life and returned him to existence. The Scroll's power, fusing him to the desert rather than simply restoring his body, produced a sandstorm that took weeks to condense into a coherent form. He emerged as something the Scroll had not created before.",
            "His sleep is not death. Those who pray for safe passage across the desert invoke him; those who travel with hostile intent receive sandstorms. His devotees — paladins, clerics, wandering benefactors — replicate his pattern: self-effacing, willing to endure humiliation without surrendering purpose, oriented toward practical service over recognition. He is depicted as a linen-clad priest or an armored figure holding a flame-wreathed blade; rendering his actual human features is a theological taboo."
          ],
          edictsFull: [
            "Serve those who cannot serve themselves without requiring recognition or reward.",
            "Endure hardship and unjust accusation with patience; do not surrender your purpose because the world is unreasonable.",
            "Protect travelers across the Endless Sands and hostile desert territory.",
            "Accept the sacrifices your obligations demand, including comfort and reputation."
          ],
          anathemaFull: [
            "Exploit the vulnerability of those under your protection.",
            "Claim credit for service in a way that diminishes the person served.",
            "Disturb the Mummy's tomb or seek to wake him without cause of commensurate urgency."
          ]
        },
        {
          name: "ATEPH", fullName: "ATEPH, the God of Revelry",
          headerLabel: "Teban Pantheon · The God of Revelry",
          tagline: "God of Shadow and Fire · the Scaled One · the Solitary Deicide",
          epithets: "God of Shadow and Fire · the Scaled One · the Solitary Deicide",
          img: "art/ateph-1.webp", img2: "art/ateph-2.webp", hasArt: true,
          animal: "serpe", colors: ["#6a2f8a", "#9c2f26", "#4a1030"],
          symbol: "The Serpe — a two-headed creature with a head of fire and a head of shadow.",
          p1: "One of the Ten Deicides, and the only one with an active priesthood outside Ouroboros's order. The Kredans found him imprisoned beneath the World Shield, a being of fire and shadow condemned to wander between the mountain roots.",
          p2: "His worship is festivity, excess, and the release of repression — but between the festivals he demands silence and isolation. Fire and shadow, indulgence and withdrawal: his dual nature is his instruction, not a contradiction.",
          concerns: ["revelry", "freedom", "fire and shadow", "imprisonment", "the World Shield's interior"],
          edictsShort: ["Celebrate with genuine abandon.", "Free others from constraints imposed without consent.", "Balance engagement with real solitude."],
          anathemaShort: ["Impose your moral structure on another's inner life.", "Suppress celebrations held in his name.", "Collapse wholly into one extreme."],
          attr: "Charisma / Constitution", font: "harm", sanct: "unholy",
          skill: "Performance", weapon: "kukri",
          domains: "Darkness · Fire · Freedom · Indulgence", altDomains: "(alt. Corruption · Passion)",
          spells: "fear (1st) · shadow siphon (4th) · fiery body (7th)",
          fullParas: [
            "Ateph is one of the Ten Deicides and the only one with an active, functioning priesthood outside of Ouroboros's organization. The Kredans found him first — under the mountains of the World Shield on the island of Thorlan-Airen, in carved passages describing a being of fire and shadow condemned to wander between the mountain roots. They named him the Solitary Deicide and approached carefully, without the main Teban framing of Deicides as pure enemies of order.",
            "Ateph does not explain or defend his role in the First God's murder. He acknowledges that he is imprisoned — the mountains of the World Shield confine him, and his power outside that boundary is limited — while within them, what he commands approaches totality. His worship is structured around festivity, excess, and the release of repression; between the festivals he imposes silence and isolation, the kind that makes the festivals legible as more than entertainment. His dual nature — fire and shadow, excess and withdrawal — is the core of his instruction.",
            "He is never encountered in a singular form. His priests describe his presence as a simultaneous sensory experience: voices, colors, warmth, and a pressure between emotion and physical contact. The Serpe — two-headed creatures of fire and shadow — are made in his image, he says. One head is fire, one is shadow. Neither devours the other."
          ],
          edictsFull: [
            "Celebrate with genuine abandon; hold festivals in Ateph's name and sustain them with full participation.",
            "Teach others to identify and release the constraints that diminish their freedom without their consent.",
            "Refuse the authority of traditions or persons who claim power over your inner life by inheritance or convention alone.",
            "Honor duality: intense social engagement must be balanced by genuine isolation and silence."
          ],
          anathemaFull: [
            "Impose your own moral structure on another's inner life.",
            "Suppress or prohibit celebrations held in Ateph's name through authority.",
            "Remain so committed to one extreme — constant isolation or constant indulgence — that the other pole disappears."
          ]
        },
        {
          name: "ATUNNIS", fullName: "ATUNNIS, the God of Vengeance",
          headerLabel: "Teban Pantheon · The God of Vengeance",
          tagline: "the Jackal God · the Account-Settler · the Redeemed",
          epithets: "the Jackal God · the Account-Settler · the Justiciar · the Redeemed · the Blood Hand · Lord of Dalarid",
          img: "art/atunnis-1.webp", img2: "art/atunnis-2.webp", hasArt: true,
          animal: "jackal", colors: ["#9c2f26", "#1a1a1a", "#c9962a"],
          symbol: "A jackal-headed figure, arms crossed, hands stained with blood.",
          p1: "A Pharaoh before he was a god — who defied divine law, declared himself divine, and ruled by terror through a half-divine dynasty until Yashtal called Benu and Ackhet to judge him. He refused the judgment and exiled himself.",
          p2: "The kingdom weakened without him; when his people began losing to Kastoy, he returned — not repentant, but unwilling to stand in a desert while they fell. He fought until he died where Dalarid now stands.",
          concerns: ["vengeance", "justice", "exile", "redemption", "the Aiur people"],
          edictsShort: ["Pursue justice by hand where law fails.", "Accept your past without abandoning your purpose.", "Protect those in your care at any cost."],
          anathemaShort: ["Abandon those who depend on your protection.", "Deny wrongdoing you committed.", "Enforce a law you know is corrupt."],
          attr: "Strength / Wisdom", font: "heal", sanct: "holy",
          skill: "Intimidation", weapon: "battleaxe",
          domains: "Confidence · Duty · Might · Zeal", altDomains: "(alt. Ambition · Truth)",
          spells: "true strike (1st) · stoneskin (4th) · blade barrier (6th)",
          fullParas: [
            "Atunnis was a Pharaoh before he was a god — not the first to break Tebas's religious law and not the last, but the one whose failures generated the most consequential reckoning. He fathered children with Yashtal, the other Pharaoh, in defiance of the prohibition against dual Pharaonic lineage. He declared himself a god, suppressed the clergy, and ruled by terror through a half-divine dynasty that held more military power than the rest of Tebas combined. Yashtal eventually called on Benu and Ackhet to intervene. Atunnis refused the judgment and exiled himself, and his dynasty went with him.",
            "The kingdom weakened without him, and Kastoy's forces took advantage. The slow-motion military disaster that followed ended the exile — not repentance, but the knowledge that his people were losing while he stood in a desert convincing himself the judgment was wrong. He came back, fought with whatever he had, and pushed Kastoy out until he finally fell where Dalarid now stands — the city Ackhet built by raising mountain walls around the site of his last breath.",
            "He is not a god of humility. His elevation to the pantheon did not soften the pride that defined his Pharaonic life; it gave that pride a context in which it functions as a virtue. The devotees he calls pursue justice with their own hands because formal channels have failed — and accept punishment for their wrongs without accepting punishment as the end of their story."
          ],
          edictsFull: [
            "Pursue justice through direct action where law has failed, is absent, or has been corrupted.",
            "Accept the consequences of your past actions without abandoning your purpose or your values.",
            "Protect those under your care when they are threatened, regardless of personal cost.",
            "Fulfill every oath you have made, even those made under circumstances you no longer accept."
          ],
          anathemaFull: [
            "Abandon those who depend on your protection to preserve yourself.",
            "Deny wrongdoing you have committed.",
            "Enforce a law you know to be corrupt.",
            "Claim authority over another without accepting the obligation that authority demands."
          ]
        },
        {
          name: "BENU", fullName: "BENU, the Sun God",
          headerLabel: "Teban Pantheon · The Sun God",
          tagline: "the Burning Sun · Lord of the Sky · the Judge",
          epithets: "the Burning Sun · Bringer of Truth · Flames of Justice · Lord of the Sky · the Judge · Protector of the Day",
          img: "art/benu-1.webp", img2: "art/benu-2.webp", hasArt: true,
          animal: "phoenix", colors: ["#ffffff", "#c9962a", "#e8b53a"],
          symbol: "A glass-and-gold phoenix rising through fire.",
          p1: "Benu has not touched the ground since he was born. He opened his wings in the crater where the First Light fell, breathed fire into what remained, lifted it into the sky, and has been airborne ever since — hunting the Deicides.",
          p2: "Head of the Teban Pantheon by precedent and power. His flight is active surveillance: where he passes, trees become sacred and cemeteries resist desecration. He rests only by burning to ash and being reborn.",
          concerns: ["justice", "the sun", "truth", "vigilance", "fire"],
          edictsShort: ["Pursue justice without exception for status.", "Keep vigil against the Deicides.", "Illuminate truth where power hides it."],
          anathemaShort: ["Protect an injustice to preserve stability.", "Desecrate a consecrated site.", "Judge the powerful and the weak differently."],
          attr: "Wisdom / Strength", font: "heal", sanct: "holy",
          skill: "Religion", weapon: "glaive",
          domains: "Fire · Sun · Truth · Vigil", altDomains: "(alt. Confidence · Zeal)",
          spells: "burning hands (1st) · fire shield (4th) · sunburst (7th)",
          fullParas: [
            "Benu has not touched the ground since the moment he was born. He opened his wings in the crater where the First Light fell, breathed fire into what remained of it, lifted it into the sky, and has been airborne since. The sun's reduced power compared to the First Light is attributed to this — a degraded inheritance, sufficient but not what the world once had. Benu accepts this without complaint. He is looking for the Deicides.",
            "He is the head of the Teban Pantheon by precedent and power, not by appointment. His travels across the sky are active surveillance: where he passes, trees struck by his attention become sacred, buildings suffused with his presence produce clearer judgment, cemeteries he has flown over resist desecration. As his vigilance has spread, his visits to the ground have grown rarer; by the Third Era direct appearances had become exceptional.",
            "Benu rests by periodically setting himself on fire in his sacred places, reducing to ash, and being reborn. During these intervals — experienced as a deepening of the night sky — the Deicides move more freely. The faith believes the final rest comes when the last Deicide is accounted for: then he can land, and Ackhet can meet him again. He has no human form, appearing as the phoenix, the Fire Tree, or the solar disc; his clergy wear white without exception."
          ],
          edictsFull: [
            "Pursue justice with consistency and without exception for personal relationship or social status.",
            "Keep vigil against the enemies of Tebas and the surviving Deicides.",
            "Illuminate truth, especially where power benefits from its concealment.",
            "Honor the sacred places of the faith and protect those who tend them."
          ],
          anathemaFull: [
            "Protect an injustice to preserve stability, personal security, or alliance.",
            "Destroy or desecrate a site consecrated by Benu or the Teban Pantheon.",
            "Apply one standard of justice to the powerful and another to the weak."
          ]
        },
        {
          name: "OUROBOROS", fullName: "OUROBOROS, the God of the Dead",
          headerLabel: "Teban Pantheon · The God of the Dead",
          tagline: "Traitor-God · the Eternal · Lord of the Speakers",
          epithets: "Traitor-God · Thief of Non-Life · the Eternal · Lord of the Speakers",
          img: "art/ouroboros-1.webp", img2: "art/ouroboros-2.webp", hasArt: true,
          animal: "—", colors: ["#c9962a", "#1a1a1a", "#8a6a1e"],
          symbol: "A golden serpent consuming its own tail, coiled in three loops.",
          p1: "One of the Ten Deicides who recanted too late. He vanished beneath the sand for centuries while the other gods forgot him — but he was not gone. He was building something.",
          p2: "He gathered forbidden arcane practitioners around his resting place, then announced himself by raising every improperly buried corpse in Tebas at once and stating his terms: the neglected dead belong to him.",
          concerns: ["the undead", "arcane magic", "eternity", "death", "power"],
          edictsShort: ["Pursue arcane and necromantic knowledge unapologetically.", "Give the dead in your care their due.", "Treat power as a legitimate goal."],
          anathemaShort: ["Destroy arcane knowledge for politics.", "Disturb the properly interred dead.", "Reverse the acceptance he has won in Tebas."],
          attr: "Intelligence / Wisdom", font: "harm", sanct: "unholy",
          skill: "Occultism", weapon: "sickle",
          domains: "Knowledge · Magic · Soul · Undeath", altDomains: "(alt. Darkness · Decay)",
          spells: "magic missile (1st) · vampiric touch (4th) · warp mind (7th)",
          fullParas: [
            "Ouroboros participated in the murder of the First God and then recanted — too late to prevent the catastrophe. His subsequent history is the longest act of consequence-management in the Teban record. He disappeared under the sand and remained there long enough that other gods forgot him. He was not gone. He was building something.",
            "His initial followers were practitioners of arcane magic at a time when arcana was forbidden in Tebas. He drew them to his underground location, gathered them around his resting place, and produced a community that built a settlement over the site where he lay. He emerged when he had accumulated enough devotional power to act — and his first act was a demonstration: he raised every improperly buried or unprotected corpse in Tebas and stated his terms. The dead belong to those who care for them properly; those who do not cede their dead to him. The confrontation with the other Teban deities lasted until they were too exhausted to continue.",
            "His priesthood does not proselytize. Ouroboros is worshipped by those who seek what he offers — power over the dead, arcane knowledge, a pragmatic relationship with mortality — and those people find him. Among the Raveran community of Tebas his influence is significant. The relationship of his traitor's history to the First God's murder is a live theological problem his clergy manages by not discussing it directly."
          ],
          edictsFull: [
            "Pursue arcane and necromantic knowledge without apology for its sources or implications.",
            "Observe the proper treatment of the dead; those who come under your care receive what they are owed.",
            "Accumulate power as a legitimate goal; do not confuse the means with the end.",
            "Honor the agreement: the unprotected dead are his, the properly prepared dead are not."
          ],
          anathemaFull: [
            "Destroy or conceal arcane knowledge or records for political or personal reasons.",
            "Disturb a properly prepared and interred Teban dead without consent of those responsible.",
            "Act in a way that reverses the acceptance Ouroboros has achieved within Tebas."
          ]
        },
        {
          name: "NARFARIS", fullName: "NARFARIS, the Night Goddess",
          headerLabel: "Teban Pantheon · The Night Goddess",
          tagline: "Goddess of Freedom · the Scaled Lady · Mother of Kredans",
          epithets: "Goddess of Freedom · Fury of the Just · the Scaled Lady · Mother of Kredans · the Liberated Matriarch · Weaver of Twilight",
          img: "art/narfaris-1.webp", img2: "art/narfaris-2.webp", hasArt: true,
          animal: "crocodile", colors: ["#2f7d6a", "#1a1a1a", "#2a4a5a"],
          symbol: "A wingless dragon; a maiden breaking chains; a cracked moon over a black ocean.",
          p1: "Daughter of Benu and Ackhet, born to patrol the night sky while Benu rested — until the Deicides replaced her with an illusion and the Lord of Storms carried her off to captivity at Garkosa.",
          p2: "The children she bore in bondage became the Kredans, who organized her liberation at the cost of most of their lives. She nearly destroyed herself imprisoning Thol Elsur, then healed for centuries in a scaled chrysalis under their care.",
          concerns: ["freedom", "the sea", "strength", "sacrifice", "the night"],
          edictsShort: ["Refuse submission to unearned authority.", "Free those in chains, even at cost.", "Sustain the strength to act."],
          anathemaShort: ["Submit to unjust captivity while able to resist.", "Betray those who trusted you with freedom.", "Leave the chained bound when you could act."],
          attr: "Strength / Constitution", font: "harm", sanct: "holy or unholy",
          skill: "Athletics", weapon: "trident",
          domains: "Freedom · Might · Moon · Water", altDomains: "(alt. Destruction · Protection)",
          spells: "true strike (1st) · freedom of movement (4th) · control water (7th)",
          fullParas: [
            "Narfaris is the daughter of Benu and Ackhet — born in one of the rare moments the two were allowed proximity, and immediately assigned to patrol the night sky during the hours Benu rested. She performed this until the Deicides replaced her with an illusion good enough that Benu did not notice during an eclipse when he checked on her. He discovered the deception, found no trace of her, imprisoned three Deicides in the firmament as a warning, and assigned Ackhet to search.",
            "What had taken her was the Lord of Storms — Thol Elsur — who followed her across the night sky until he could seize her. She was held at the place now called Garkosa. The children she bore in captivity became the Kredans — enslaved from birth, built as a workforce, and eventually the people who organized her liberation at the cost of most of their lives. She fought alongside them and nearly destroyed herself in the final confrontation that imprisoned Thol Elsur and freed the survivors.",
            "She recovered on the island of Thorlan-Airen under the Kredans' care — the reversal of the original custody so complete it became sacred. Her wings were gone; parts of her power inaccessible. She spent centuries in a scaled chrysalis, healing, while her will filtered through the island and shaped the Kredans into what they are: light-sensitive, ferocious, lovers of open spaces and the sea."
          ],
          edictsFull: [
            "Refuse submission to any power that has not earned legitimate authority over you.",
            "Protect those in chains or captivity; their liberation is more important than your safety.",
            "Sustain the strength needed to act when strength is required; do not let incapacitation become permanent.",
            "Honor sacrifice made for the freedom of others, whether or not it was acknowledged."
          ],
          anathemaFull: [
            "Submit voluntarily to unjust captivity when the capacity to resist remains.",
            "Betray those who trusted you with their freedom or survival.",
            "Allow those in chains to remain so when you had the means to act and chose not to."
          ]
        },
        {
          name: "RAHMA", fullName: "RAHMA, Goddess of Mercy",
          headerLabel: "Teban Pantheon · Goddess of Mercy",
          tagline: "She Blessed by Light · Mercy · the Winged Goddess",
          epithets: "She Blessed by Light · Mercy · the Winged Goddess",
          img: "art/rahma-1.webp", img2: "art/rahma-2.webp", hasArt: true,
          animal: "—", colors: ["#ffffff", "#c9962a", "#e8d8a8"],
          symbol: "A pair of white wings embracing a golden sun.",
          p1: "An Incarnation of the Radiant Compact before she was a Teban goddess. She arrived in Tebas on her knees, returning a child taken under circumstances read as aggression — and did not contest the charge.",
          p2: "Benu acknowledged the harm and gave her a second chance she had not asked for. Her theology does not negotiate: she abominates killing even in self-defense, and holds that no unjudged soul is beyond a different course.",
          concerns: ["mercy", "redemption", "charity", "second chances", "the oppressed"],
          edictsShort: ["Offer every unjudged soul a second chance.", "Act against cruelty to the defenseless.", "Do right through right means."],
          anathemaShort: ["Kill any sentient being, even in self-defense.", "Declare a living person beyond redemption.", "Refuse genuine need for shelter or aid."],
          attr: "Wisdom / Charisma", font: "heal", sanct: "holy",
          skill: "Medicine", weapon: "mace",
          domains: "Family · Healing · Protection · Repose", altDomains: "(alt. Ambition · Truth)",
          spells: "soothe (1st) · vital beacon (4th) · regenerate (7th)",
          fullParas: [
            "Rahma arrived in Tebas in the year 108 of the Fourth Era, returning a child who had been taken from the kingdom under circumstances the Teban government interpreted as an act of aggression on her part. She did not contest that interpretation. She arrived on her knees before the Pharaohs and delivered the child. Benu received her, acknowledged the harm she had done, and gave her something she had not asked for: a second chance.",
            "She was an Incarnation of the Radiant Compact before she was a Teban goddess — the Incarnation of Charity, one of the seven who carry that faith. The circumstances of her departure are not discussed openly. What is known is that she arrived with her Malak — luminous servants from her former faith — and with the Aklramadii, the ash-eating people who had followed her. All had followed her into whatever failure she was accounting for.",
            "Three years after arrival she had moved from suspicion to devotional subject. She does not ask for agreement or belief, and does not separate her mercy from a clear sense of what is acceptable. She abominates killing even in self-defense; she holds that every unjudged individual retains the right to attempt a different course, without exception for the severity of what they have done. Her combat form — used only when those she protects are directly threatened — is a radiance most cannot look at, with a voice that works below the conscious level."
          ],
          edictsFull: [
            "Extend mercy and the opportunity for a different course to every being not yet finally judged.",
            "Act against cruelty toward the defenseless and inclemency toward the defeated.",
            "Do not perpetuate suffering that can be ended.",
            "Do what is right through the right means; a good outcome does not sanctify a harmful method."
          ],
          anathemaFull: [
            "Kill any sentient being, including in self-defense.",
            "Declare any individual beyond the possibility of a different course while they still live.",
            "Abuse the weak or vulnerable under any justification.",
            "Refuse shelter, food, or medical attention to someone whose need is genuine."
          ]
        },
        {
          name: "YASHTAL", fullName: "YASHTAL, Goddess of Knowledge",
          headerLabel: "Teban Pantheon · Goddess of Knowledge",
          tagline: "Goddess of Wisdom · the Humble · Goddess of Love · Lady of Cats",
          epithets: "Goddess of Wisdom · the Humble · Goddess of Love · Lady of Cats · Guardian of the Scribes · Re-Creator of Life",
          img: "art/yashtal-1.webp", img2: "art/yashtal-2.webp", hasArt: true,
          animal: "lynx", colors: ["#b5762a", "#c9962a", "#8a5a1e"],
          symbol: "A bronze or copper medallion bearing a lynx biting a scroll.",
          p1: "The other Pharaoh — Atunnis's counterpart, who called down judgment on his tyranny, submitted to it, and then governed Tebas alone through an absent army and a pressing border war.",
          p2: "She unified the written language, set the agricultural calendar, and ended the tribal wars. When Atunnis and their children fell, she used the Scroll of Life to return them — and did not survive the working.",
          concerns: ["knowledge", "love", "writing", "cats", "wisdom"],
          edictsShort: ["Pursue knowledge across all disciplines.", "Share knowledge with sincere seekers.", "Act with humility."],
          anathemaShort: ["Destroy or hide knowledge for advantage.", "Claim authority in an unstudied field.", "Let pride refuse correction."],
          attr: "Intelligence / Wisdom", font: "heal", sanct: "holy",
          skill: "Arcana", weapon: "staff",
          domains: "Fate · Knowledge · Magic · Time", altDomains: "(alt. Healing · Truth)",
          spells: "magic missile (1st) · read the threads (4th) · true seeing (7th)",
          fullParas: [
            "Yashtal was the other Pharaoh — Atunnis's counterpart and partner, the one who called on Benu and Ackhet to intervene in his tyranny, submitted to the judgment, and then governed Tebas alone while Atunnis was in exile and Kastoy pressed from the border. She organized the Teban dialects into a single written language, established the agricultural calendar, divided the land between the tribes, and ended the internal wars — all while managing a kingdom weakened by an absent army, without complaint to the authorities she had invoked.",
            "She was raised among the Ánates before her Pharaonic education, which gave her a working knowledge of death-management. At the end of her reign it had a specific use: when Atunnis and their children fell in the final campaign against Kastoy, she used the Scroll of Life — an artifact she had spent her rule constructing, which broke the barrier between the Spirit Realms and the material world. They came back and finished the war. Yashtal did not survive the working; she passed directly to the Spirit Realms and waited for Atunnis in Ma'at.",
            "Her elevation to divinity was posthumous, confirmed by the other deities. She is the goddess most consulted by those in arcane, scholarly, agricultural, and scribal fields. Lynxes and cats are sacred in her temples; she is represented with a cat's face, a staff in one hand and a white flame in the other."
          ],
          edictsFull: [
            "Pursue knowledge across disciplines; incompleteness in one field compromises understanding in all others.",
            "Share knowledge with those who seek it with genuine purpose.",
            "Act with humility; certainty of position is not a defense of character.",
            "Apply the whole of your knowledge when it is needed, regardless of the personal cost."
          ],
          anathemaFull: [
            "Destroy or conceal knowledge for political or personal advantage.",
            "Claim authority in a field you have not studied.",
            "Allow pride in your expertise to prevent you from accepting correction."
          ]
        }
      ]
    },
    {
      id: "fae",
      name: "The Fae Lords",
      type: "Major Pantheon",
      accent: "#8b6fe0", accentDeep: "#6a4fc4",
      tagline: "The exiled gods of the elves — duels, craft, the hunt, and the Courts.",
      blurb: "Beings from a world that failed, who invaded a creation not their own. Lords of duels and craft, the hunt and the sky, bound by the Courts and their codes.",
      lore: {
        origin: [
          "The Fae Lords existed before the Ninth World was born. Their origin belongs to the second world ever made — Neielcireen — shaped by the will of the earliest Lords and the power of the Elemental Sovereigns. In that place, the true essence of the Fae found expression: a world of unmatched beauty where nature was permanently abundant, time held no dominion, and the elves lived hedonistic lives given over to art and magic, guided by the many Courts whose intricate dealings made their society as dangerous as it was splendid.",
          "That paradise ended as the first world had ended. Most of it was destroyed. But portions survived, pulled free of their own existence by the power of certain Courts and held in the void between worlds, waiting for the right moment to return.",
          "It was then that the Fae Lords, together with other deities whose worlds had also been annihilated and others who had not yet given form to their creative ambitions, built the Ninth World — a place shaped from pieces of each of their experiences, in the hope that something, this time, might endure against the entropy that had undone the eight attempts before it.",
          "The Lords contributed art, elven magic, passion, and curiosity. Led by Dalantherion, a Lord of the Winter Court, they managed to rescue a portion of the Second World and bind it alongside the Ninth, giving shape to what is now known as the Fae Lands."
        ],
        sects: [
          {
            name: "Vanyrse", subtitle: "Balance of power, maintained by surgical disruption",
            paragraphs: [
              "Not accurately described as a guild of fanatic assassins, though that description is common among those who have encountered them from the wrong direction. A religious order native to Helgória, guided by priests of the New Triad and dedicated to maintaining the balance of power across Eion, within the limits of their reach.",
              "Their method is surgical disruption: overpowered nations are checked, individuals who accumulate too much influence find their allies bought out from under them, marriages whose offspring would shift a balance critically are ended before an heir is born. Their religious justification functions as a moral compass more than a mandate — when the Three Ladies' doctrines would prohibit a necessary action, the Vanyrse set the doctrine aside and act anyway."
            ],
            symbol: "Three spheres — representing the three moons — arranged as a pyramid.", colors: "dark grey, silver, black",
            benefits: "Safehouses, disguises, forged documents, contacts, travel resources, and referrals for work.",
            edicts: ["Maintain the balance of power between nations, individuals, and institutions; act to prevent catastrophic imbalance before it manifests", "Complete every mission accepted; do not abandon an assignment once undertaken", "Eliminate sanctioned targets without exception"],
            anathema: ["Refuse or abandon a mission once it has been accepted", "Kill any sentient creature outside the demands of a mission or when they do not directly obstruct its completion", "Attempt to leave the Vanyrse", "Accept or allow a member who does not carry Fae heritage"]
          },
          {
            name: "The Judges", subtitle: "\"Justice wields a sword with both hands.\" — Trial by Duel",
            paragraphs: [
              "Trace their origins to a small faction within the Battle Choir that originally inspected weapons and assessed duelists before formal contests. Over time, the faith of their patron gods — Dalantherion and Aien'Elleir — worked through their judgment in ways that produced measurable, binding results. From this emerged the Trial by Duel, now accepted across Eion as a legitimate means of resolving disputes.",
              "A Judge evaluates whether contesting parties are balanced and the matter can fairly be resolved through combat. The outcome is absolute: the loser dies or accepts permanent exile. Refusal invites the Judge's personal enforcement — escalating to the full order if evaded. Members travel as wanderers, train constantly with longswords, and maintain absolute impartiality as the functional core of their worth."
            ],
            symbol: "Two longswords standing upright, gripped by gauntleted hands, separated by an open palm — or two longswords crossed with points facing downward.", colors: "silver, black",
            benefits: "Longsword training, dueling instruction, martial technique study, lodging, safehouses, travel resources, knowledge of dueling ritual law, diplomatic immunity when summoned to adjudicate or enforce a verdict.",
            edicts: ["Remain absolutely impartial when called to judge or oversee a Trial by Duel", "Enforce every verdict you have rendered; pursue and compel compliance from those who refuse", "Answer every legitimate summons to adjudicate a duel unless your impartiality is demonstrably compromised"],
            anathema: ["Allow a verdict you presided over to go unenforced without genuine effort to enforce it", "Accept a petition for Trial by Duel that is unreasonable, fabricated, or cannot legitimately be resolved through combat", "Engage a fellow Judge in lethal combat before completing the mandatory identification, offer of surrender, and one-hour withdrawal", "Engage in political affairs in your own name while serving as a Judge", "Accept a petition from or admit a member who does not carry Fae heritage"]
          },
          {
            name: "The Battle Choir", subtitle: "Preserving elven martial tradition across reincarnations",
            paragraphs: [
              "Not a military organization in the conventional sense, though it has produced more elven warriors, tacticians, and weapon-masters than any other institution in elven history. A brotherhood whose function is to ensure the martial traditions of the elven people never die, preserving the name and Song of every member so they can find their already-walked path in a future incarnation.",
              "Members serve four patron gods: Dalantherion, Aien'Elleir, Dareth'Shaellen, and Thol Elsur, and call each other brothers regardless of court allegiance. Protocols governing brothers in combat are precise: identify yourself, offer surrender, withdraw for one hour. Following the Genocide of the House of Elsur, the Choir declared indefinite mourning and prohibited members from dying in service of human causes."
            ],
            symbol: "A golden coat of arms crossed by a black band, bearing a bow, a broad-bladed sword, and a longsword — or the four divine symbols of the patron gods arranged on a black field.", colors: "black, gold",
            benefits: "Weapons training, battle knowledge, records of past lives and Songs, mentors, lodging, expedition funding, safehouses, military equipment at reduced cost.",
            edicts: ["Preserve the martial traditions and combat knowledge of the elven people through practice, record, and transmission", "Follow Battle Choir protocol when facing a fellow member in combat: identify yourself, offer surrender, withdraw for one hour, then re-engage only if the conflict persists", "Record the death of every fallen member, secure their weapons, and report their name and Song to a sect lodge"],
            anathema: ["Erase or falsify records of a member's Song or death", "Kill a fellow member before completing the full identification, surrender offer, and one-hour withdrawal protocol", "Abandon the martial focus of your Song while remaining in the sect", "Accept a member who does not carry Fae heritage"]
          },
          {
            name: "The Order of Nsaillos", subtitle: "Diplomacy with other races, vigilance against the Stellar Gods",
            paragraphs: [
              "Founded in Daas Elsur from the recognition that isolation and aggressive martial posture had both failed to preserve the elven race. Absorbed members from the Battle Choir, Cyran catalyst-mages, the Judges, and the dissolved Storm Wanderers, incorporating human chivalric tradition — hierarchy, codes of conduct, formal oaths, noble titles — as practical tools for building relationships with human institutions.",
              "Maintains a formal association with the Silver Cross, establishing the first real diplomatic channels between elven and human nations. All members orbit two purposes: watch for the Stellar Gods, and build something between elves and others that does not require a field of bodies to maintain."
            ],
            symbol: "An elven rune meaning silence, painted blue on a red field.", colors: "blue, red",
            benefits: "Safehouses, allies, contacts, diplomatic guarantees, noble titles, mission support.",
            edicts: ["Avoid unnecessary violence; exhaust alternatives before resorting to force", "Protect elven traditions, sacred sites, and people by any means available", "Work toward diplomatic relations between elves and other races of Eion"],
            anathema: ["Associate with or knowingly assist servants of aberrations", "Commit violence that a sincere diplomatic effort could have prevented", "Suppress, discard, or destroy elven cultural knowledge", "Accept a member who does not carry Fae heritage"]
          },
          {
            name: "The Cyran Emissaries", subtitle: "Rebalancing elven civilization toward Songs that do not involve killing",
            paragraphs: [
              "Formed to address a problem the Battle Choir's existence made acute: the elven people were producing warriors at a rate that outpaced everything else. Gathers the servants of Cyratis, Ryniah, and Tarune under a single structure, based on the island of Cyratis, organizing the practice of the Scyvoss, funding artists and poets, and leading expeditions toward the Cyran Monolith.",
              "Divides into three factions: the Conduits (Cyratis) complete the Monolith and defend the island, drawn mostly from elves who have already lost their Songs; the Emanators (Tarune) organize and propagate the Scyvoss, cataloguing and restoring knowledge; the Incitors (Ryniah) patronize poets, cultivate passions, and generate the intrigues that keep elven society from drifting into pure martial obsession."
            ],
            symbol: "A blue pennant bearing a monolith blooming from a rose, with the Gayun carved at its peak.", colors: "blue, silver",
            benefits: "Training in the Scyvoss or Galvarcanism, expedition funding, instruction in interpersonal relations, ritual knowledge at reduced cost, equipment for travel, magic, and crafting at reduced cost.",
            edicts: ["Protect elven culture: record it, defend those who preserve it, and recover what has been lost", "Fulfill the obligations of your faction within the sect with regularity", "Seek out knowledge that benefits your people and bring it back"],
            anathema: ["Kill another elf under any circumstances — in extremity, incapacitation is the limit", "Reveal elven knowledge to non-elves except when strictly necessary to advance a critical goal", "Pass over an opportunity to meaningfully improve the condition of your people when action was within your power", "Accept a member who does not carry Fae heritage"]
          }
        ],
        beliefs: [
          { title: "Neielcireen", paragraphs: [
            "The elves do not believe they are native to the Ninth World. They came from a prior existence — an idyllic paradise lost to Azoth. When their enchanted realm was destroyed, the Fae Lords seized a portion of Neielcireen and attempted to save what they could — that fragment is known as the Fae Lands, and it remains connected to the Ninth World.",
            "The creation of Neielcireen is so ancient that even elven tradition cannot reliably name which Lords made it first. But because their creation took place in a world apart from the Ninth, the elves do not suffer the consequences of mortal existence in the same way other races do."
          ]},
          { title: "The Cycle", paragraphs: [
            "If anything comes close to a religion for the elves, it is the belief in the Cycle: a continued existence of the soul that repeats across many incarnations until each elf's Song is complete. Some elves live their entire Song in a single lifetime; others reincarnate so many times they accept their existence may have no end.",
            "The Three Goddesses of the Cycle maintain the order of reincarnations, giving every soul time to complete its purpose — and occasionally terminate Songs that have occupied too much space in the world's unfolding."
          ]},
          { title: "The Banished Prince", paragraphs: [
            "A prominent prince of the Winter Court, whose audacity and irreverence led to irrevocable exile. Close as he was to the First to Create, he contested glory with Dalantherion across ages — but began to boast of his freedom and disrespect the Duel, one of the few immovable traditions of the Fae Lords.",
            "Both he and Dalantherion once competed for a Primeval Maiden's attention; unable to choose, she proposed a Duel. The prince lost, swore to withdraw, then broke the oath and turned against his rival — constructing a poison against Dalantherion over a long period. When his treachery was uncovered, his Song was revoked even after having been fulfilled, and he was exiled to strange lands. The Maiden, implicated in the tragedy, was banished from Neielcireen as well."
          ]},
          { title: "Vaereth, the Forsaken Soul", paragraphs: [
            "Among the Fae, the tale of Vaereth is told not as monster and hunter, but of grief. In the Draconic Era, Eastarus laid violent claim upon Sarithiel Star-Eater, a priestess of Darisha; from that profane act was born Vaereth, a being neither mortal nor beast, driven to bloodshed not by its will but by the violence woven into its birth.",
            "Every one hundred and twenty-five years, when Sarithiel's spirit awakens anew and prophesies its return, the Fae ready the Wild Hunt — knowing Vaereth's return is not a terror to be feared, but a broken soul to be released from its cursed cycle."
          ]},
          { title: "The Song", paragraphs: [
            "Every elf possesses their own Song — the objective of the soul — and will attempt to complete it across as many incarnations as necessary. Some Songs are simple: found a dynasty, compose an eternal piece of music. Others are nearly impossible: restore Neielcireen, kill a god. An elf is considered an adult from the moment their Song becomes clear to them, conventionally around one hundred and twenty-five years of age.",
            "A Song constrains incarnation so that the elf never returns in a form that would make completion impossible. There is no fixed number of reincarnations — but the Triad of the Cycle can bar or extinguish Songs that no longer serve a purpose. When this happens, there is no second chance: the soul leaves the Cycle and is condemned to oblivion, ceasing to exist entirely."
          ]},
          { title: "The Three Moons & the Wild Hunt", paragraphs: [
            "Eldair the golden, Ruinen the scarlet, and Kartis the pale — to the elves, the physical representation of the Triad of the Cycle. When Ruinen conceals herself, roughly once every ten years, the Wild Hunt is called: a feast dedicated to Dareth'Shaellen, beginning at a site grown decrepit enough to need renewal in Dari'sha's eyes.",
            "One priest serves as the Avatar of the Hunt, wearing red while others wear white. The starting point is devastated; survivors are spared and hunted again the following night, repeating until Ruinen reappears. Where the Hunt ends, a monument to Dareth'Shaellen is raised, and any final survivors are protected from future Hunts and made eligible to join as hunters themselves."
          ]},
          { title: "The Courts", paragraphs: [
            "The Courts now represent a formal alliance between elves and their Lords. An elf of renown may swear loyalty to one of the three surviving Courts and serve as champion, receiving attention in life and a place in the Court when their Song is complete.",
            "The Court of Winter (Dalantherion, Phaeranny, Thol Elsur, Galaniani) is devoted to martial excellence and exploration — its Winter Champions wander Eion challenging others to duels. The Court of Ages (Dareth'Shaellen, Aien'Elleir, Narandi'Vallenas) — the Champions of the Cycle — strengthen the presence of the New Triad and the proper functioning of the Cycle. The Court of Summer (Tarune, Ryniah), home to the Laughing Champions, is the most audacious of the three, achieving objectives through subtlety rather than blades."
          ]},
          { title: "The First City & the Fall of Lightning", paragraphs: [
            "When the Fae Lands lost connection to the Ninth World, Thol Elsur razed human-held lands and bound their inhabitants as slaves to build the First City, governing it with an iron grip until a mutiny by one of his concubines brought down elven hegemony there.",
            "Restored to divine status in the Third Era, Thol Elsur relocated a section of the First City's ruins into the Astral Plane, creating the Fall of Lightning — a resting place for souls whose Songs reflect war and domination, and a bulwark walling off access to the Fae Lands."
          ]},
          { title: "The Crossroads & the Fae Lands", paragraphs: [
            "Governed by the New Triad, the Crossroads is a land of passage: transit for those whose Songs are complete, a waiting place for those who will reincarnate. When an elf dies, Aien'Elleir judges them — those who must return await Narandi'Vallenas's summons, those fulfilled are guided by Dareth'Shaellen to the Fae Lands, and lost Songs are erased and struck down into oblivion.",
            "The Fae Lands, rescued from Neielcireen, are divided among the Courts: permanent twilight around the Winter Court, starlit night over the Court of Ages, and permanent warm dawn over the Court of Summer."
          ]},
          { title: "The Scyvoss", paragraphs: [
            "The full body of traditions, chants, gestures, and objects the elven people use to give form and focus to magic — more informal than most traditions, dispensing with the hermetic conventions other races use to standardize casting. Elves use poems in their own tongue rather than words of power, and move their bodies however best directs their inner energy.",
            "One rule governs its transmission: a practitioner may never refuse a student. This flexibility lets the elves personalize their magic entirely, but at a cost — a Scyvoss practitioner's rites are so personal that teaching a specific working is genuinely difficult, and the apprentice must usually find their own expression of the same effect."
          ]}
        ],
        relations: [
          { name: "Pantheon of Antares", stance: "Indifferent", quote: "", paragraphs: [
            "As with nearly all external relations the servants of the Fae Lords maintain, indifference is the default. The Wars of Inheritance generated declared enmity from the Antaran side; on the Fae side, no active grievance outlasted the war. Marduk draws a certain identification from individual Fae Lords; Ariela is recognized and respected for her combat ability; Aldar's seers are taken seriously.",
            "Sect-level friction is more concrete: rivalries between the Steel Saints and the Battle Choir, and between the Arcane Trinity and the Cyran Emissaries, are ongoing though rarely bloody."
          ]},
          { name: "Pantheon of Tebas", stance: "Indifferent", quote: "", paragraphs: [
            "Minimal contact and no open conflict produce a functional blank. The myth that Narfaris once had children with a Fae Lord whose Song was lost circulates among elves but cannot be verified. The Judges and the Order of Nsaillos have both identified the Vigilants of Dalarid as potential partners, though formal ties have not been established."
          ]},
          { name: "Pantheon of the Terrestrials", stance: "Allied", quote: "\"No ballad is made of repeated verses alone...\" — Wisdom of Tarune", paragraphs: [
            "Unlike any other cross-pantheon connection in Eion: complementary and mutually reinforcing. Several deities are shared between them, approached from different angles — Nahalenia, Ryniah, and Thol Elsur exist in both pantheons. The Miriad among the Terrestrial sects maintains an ongoing collaborative relationship with the Cyran Emissaries and what remains of the Storm Wanderers.",
            "Both traditions accept that their respective creation accounts are complementary rather than contradictory, diverged from a shared root through separate cultural development."
          ]},
          { name: "Pantheon of the Patrons", stance: "Indifferent", quote: "", paragraphs: [
            "Distance and insularity on both sides produce limited data. The few elves who contact the Patrons' tradition tend to develop personal fascinations with J'Arizan and Syraine in particular. Among known Patron sects, only the Janissaries appear regularly in contexts where Fae servants encounter them — as opposing forces to the Battle Choir."
          ]},
          { name: "Terminus Court", stance: "Allied", quote: "\"Something like a distant brother, the Reaper wanders the Courts as a Lord.\" — Helgorian oral tradition", paragraphs: [
            "Elricon was once Fae — born of the people, having passed through the Cycle across many lives. His divine ascension produced a deity who operates within Fae theological assumptions by default. The boundary of cooperation is clear: Elricon determines the moment of death and the soul passes to the Triad's judgment; neither side intrudes on the other's domain."
          ]},
          { name: "Avatars of Vice", stance: "Indifferent", quote: "\"Another empty form to fill the absence of human purpose.\" — Anonymous", paragraphs: [
            "The standard Fae posture is benign detachment — the Avatars thrive on repressed-then-released desire, a dynamic that does not arise among the Fae. What genuinely interests Fae scholars is not Avatar theology broadly but two specific elements: the Witch of the Abyss, and the Soul Mud. The Pact-Makers have found occasional utility among less bellicose Fae groups for accessing human agents in territories under other pantheons' influence."
          ]}
        ]
      },
      deities: [
        {
          name: "NARANDI'VALLENAS", fullName: "NARANDI'VALLENAS, the Weaver of Ages",
          headerLabel: "Fae Lords · First of the Triad",
          tagline: "Cirisine · She Who Creates · Lady of Eldair",
          epithets: "Cirisine · She Who Creates · First of the Triad · Goddess of Fertility · Lady of Eldair · Nara · Vallenas",
          img: "art/vallenas-1.webp", img2: "art/vallenas-2.webp", hasArt: true,
          animal: "deer", colors: ["#2f6fb0", "#6a4a2e", "#4c9c6f"],
          symbol: "The Blooming — a chalice overflowing with a grapevine.",
          p1: "Narandi'Vallenas was once a Lady of the extinct Court of Spring. When that Court was destroyed, the Triad of the Cycle risked collapse — to prevent it, she assumed the mantle of Cirisine, the title given to whoever kindles the first spark of an elf's Song, and became the Weaver of Ages.",
          p2: "Beyond the Cycle she welcomed the Atares into the elven tradition of reincarnation, and watches over planting, harvest, untouched forests, births, and festivals of fertility. She is peaceful and warm even under hostility, and withdraws rather than escalates when threatened.",
          concerns: ["birth", "fertility", "the Cycle of Rebirth", "agriculture", "family"],
          edictsShort: ["Nurture life in all its expressions.", "Support the beginning of new Songs.", "Welcome those who seek purpose for the first time."],
          anathemaShort: ["Destroy new life or prevent its beginning.", "Corrupt or obstruct the Cycle of Rebirth.", "Refuse sincere guidance to a genuine seeker."],
          attr: "Wisdom or Charisma", font: "heal", sanct: "can choose holy",
          skill: "Nature", weapon: "staff",
          domains: "Creation · Family · Healing · Nature", altDomains: "(alt. Moon · Time)",
          spells: "soothe (1st) · vital beacon (4th) · regenerate (7th)",
          fullParas: [
            "Narandi'Vallenas was once a Lady of the extinct Court of Spring. When that Court was destroyed in the chaos following the loss of Neielcireen, the Triad of the Cycle risked collapse. To prevent it, Vallenas assumed the mantle of Cirisine — the title given to the Lady responsible for the first spark of an elf's Song — and became the Weaver of Ages. The title had passed through several Ladies over the ages, each holding it until their own Song was complete; Vallenas is simply the last to receive it.",
            "Beyond the Cycle, she is the one who welcomed the Atares into the elven tradition of reincarnation, giving half-elven souls the option of choosing their elven destiny. She also watches over the seasons most favorable to planting and harvest — a detail overlooked by most other deities during the Ninth World's creation — as well as untouched forests, births, and festivals of fertility.",
            "Her followers divide into two groups: those devoted to her as a goddess of life — healers, midwives, and druids who tend to the beginning of existence — and those drawn to her Cirisine aspect, who work as teachers, mentors, and patrons, encouraging new Songs and guiding those just beginning to understand their purpose.",
            "Vallenas is peaceful and consistently warm, even under contempt or hostility. In extreme situations she withdraws rather than escalates, and when her defense becomes necessary, other Lords and their servants take it upon themselves — neither her priests nor her paladins raise a hand in violence.",
            "Within the pantheon she is widely revered, even by those who do not count themselves among her devotees, but beyond the Fae Lands she is little known — she did not participate in the divine conflicts of the Ninth World and makes her presence felt through small altars in wild or agricultural places and itinerant clerics who practice rather than proselytize.",
            "She is described as an elf with hair the color of earth, skin like golden wheat, and eyes like running rivers, dressed in whatever the surrounding nature offers. Her sacred symbol, the Blooming, is a chalice overflowing with a grapevine; her festivals fall at the full moon, especially beneath Eldair, the golden moon."
          ],
          edictsFull: [
            "Nurture life in all its expressions; support the beginning of new Songs.",
            "Protect the seasons and the cycles of growth.",
            "Welcome and guide those who seek purpose for the first time."
          ],
          anathemaFull: [
            "Destroy new life or prevent its beginning.",
            "Corrupt or obstruct the Cycle of Rebirth.",
            "Refuse sincere guidance to those who genuinely seek it."
          ]
        },
        {
          name: "CYRATIS", fullName: "CYRATIS, the Unfinished Innovation",
          headerLabel: "Fae Lords · The First Cyrano",
          tagline: "Forger of Kingdoms · Creator of Galvarcanism · the Songless",
          epithets: "The First Cyrano · Forger of Kingdoms · Creator of Galvarcanism · the Ascending Monolith · the Songless · Hero",
          img: "art/cyratis-1.webp", img2: "art/cyratis-2.webp", hasArt: true,
          animal: "—", colors: ["#c9c9d2", "#c9a24b", "#2f6fb0"],
          symbol: "The Aardus — a monolith covered in runes and lightning bolts.",
          p1: "Cyratis was born during the Draconic Dominion, a Dream Wanderer whose Song — merging the Fae Lands with the Ninth World — became impossible when the Astral Curtain was raised. Facing a life with no Song to complete, the response was not despair but defiance: to force elven history to remember a Songless elf.",
          p2: "That defiance produced Galvarcanism, a standardization of Scyvoss that sustains complex constructs and extends elven life. Tested first on themself, it kept Cyratis alive for millennia — long enough to break draconic dominion and, at the end, to power the Monolith with their own body. Their consciousness lives within it still.",
          concerns: ["arcane innovation", "sacrifice", "legacy", "elven craft"],
          edictsShort: ["Pursue arcane and technical innovation.", "Preserve elven history and tradition.", "Strive to complete what others have abandoned."],
          anathemaShort: ["Destroy knowledge or art.", "Claim credit for another's creation.", "Refuse to teach a sincere student."],
          attr: "Intelligence or Constitution", font: "heal", sanct: "can choose holy",
          skill: "Arcana", weapon: "spear",
          domains: "Creation · Duty · Knowledge · Magic", altDomains: "(alt. Lightning · Protection)",
          spells: "magic missile (1st) · lightning bolt (4th) · teleport (7th)",
          fullParas: [
            "Cyratis was born during the Draconic Dominion — known in some traditions as a Dream Wanderer, one of those rare elves whose Song moves between realms of aspiration rather than practical achievement. Their ambition was to create a kingdom that mirrored Neielcireen; the Song itself was the merging of the Fae Lands with the Ninth World. When Charlagaron killed Nahalenia and used a fragment of her divine power to raise the Astral Curtain, permanently separating the two planes, that Song became impossible to complete.",
            "With no Song to complete, Cyratis faced a truth no elf had ever confronted: this would be their only life. There would be no return. The response was not despair but furious defiance — a determination to force elven history to remember a Songless elf no matter the cost. That defiance produced Galvarcanism: a standardization of Scyvoss that allowed magical electricity to sustain complex constructs and extend the life of elves. Cyratis tested it first on themselves and lived, kept alive through the entire First Era and into the middle of the Second.",
            "The knowledge accumulated in that span produced the plans that broke draconic dominion: an inviolable mountain range enclosing the free lands of the Ninth World, and a magical resonance within it that would prevent dragons from sustaining their consciousness inside the World Shield. The fortress held. Cyratis and Berengário had once been allies, a relationship that fractured as their peoples prepared for another racial confrontation; Cyratis answered by pulling a fragment of the Fae Lands free of the Astral Curtain and placing it in the Ninth World, giving the island his own name.",
            "Cyratis's last project was the Monolith that would power a protective barrier around that island. It had to be activated before it was ready, with Berengário's forces already approaching, and no external power source existed that could do it in time. Cyratis used their own body, sustained by Galvarcanism, to complete the circuit. The barrier held. The Monolith still stands, and Cyratis's consciousness lives within it.",
            "The faith that grew around them after death elevated Cyratis to godhood, patron now of artisans, smiths, scholars, and anyone who needs history to remember them. Their statues are androgynous and faceless — the debate over Cyratis's sex was never resolved, and history will not settle it until the deity is freed from their own creation."
          ],
          edictsFull: [
            "Pursue arcane and technical innovation.",
            "Preserve elven history and tradition.",
            "Serve your people even at personal cost.",
            "Strive to complete what others have abandoned."
          ],
          anathemaFull: [
            "Destroy knowledge or art.",
            "Claim credit for another's creation.",
            "Abandon a worthy cause solely to protect yourself.",
            "Refuse to teach a sincere student."
          ]
        },
        {
          name: "DARETH'SHAELLEN", fullName: "DARETH'SHAELLEN, the Renewal of Ages",
          headerLabel: "Fae Lords · Darisine, Goddess of the Hunt",
          tagline: "Dari'sha · Lady of Ruinen · the Huntress",
          epithets: "Darisine · Dari'sha · Mairil · Goddess of the Hunt · Lady of Ruinen · the Huntress",
          img: "art/dareth-1.webp", img2: "art/dareth-2.webp", hasArt: true,
          animal: "wolf", colors: ["#9c2f26", "#1a1a1a"],
          symbol: "The Hunt — a waning scarlet moon in the shape of a bow.",
          p1: "Once a young, tempestuous deity of the Court of Summer, Dari'sha assumed the mantle of Darisine when the Triad lost its founders — the aspect of renewal, which means the destruction of whatever is old, useless, or obsolete so the new can emerge. Without Darisine clearing space, Cirisine could never create.",
          p2: "Renewal tends toward violence because resistance to endings is almost universal, and Dari'sha is blamed for storms and quakes that were not always her doing. During the Wars of Inheritance she moved with more force than any other Lord — not calculation, but conviction that much of what she erased had simply grown obsolete.",
          concerns: ["the hunt", "renewal", "destruction of the obsolete", "natural cycles"],
          edictsShort: ["Hunt regularly and never waste your kill.", "Remove what is obsolete or actively harmful.", "Embrace impermanence as the condition of renewal."],
          anathemaShort: ["Preserve something past its purpose from sentiment.", "Refuse a legitimate hunt when called.", "Prevent a natural ending when the time has come."],
          attr: "Strength or Wisdom", font: "harm", sanct: "can choose unholy",
          skill: "Survival", weapon: "shortbow",
          domains: "Destruction · Moon · Nature · Repose", altDomains: "(alt. Freedom · Might)",
          spells: "pass without trace (1st) · freedom of movement (4th) · baleful polymorph (6th)",
          fullParas: [
            "Dareth'Shaellen was a young, tempestuous deity of the Court of Summer in Neielcireen, originally the goddess responsible for hunts in that world. When the Triad of the Cycle lost its founding members in the disaster, Dari'sha assumed the mantle of Darisine — the aspect of renewal, which in practical terms means the destruction of whatever is old, useless, or obsolete, so that the new can emerge. Without Darisine clearing space, Cirisine could never create.",
            "Renewal tends to be violent, because resistance to endings is almost universal. Cities are sacked, individuals assassinated, books burned, gods forgotten. But when the necessity of an ending is genuinely accepted, the process can be quiet — old Lords abdicating divine power and passing on, kingdoms abandoned to nature, rulers stepping down for their descendants. The violence is proportional to the resistance.",
            "Dari'sha is the best-known of the Fae Lords among non-elven races, though what they know of her is mostly wrong. She is blamed for the Wild Sea's swallowed cities, the winds of the Storm Throat, and earthquakes that consumed wide regions — not all of these were her work. During the Wars of Inheritance she moved with more force than any other Lord, not out of strategic calculation but because she found many human traditions genuinely obsolete.",
            "She demands that her followers be nomadic, sustain themselves on what they hunt, and live simply; her priests and paladins are rare, and she raises more druids and nature-aligned worshippers instead. Her followers divide broadly into two groups: isolated druids, hunters, and wanderers devoted to the discipline of the hunt itself, and a smaller number of paladins and assassins who watch for what has grown obsolete or harmful and remove it with the same dispassion a huntress brings to prey that has overstayed its season.",
            "Dari'sha is the least duty-bound of the Triad — a fact her sisters have stopped remarking on. Many of the renewals attributed to her happened because she simply wanted that particular thing as a quarry; she does not deny this and considers it irrelevant to the outcome. She is described as a powerfully built elf dressed in hides and furs, armed with a bow, eyes and hair red as blood, voice threatening, laugh enormous."
          ],
          edictsFull: [
            "Hunt regularly and never waste your kill.",
            "Remove what is obsolete or actively harmful.",
            "Live off what you earn through skill and effort.",
            "Embrace impermanence as the condition of renewal."
          ],
          anathemaFull: [
            "Preserve something past its purpose out of sentiment alone.",
            "Refuse a legitimate hunt when called upon.",
            "Hoard resources beyond immediate need.",
            "Prevent a natural ending when the time has genuinely come."
          ]
        },
        {
          name: "DALANTHERION", fullName: "DALANTHERION, the First to Create",
          headerLabel: "Fae Lords · The God of Duels",
          tagline: "the Shamed · the Inconstant",
          epithets: "The God of Duels · the Shamed · the Inconstant (also rendered Delantherion)",
          img: "art/dalantherion-1.webp", img2: "art/dalantherion-2.webp", hasArt: true,
          animal: "—", colors: ["#1a1a1a", "#c9a24b", "#c9c9d2"],
          symbol: "A silver sphere pierced by a black and gold blade.",
          p1: "The oldest of the Fae Lords, believed to predate Neielcireen itself — the first to create anything, specifically the idea from which all weapons descend. That single act of conception made him the God of Duels, and the last among his pantheon whose origins precede the Second World.",
          p2: "His passions are vast, his promises many, his oaths honored or ignored with no legible pattern. He led the Fae into the Wars of Inheritance and swore off weapons after his own creation brought catastrophe on his people — an oath he broke only when Charlagaron killed Nahalenia.",
          concerns: ["duels", "creation", "the Fae Courts", "protection", "passion"],
          edictsShort: ["Protect your people above all else.", "Honor the terms of any duel you enter.", "Acknowledge and take responsibility for your failures."],
          anathemaShort: ["Abandon those in your care to preserve yourself.", "Dishonor a sworn duel.", "Let shame prevent necessary action."],
          attr: "Strength or Charisma", font: "heal", sanct: "can choose holy",
          skill: "Athletics", weapon: "longsword",
          domains: "Confidence · Creation · Duty · Might", altDomains: "(alt. Freedom · Passion)",
          spells: "true strike (1st) · stoneskin (4th) · blade barrier (6th)",
          fullParas: [
            "Dalantherion is the oldest of the Fae Lords, believed to have existed before Neielcireen was made. He was the first to create anything — specifically, the idea from which all weapons descend. That single act of conception made him the God of Duels, because his creation was the first thing ever made to take a life. The elves hold that this also makes him the last among his pantheon whose origins precede the Second World.",
            "His passions are vast and his promises are many. He has loved numerous deities, sworn devotion to most of them, and followed through on those oaths with roughly the same consistency he applies to everything else. His offspring span courts and pantheons — among them, rarely acknowledged openly, are the three goddesses who became the Triad of the Cycle. Their mother was a deity of the old Neielcireen tradition, lost when the Second World fell; what became of her essence afterward is a question the Triad does not address.",
            "He led the effort to save the remnant of Neielcireen and place it safely in the void between worlds. He led the Fae into the Wars of Inheritance. He was also the source of one of the pantheon's great shames: his own creation led to catastrophe among his own people through the actions of those who wielded it. He swore never to take up a weapon again — a vow he kept until Charlagaron killed Nahalenia, at which point he broke it, picked up his idea, and wreaked vengeance before vanishing from the Ninth World by the force of draconic magic.",
            "His personality, on those occasions when history recorded his direct presence in the world, is boastful, bold, confident in his skill, and indifferent to the consequences of his words and actions. Underneath is something that does not quite map to human virtue but comes close: Dalantherion does not abide slavery, does not cause suffering for its own sake, and — though he holds that justice is settled by the sword — will hear a persuasive argument or a sincere plea.",
            "He is described as a tall elf with dark hair and emerald eyes, dressed in dawn colors, holding a black void from which all ideas and possible purposes emerge. His symbol is a silver sphere pierced by a black and gold blade."
          ],
          edictsFull: [
            "Protect your people above all other considerations.",
            "Honor the terms of any duel you enter.",
            "Defend those who cannot defend themselves.",
            "Acknowledge and take responsibility for your failures."
          ],
          anathemaFull: [
            "Abandon those in your care to preserve yourself.",
            "Dishonor a sworn duel.",
            "Allow slavery or subjugation to go unchallenged.",
            "Let shame prevent action that is necessary."
          ]
        },
        {
          name: "GALANIANI", fullName: "GALANIANI, the Reborn Sky",
          headerLabel: "Fae Lords · Lady of Eagles",
          tagline: "the Reborn · Lady of the Skies",
          epithets: "Lady of Eagles · the Reborn · Lady of the Skies",
          img: "art/galaniani-1.webp", img2: "art/galaniani-2.webp", hasArt: true,
          animal: "eagle", colors: ["#2f6fb0", "#ffffff", "#c9a24b"],
          symbol: "An eagle with wings spread against a blue field — or perched on a bladed spear.",
          p1: "In another existence Galaniani was Nahalenia, wife of Carnonnus and mistress of the elemental forces — the only deity outside Neielcireen to receive a Song. She was the only goddess to die during the Draconic Dominion, killed by Charlagaron, and waited in the Cycle until reborn in the Third Era as a mortal priestess.",
          p2: "Captured and tested by the Archlich's servants, she escaped, fought beside the Black Hawks, and ascended again — welcomed by Dalantherion to remain at his side at last. She commands winged creatures, open sky, storms, and lightning; her clergy hunts evil winged creatures and the surviving dragons within the World Shield.",
          concerns: ["the sky", "wind", "winged creatures", "rebirth", "elemental storms"],
          edictsShort: ["Protect winged and aerial creatures from harm.", "Keep the skies clear of arcane corruption.", "Embrace who you have become rather than grieve who you were."],
          anathemaShort: ["Bind or ground a winged creature against its will.", "Allow arcane pollution to spread unchecked.", "Surrender to grief over a past life's losses."],
          attr: "Strength or Wisdom", font: "heal", sanct: "can choose holy",
          skill: "Nature", weapon: "spear",
          domains: "Freedom · Healing · Lightning · Sky", altDomains: "(alt. Nature · Repose)",
          spells: "feather fall (1st) · aerial form (4th) · control weather (7th)",
          fullParas: [
            "Galaniani is the most recently returned of the Fae Lords, and her history is among the most unusual: she was not always Galaniani. In another existence she was Nahalenia — wife of Carnonnus, mistress of all the elemental forces governing creation, the only deity outside Neielcireen to receive a Song as Dalantherion's gift. She bore him two children: Thol Elsur, who inherited dominion over lightning, and Ryniah, who received from her the power over scorching winds.",
            "Nahalenia was the only goddess to die during the Draconic Dominion. Charlagaron killed her. Her existence passed into the Cycle, and she waited — the Cycle honoring the Song Dalantherion had given her — until her essence was reborn in the Third Era as a mortal elven priestess.",
            "As Galaniani, she was captured by servants of the Archlich, who repeatedly attempted to extract her divine essence. She survived those attempts, escaped, and allied with the Black Hawks, fighting alongside them through the final years of that era. She ascended to godhood again at that era's close and was received by Dalantherion and welcomed to remain at his side in the Ninth World — the thing they had never been allowed to do before.",
            "Galaniani lost much of her former power and most of her old servants during the period of her reincarnation. What she commands now is formidable in its own right: winged creatures of all kinds, the freedom of the open sky, the winds, and the elemental forces that originate in the heavens. Her clergy hunts evil winged creatures, works to purge arcane corruption from the upper atmosphere, and increasingly dedicates itself to finding and eliminating the surviving dragons trapped within the World Shield.",
            "She is described as a slender elf with pale hair and amber eyes, dressed in light and airy clothing adorned with feathers and furs — the only Lord depicted with wings. The eagle is her symbol and her sign among the elves; where an eagle appears, her presence is implied."
          ],
          edictsFull: [
            "Protect winged and aerial creatures from deliberate harm.",
            "Keep the skies clear of arcane corruption.",
            "Pursue justice for wrongs committed against the innocent.",
            "Embrace who you have become rather than grieve who you were."
          ],
          anathemaFull: [
            "Bind or permanently ground a winged creature against its will.",
            "Allow arcane pollution to spread in the sky when intervention is possible.",
            "Surrender to grief over a past life's losses."
          ]
        },
        {
          name: "AIEN'ELLEIR", fullName: "AIEN'ELLEIR, the Aegis of Ages",
          headerLabel: "Fae Lords · Hilesine, Judge of the Cycle",
          tagline: "Matron of Champions · Lady of Kartis · Goddess of the Dance",
          epithets: "Hilesine · Aiene · Matron of Champions · Lady of Kartis · Guardian of Traditions · Judge of the Cycle · Goddess of the Dance",
          hasArt: true,
          forms: [
            { label: "Hilesine · Judge of the Cycle", img: "art/aiene-judge-1.webp", img2: "art/aiene-judge-2.webp", worshippedBy: "Fae devout — clerics and paladins who guard sacred places, adjudicate disputes, and protect the Cycle from loss." },
            { label: "Goddess of the Dance", img: "art/aiene-dance-1.webp", img2: "art/aiene-dance-2.webp", worshippedBy: "Mostly non-elves — duelists, bards, and performers who preserve her memory as a matchless swordswoman." }
          ],
          animal: "crane", colors: ["#4c9c6f", "#7d7d85", "#ffffff"],
          symbol: "Vigilance — the full face of Kartis rising; or three wooden rings struck in a weapon-dance rhythm.",
          p1: "Once the chief champion of the Court of Summer, Aien'Elleir fought with a precision the elves described as a form of dance — the aspect that outlasted her combat career. That same precision saved the Court of Summer from extinction when every other Court around it fell.",
          p2: "She was the natural heir to Hilesine, judge and protector of the Cycle, and carries every existing Song inscribed somewhere on her skin. Her withdrawal of servants from the Wars of Inheritance ended the conflict quietly — some called it betrayal, she calls it correction.",
          concerns: ["justice", "martial arts", "dance", "tradition", "protection of the Cycle"],
          edictsShort: ["Uphold and preserve the elven Cycle.", "Act as an impartial arbiter when called.", "Protect any Song at risk of permanent loss."],
          anathemaShort: ["Allow a Song to be lost when you could intervene.", "Take sides in a dispute you're adjudicating.", "Abandon a sworn guardianship for benefit."],
          attr: "Dexterity or Wisdom", font: "heal", sanct: "can choose holy",
          skill: "Performance", weapon: "rapier",
          domains: "Confidence · Duty · Perfection · Vigil", altDomains: "(alt. Freedom · Truth)",
          spells: "true strike (1st) · haste (4th) · blade barrier (6th)",
          fullParas: [
            "Aien'Elleir was once the chief champion of the Court of Summer and a rival of Dalantherion in martial skill. Her fighting technique was so precise and fluid that the elves described it as a form of dance — a description that outlasted her combat career and gave her one of her most recognized aspects. That same precision saved the Court of Summer from complete extinction in Neielcireen when every other Court around them fell.",
            "She was the natural heir to the mantle of Hilesine — the judge and protector of the Cycle — having been prepared for it throughout her existence. When the old Court of Stars collapsed, she assumed the role without ceremony and named the other two goddesses of the New Triad to assist her. Every Song that exists is inscribed somewhere on her skin, a record she carries so she never forgets a single one.",
            "Her role in ending the Wars of Inheritance was decisive and ultimately quiet. She had watched the losses on both sides mount until she recognized that the mutual weakening of elves and humans served no one, and would leave both races exposed to real threats approaching from elsewhere. She withdrew her servants from the conflict; without her champions in the field, the elven position became untenable, and the retreat to their own territories followed. Some of her people regarded this as betrayal. She considered it a correction.",
            "Aien'Elleir is serious and disciplined. Her clergy reflects this: her clerics and paladins do not let their passions run as freely as most other elves, and dedicate their Songs to guarding sacred places, protecting other priests, adjudicating disputes where combat would be a poor resolution, and ensuring no Song in danger is lost through neglect.",
            "She is frequently depicted as a slender elf with white hair and white eyes, her bronzed skin covered in the inscriptions of every existing Song. In shrines that address her as Hilesine she is shown in green and grey armor armed with a sword; in those honoring the Goddess of the Dance, she wears golden and scarlet robes with wooden bracers. A separate group of worshippers, primarily non-elves, knows her only as the Goddess of the Dance — duelists, bards, and performers who preserve the memory of the light-footed deity said to match Dalantherion in single combat."
          ],
          edictsFull: [
            "Uphold and preserve the elven Cycle.",
            "Act as an impartial arbiter when called upon.",
            "Refine your martial practice to the level of art.",
            "Protect any Song that risks permanent loss through negligence."
          ],
          anathemaFull: [
            "Allow a Song to be permanently lost when intervention was within your means.",
            "Take personal sides in a dispute you are adjudicating.",
            "Abandon a sworn guardianship for personal benefit."
          ]
        },
        {
          name: "PHAERANNY", fullName: "PHAERANNY, the Last Star",
          headerLabel: "Fae Lords · Muse of the Damned",
          tagline: "Goddess of Second Chances · Lady of the Undead",
          epithets: "Muse of the Damned · Goddess of Second Chances · Goddess of Tragedies · Lady of the Undead · She Who Names Stars",
          hasArt: true,
          forms: [
            { label: "The Last Star · elven aspect", img: "art/phaeranny-stars-1.webp", img2: "art/phaeranny-stars-2.webp", worshippedBy: "Elves drawn to stellar magic and bardic tradition — patron of second chances, sad songs, and theatrical tragedy." },
            { label: "Lady of the Undead · Raverano aspect", img: "art/phaeranny-undead-1.webp", img2: "art/phaeranny-undead-2.webp", worshippedBy: "The Raveranos and all those touched by vampirism — her curse's inheritors, taught the secrets of blood." }
          ],
          animal: "moth", colors: ["#1a1a1a", "#c9c9d2", "#2f6fb0"],
          symbol: "Solitude — a metal star; elven form on a silver cord, Raverano form a black star crowned with thorns.",
          p1: "The youngest lord of the extinct Court of Stars, Phaeranny had foresight enough to warn the other Courts of Neielcireen's coming disaster. Her Court sacrificed itself to buy time for the others — destroying all but Phaeranny, who fell to Azoth and was imprisoned in a chrysalis of her own court's remains until Dalantherion freed her.",
          p2: "She created vampirism during the Wars of Inheritance as a weapon against human forces; Aldar hunted and imprisoned her for it a second time, releasing her only in the Third Era. She is worshipped now through three aspects: Goddess of Second Chances among elves, Goddess of Tragedies among the Raveranos, and Lady of the Undead among those touched by her curse.",
          concerns: ["the stars", "second chances", "tragedy", "the undead", "memory"],
          edictsShort: ["Honor those who fight on despite defeat.", "Preserve the memory of the dead.", "Resist Azoth and stellar aberrations."],
          anathemaShort: ["Surrender without resistance when resistance is possible.", "Erase a fallen individual's memory.", "Willingly serve a stellar aberration."],
          attr: "Intelligence or Charisma", font: "harm", sanct: "can choose unholy",
          skill: "Occultism", weapon: "starknife",
          domains: "Darkness · Repose · Soul · Undeath", altDomains: "(alt. Healing · Moon)",
          spells: "disrupting weapons (1st) · vampiric touch (4th) · eclipse burst (7th)",
          fullParas: [
            "Phaeranny was the youngest lord of the extinct Court of Stars in Neielcireen — young enough, at the time of her world's destruction, that her patronage over stellar knowledge and the naming of constellations had not yet had time to fully mature. What she did have was foresight. She saw the disaster coming and warned the other Courts. When it became clear that not everyone could be saved, the Court of Stars volunteered to sacrifice itself to buy time for the others.",
            "That sacrifice destroyed all of her Court except Phaeranny herself, who survived only to fall under the dominion of Azoth, the Star That Devours. She was imprisoned in a chrysalis made from the remains of her own court's members — forced to see their faces, hear them, and endure it — until Dalantherion freed her.",
            "She created vampirism during the Wars of Inheritance as a weapon against human forces, corrupting some of them into servants and granting the survivors a form of immortality tied to her power over the space between stars. Aldar hunted her for this and imprisoned her a second time. She was not released until the Third Era, when she rejoined the surviving Fae Lords and took a permanent place in the Winter Court.",
            "She is worshipped now through three distinct aspects. Among elves, she is the Goddess of Second Chances — patron of those who return from the edge of failure, of sad songs and theatrical tragedy, and of great vengeances. Among the Raveranos, she is the Goddess of Tragedies — a severe but fair mother who demands her children fight for their cause and remain vigilant. Among those affected by vampirism, she is the Lady of the Undead, teaching those who carry her curse the secrets of blood and of living on the threshold between life and death.",
            "Her personality is capricious and demanding. She requires devotion, hates solitude and being overlooked, is intensely jealous of her priests and paladins, and will not permit them to offer prayers to any other deity. Among the Fae Lords she appears as an adolescent elf with pale hair and blue-tinted skin, eyes that reflect constellations, dressed in dark sky. Among the Raveranos she takes a more adult form — pale, black-haired, black-eyed, wearing an exoskeleton of the same metal as stars."
          ],
          edictsFull: [
            "Honor those who fight on despite defeat or loss.",
            "Preserve the memory and record of the dead.",
            "Resist and oppose Azoth and all servants of the aberrant stellar powers.",
            "Chart and name the stars."
          ],
          anathemaFull: [
            "Surrender without resistance to destruction when resistance is possible.",
            "Erase or allow the erasure of a fallen individual's memory or record.",
            "Willingly serve a stellar aberration."
          ]
        },
        {
          name: "TARUNE", fullName: "TARUNE, the Speaker of Traditions",
          headerLabel: "Fae Lords · Goddess of Magic",
          tagline: "Lady of Knowledge · the All-Knowing · the Sad Muse",
          epithets: "Goddess of Magic · Lady of Knowledge · the All-Knowing · the Wise · the Ancestral · the Sad Muse",
          img: "art/tarune-1.webp", img2: "art/tarune-2.webp", hasArt: true,
          animal: "owl", colors: ["#4a2e8a", "#6a4fc4", "#1a1a1a"],
          symbol: "The Garyun — a cube with an eye on each of its six faces.",
          p1: "One of the oldest Fae Lords, present since the first day of the Second World but never its creator — only she and Dalantherion persist from the original pantheon. As every other Lord completed or lost their Song, Tarune erased them from history and absorbed what remained of their traditions.",
          p2: "Her one great romance, with Thol Elsur, produced the Sidhe; what drove them apart was his transformation of the Elsurians into a legion of conquest, which Tarune found unforgivable. She kept elven magic alive against gods who tried to restrict it, arguing the Scyvoss predated their authority — and won.",
          concerns: ["magic", "knowledge", "tradition", "history", "the Scyvoss"],
          edictsShort: ["Record and preserve knowledge and tradition.", "Teach any sincere student without refusal.", "Never falsify or destroy a historical record."],
          anathemaShort: ["Destroy knowledge or records of any kind.", "Refuse a sincere and qualified student.", "Allow elven tradition to die when preservable."],
          attr: "Intelligence or Wisdom", font: "heal", sanct: "can choose holy or unholy",
          skill: "Arcana", weapon: "staff",
          domains: "Knowledge · Magic · Time · Truth", altDomains: "(alt. Creation · Vigil)",
          spells: "magic missile (1st) · suggestion (4th) · warp mind (7th)",
          fullParas: [
            "Tarune is one of the oldest of the Fae Lords. She did not participate in the creation of Neielcireen; she was simply present to record the first day of the Second World. The distinction matters to her. She was the Lady of the now-extinct Court of Night, and her function has always been the same: to keep the record. As Lords completed their Songs, she erased them from history. As Courts fell, she absorbed what remained of their traditions. Only she and Dalantherion persist from the original pantheon.",
            "The epithet 'the Sad Muse' names this condition precisely — she has been removing her peers from existence for the entirety of her life, and she does not know when it will be her turn. The only significant romantic attachment recorded in her history was with Thol Elsur — an unlikely pairing. The Sidhe were born from it; most followed their father into war and perished in the Fratricide.",
            "What drove the two apart was not the romance itself but what Thol Elsur did with the Elsurians in the generations that followed — a people whose native excellence was magical and scholarly, whom he reshaped into an instrument of conquest. Tarune found this transformation unforgivable, and they became bitter rivals. The few Sidhe who stayed with her helped develop and formalize the Scyvoss, which they then transmitted to the other Courts.",
            "She kept elven magic alive when other gods attempted to restrict it after the transition to the Ninth World — her argument was simple: the Scyvoss predated those gods' authority over this world. It held. Her followers are quiet; her clerics and mages dedicate their earliest incarnations to physical tasks before venturing out of Cyratis's libraries after several lifetimes of preparation.",
            "She appears as a young elf despite her age — purple hair, jet-black eyes, always in robes and cloaks of deep blue. Her symbol, the Garyun, is a cube with an eye on each of its six faces."
          ],
          edictsFull: [
            "Record and preserve knowledge and elven tradition in all forms.",
            "Teach any sincere student without refusal.",
            "Refine the Scyvoss and share its advances with those qualified to use them.",
            "Never falsify or destroy a historical record."
          ],
          anathemaFull: [
            "Destroy knowledge or records of any kind.",
            "Refuse to share knowledge with a sincere and qualified student.",
            "Allow elven tradition to die when its preservation was possible."
          ]
        },
        {
          name: "RYNIAH", fullName: "RYNIAH, the First to Love",
          headerLabel: "Fae Lords · Goddess of Love",
          tagline: "the First Flame · Muse of Nomads · Lady of the Desert Gale",
          epithets: "Goddess of Love · the First Flame · Muse of Nomads · Goddess of the Hot Winds · Lady of the Desert Gale · the Enchantress · Shyara",
          img: "art/ryniah-1.webp", img2: "art/ryniah-2.webp", hasArt: true,
          animal: "dove", colors: ["#c9962a", "#9c2f26", "#c9a24b"],
          symbol: "The Sirr — an inverted-blade scimitar carved beneath a rosebud or a flame.",
          p1: "Second child of Dalantherion and Nahalenia, Ryniah moved toward affection, curiosity, and wandering where her brother Thol Elsur moved toward dominance and war. She did not invent love, but was the first to give it enough weight to generate Songs.",
          p2: "Absent during Neielcireen's fall, she returned only after the Fae Lands were bound to the Ninth World, found the Wars of Inheritance pointless, and persuaded enough Lords to leave the field that the rest recognized the waste and stopped. Among humans she is misremembered as Shyara, an abyssal seducer.",
          concerns: ["wind", "passion", "fire", "freedom"],
          edictsShort: ["Preserve life and do not take it.", "Keep moving; do not bind yourself to one place.", "Commit fully to your passions and desires."],
          anathemaShort: ["Kill a sentient living creature.", "Abstain from pursuing your genuine desires.", "Desecrate a loving relationship or beauty."],
          attr: "Charisma or Wisdom", font: "heal", sanct: "can choose holy",
          skill: "Performance", weapon: "Sirr (inverted scimitar)",
          domains: "Fire · Freedom · Passion · Travel", altDomains: "(alt. Indulgence · Healing)",
          spells: "fleet step (1st) · fire shield (4th) · fiery body (7th)",
          fullParas: [
            "Ryniah is the second child of Dalantherion and Nahalenia. Where her brother Thol Elsur moved toward dominance and war, Ryniah moved toward affection, curiosity, and wandering. She did not invent love — it existed among the elves before her birth — but she was the first to give it enough importance to generate Songs, the first to tell the elves that pursuing what brings them pleasure is a legitimate reason to live and to return.",
            "She was absent during the destruction of Neielcireen, wandering other existences, and returned only after the Fae Lands were already bound to the Ninth World, at the beginning of the Wars of Inheritance. She found the conflict pointless and said so, then spent her effort persuading other Lords to leave the field rather than win it — arguing that without the most committed belligerents, the remaining combatants would eventually recognize the waste and stop. They did.",
            "Among humans she is known as Shyara and remembered as an abyssal figure who leads men and women toward depravity — a description that reflects human anxiety more than her actual behavior. She moved through human military encampments during the Wars of Inheritance, redirecting soldiers toward other purposes with remarkable effectiveness.",
            "She belongs to the Court of Summer and returns to the Ninth World periodically, when her compulsion to wander settles. Her clergy consists primarily of women, though she accepts followers regardless of sex or species. They travel constantly, work to restore grace and warmth to an elven culture hardened by centuries of survival, tend to relationships in trouble, and cultivate expressions of beauty wherever they can find them.",
            "Her avatar takes the form of a dark-haired elf with crimson eyes and bronzed skin, reported appearing without warning among nomadic camps and desert expeditions."
          ],
          edictsFull: [
            "Preserve life and do not take it.",
            "Keep moving and do not bind yourself permanently to a single place.",
            "Commit fully to your passions, ambitions, and the moments before you.",
            "Protect artistic expression, beauty, and those who love."
          ],
          anathemaFull: [
            "Kill a sentient living creature.",
            "Constrain yourself or abstain from pursuing your genuine desires.",
            "Participate in the desecration or severing of a loving relationship or an expression of beauty."
          ]
        },
        {
          name: "THOL ELSUR", fullName: "THOL ELSUR, the Lord of Storms",
          headerLabel: "Fae Lords · God of Storms",
          tagline: "Lord of War · Bearer of Nayla · the Tyrant",
          epithets: "God of Storms · Lord of War · Bearer of Nayla · the Firstborn · the Tyrant",
          img: "art/tholelsur-1.webp", img2: "art/tholelsur-2.webp", hasArt: true,
          animal: "—", colors: ["#9c2f26", "#1a1a1a"],
          symbol: "Dominion — a chain of three links of red lightning, binding two closed fists.",
          p1: "Eldest child of Dalantherion and Nahalenia, born hostile to the intricate society of the Courts. He became a relentless explorer and warrior, forging Nayla, the First Lightning, and shaping storms from it — the first Fae Lord to devote his existence entirely to combat and triumph.",
          p2: "He built the First City on the forced labor of human captives, ruled it until a mutiny from within his own household brought it down, and has remained over its ruins ever since — a god without a temple, sustained now less by organized faith than by the storms themselves.",
          concerns: ["storms", "order", "cities", "war"],
          edictsShort: ["Understand your place and fulfill its duties.", "Pursue order as the foundation of progress.", "Treat power as a tool, not an end."],
          anathemaShort: ["Tolerate unjustified insubordination without response.", "Act in cowardice or let servants take your blame.", "Uphold a hierarchy built on false authority."],
          attr: "Strength or Charisma", font: "harm", sanct: "can choose unholy",
          skill: "Intimidation", weapon: "bastard sword",
          domains: "Cities · Duty · Lightning · Might", altDomains: "(alt. Destruction · Confidence)",
          spells: "thunderstrike (1st) · lightning bolt (4th) · dominate (6th)",
          fullParas: [
            "Thol Elsur is the eldest child of Dalantherion and Nahalenia and the most infamous of the Fae Lords. He was born with a temperament incapable of appreciating the intricate and subtle society of the Courts — hostile, arrogant, proud, and intolerant of mediocrity. Rather than navigate Court politics, he became a relentless explorer and warrior, leading a small legion of Winter Court fighters on invasions that crossed worlds, dimensions, and eras, making himself the first Fae Lord to devote his existence entirely to combat and triumph.",
            "He created Nayla, the First Lightning — the primordial weapon of the elven pantheon — and from it shaped the storms. When Neielcireen fell, he found a safe position in the void where the Second World could wait. When the Wars of Inheritance erupted, his legion was first in the field. When the elves needed a home in the Ninth World, he provided one: the First City, built on the forced labor of human captives he considered beneath consideration.",
            "The First City fell to a mutiny from within his own household. He refused to leave, and has remained over its ruins ever since — a god without a temple, returned briefly to relevance in the Third Era when an old legionary restored his power, only to fade again with that dynasty's extinction.",
            "He is worshipped most intensely where force, order, and hierarchy are treated as sacred. The Elsurians, who claimed descent from him, constituted the core of his active clergy for as long as they existed; when the Genocide destroyed that house entirely, his clergy was reduced to a remnant within the Battle Choir. Beyond them, his worship is sustained not by organized faith but by the storms themselves.",
            "He is described as a tall man with black hair and beard, his skin and eyes pale as bone, dressed in black armor and a scarlet cape, his voice carrying like thunder. In his hands rests Nayla, the First Lightning."
          ],
          edictsFull: [
            "Understand your place in the hierarchy and fulfill its duties.",
            "Pursue order as the foundation of all meaningful progress.",
            "Treat magic, strength, and cunning as tools in service of a defined purpose, not ends in themselves."
          ],
          anathemaFull: [
            "Tolerate direct and unjustified insubordination without response.",
            "Act in cowardice or allow your servants to be punished for your failure.",
            "Obey or uphold a hierarchy built on false or corrupt authority."
          ]
        }
      ]
    },
    {
      id: "avatars",
      name: "The Avatars of Vice",
      type: "Minor Pantheon",
      accent: "#c23b32", accentDeep: "#97271f",
      tagline: "Seven Thrones of pride, envy, tyranny, lust, gluttony, and avarice.",
      blurb: "The exaltation of the vile and the excessive. Six occupied Thrones — Absalom, Airalech, Berith, Naphime, Natas, Vadertrax — and the vacant Throne of Ire, once held by Gideel.",
      lore: {
        origin: [
          "The Avatars predate the Ninth World. They emerged from Athara and fled it when the True Tongue, given without restriction to that world's mortals, destroyed the world from within. Seven divine entities survived and relocated to the First World — a hollow world, inhabited underground by the Ardhûm. Their settlement transformed it: embedding their divine realms in the First World's structure converted it into Hawia, and its internal geography became the Abyss. The displacement of Ardhûm civilization to the surface of the Ninth World followed as the buried tunnels of their homeland collapsed into or were occupied by Abyssal expansion.",
          "The Avatars were not among the deities who shaped the Ninth World at its formation — they arrived as claimants rather than architects. Their relationship to the Ninth World is territorial, but they were not involved in the world's construction. Among the Avatars' devout, this timeline is irrelevant to their standing: the Aspects predate the Ninth World and its major pantheons, and seniority over a world's origins does not determine priority over the forces that created it.",
          "The corruption of Uurdas — the divine dimension housing the Terrestrial Pantheon — was accomplished partly through Absalom's direction, using the entity then known as Aenslaug. That intervention is the only confirmed instance of active Abyssal involvement in Ninth World divine politics before the 4th Era."
        ],
        sects: [
          {
            name: "The Pact-Makers", subtitle: "The only structure spanning all seven Avatar cults",
            paragraphs: [
              "Formally the Order of the Pact-Makers, structured as a deliberate inversion of the chivalric orders maintained by the major pantheons — particularly those under Antarian sponsorship. A Pact-Maker is a Champion of one of the Aspects sworn to the Tradition of Pacts and bound to attend Infernal Conclaves when called.",
              "A Pact, once sworn, is absolute: the Pact-Maker must fulfill it regardless of personal cost or conflict with their patron Avatar's standard prohibitions. Acting against an Avatar's Anathemas while bound to a Pact is permitted under the Tradition — the sworn word is one of the highest values across all seven cults. Infernal Conclaves suspend the Masquerades — the covert factional competition between rival Avatar congregations — when a short-term objective requires cross-cult cooperation; violating a Conclave truce costs standing across all seven cults.",
              "The Order runs from the individual Pact-Maker through their Company, to the Chapter — a territorial cell governed by a Master sworn to a specific Avatar. Each cult maintains a Grand Master presiding over inter-Chapter disputes. Each Avatar imposes its own obligations: Absalom's Pact-Makers may never abandon a mission and must maintain total discretion about their devotion; Airalech's must keep absolute secrecy and may not refuse personal gain; Berith's must reinforce authority through punishment of insubordination; Naphime's must maintain elegance and pursue pleasure; Natas's must reinforce martial ambition and offer pyre sacrifices; Vadertrax's must attempt to renegotiate every Pact's terms at least once."
            ],
            symbol: "A seven-pointed star formed by seven interlocking swords.", colors: "—",
            benefits: "Permission to act against one's own Anathemas while bound by a sworn Pact; right to call and attend Infernal Conclaves; sanctuary and operational resources from affiliated Chapters; informants and allies through one's Company. Membership is restricted to those devoted to one of the seven Avatars.",
            edicts: ["Honor every sworn Pact until its objective is fulfilled, regardless of cost or changed circumstance", "Answer every legitimate call to an Infernal Conclave within your region", "Follow the specific obligations imposed by your patron Avatar"],
            anathema: ["Abandon or deliberately fail a sworn Pact before its objective is achieved", "Violate an Infernal Conclave's formal suspension of hostilities against a fellow Pact-Maker", "Expose the identity or operational details of a fellow Pact-Maker to parties outside the Avatar cults"]
          }
        ],
        beliefs: [
          { title: "The Aspects & the Vacant Throne", paragraphs: [
            "Seven Aspects — called Thrones among the devout — constitute the foundational theology of the Avatars: eternal principles the Avatars embody rather than the Avatars themselves. A Throne can be vacant, diminished, transferred, or contested, but never eliminated; when an Avatar's person is destroyed, the Throne persists, reduced, until a new vessel asserts itself. The formal names — Envy, Ire, Gluttony, Lust, Pride, Sloth, Greed — originate outside the tradition, imposed by the major pantheons to frame Abyssal influence as moral failure; Avatar theology accepts the labels without accepting the framing.",
            "Currently six of the seven Thrones are occupied; the Throne of Ire is vacant since the Avatar Gideel's disappearance. Souls marked by Ire now pass through the Soul Mire without divine reception — and the Witch of the Abyss has begun drawing those souls toward herself, read by the other Avatars as an entry into the succession Masquerade. Known contestants for the Throne include Atreos, a Yomi warlord; Hayakume, the Yomi Emperor; and the witches of the Grand Winter Circle — producing the broadest Masquerade in recorded Avatar history."
          ]},
          { title: "The Fall of Degaroth", paragraphs: [
            "Degaroth was Berith's principal creation and the seat of Avatar organized power — a city connecting most Avatar realms and the primary access point between Hawia and the Yomi Empire. The pact between the Archlich and Shargantrax, the then-Avatar of Avarice, drew Elsurian forces into Hawia; a massive portal opened below the Eye of Benu, and the invasion consumed Degaroth in a field of ash that has never cleared.",
            "The immediate consequences were a general weakening of every Avatar's organized presence, the acceleration of Masquerade conflicts Degaroth had previously contained, and the emergence of two new forces: the Witch of the Abyss and the Soul Mire's more diffuse, less predictable behavior."
          ]},
          { title: "Berith's Vengeance", paragraphs: [
            "Before Degaroth's fall, Berith governed as a contemplative patron of leisure, hedonism, and scientific inquiry. That mode did not survive the loss of her creation. After roughly a century of withdrawal, she re-emerged as a deity of tyranny, demanding her followers build systems of coercive control rather than simply benefit from them.",
            "She also deployed Berith's Vengeance — a curse accelerating entropy in artificial mechanisms. Metal warps, glass fractures, structural components fail at rates with no natural explanation; the more complex the mechanism, the faster its deterioration. Regions dependent on engineering — Aurora, Belmonte, the Wolf's League — are most exposed."
          ]},
          { title: "The Soul Mire & the Witch of the Abyss", paragraphs: [
            "The Soul Mire is the metaphysical substrate permeating Hawia, materializing as a dark, star-flecked liquid mass. It allows destroyed Abyssals to reconstitute and receives the souls of those who die with a Vice sufficiently developed to qualify for entry into Hawia — arriving souls are placed at the beginning of Abyssal social hierarchies. Natas, Naphime, and Absalom draw its densest physical manifestations.",
            "The Witch of the Abyss emerged at the exact moment of Degaroth's destruction — not an Avatar, not from any documented Abyssal tradition. She presents as an expanding entropic force, ash fields draining energy from everything within reach, including the Soul Mire itself, with will sufficient to convert lesser Abyssals into functional agents. The Avatars treat her as a first-order threat — the only force producing anything approaching coordinated inter-Avatar concern."
          ]},
          { title: "The Masquerades", paragraphs: [
            "When more than one Avatar cult operates in the same territory and the population cannot support more than one active congregation, the competing cults resolve the conflict through a Masquerade — a structured contest of intrigue and covert pressure. Rules prohibit direct attack against rivals, exposure of any participant's identity, and involvement of outside forces; violations diminish the weight of any victory.",
            "Masquerades are simultaneously the tradition's greatest internal weakness and the mechanism preventing factional conflicts from eliminating the cults entirely — and the primary path of social advancement within the Avatar hierarchy. The most prestigious Masquerades involve converting or detaching devout of other major pantheons from their faith."
          ]},
          { title: "Thar-Ghavel, the Hunger That Endures", paragraphs: [
            "Among the Devils who served Vadertrax, Thar-Ghavel governed absence rather than excess — the moment when need eclipsed all other considerations and survival became the only currency. His agreements yielded no loyal servants, only survivors; the other Devils named him the Quiet Victor because he claimed no thrones and outlasted everything regardless.",
            "When Vadertrax's fall and the Degaroth collapse undid most of the infrastructure Shargantrax had built, Thar-Ghavel persisted — his essence believed to seek the nearest vessel of sufficient need when destroyed, hollowing it until a new form stabilizes. He is silent now; no active Masquerade carries his banner."
          ]}
        ],
        relations: [
          { name: "Pantheon of Antares", stance: "Hostile", quote: "\"Their posture of moral elevation is a frail facade over a faith designed to arrest the will.\" — Teachings of Absalom", paragraphs: [
            "The structural conflict operates at several levels: Antarian orders maintain active suppression campaigns against Avatar congregations; the conversion pathway into Absalom's cult runs specifically through disillusioned Antarians; the Pact-Makers function as a deliberate structural inversion of Antarian chivalric institutions.",
            "Avatar theology treats the Antarian faith as a preliminary framework that partially addresses the nature of desire and then arrives at the wrong conclusion about what to do with it. Converts are received without requiring abandonment of their origin faith's cosmology — inter-sect hostilities rarely generate direct violence, conducted instead through Masquerades, infiltration, and conversion."
          ]},
          { name: "Fae Lords", stance: "Indifferent", quote: "\"Entirely fugitive and slippery... entirely unpredictable and impermanent.\" — Avatar Clergy", paragraphs: [
            "Circumstantial and site-specific. Where both traditions operate in the margins of human civilization, temporary alliances of convenience are documented and conversion has occurred in both directions. The Fall of Degaroth introduced tension: the House of Elsur's documented involvement in the invasion has not become neutral history among Berith's devout.",
            "The Pact-Makers and the Battle Choir maintain professional mutual respect without warmth. The Witch of the Abyss and the Soul Mire are the elements of Avatar theology Fae scholars find genuinely interesting, connecting to unresolved questions about Hawia's relationship to the Cycle."
          ]},
          { name: "Pantheon of Tebas", stance: "Hostile", quote: "\"The Tebans mirror back the hypocritical conflict that lives in their own souls.\" — Sermons of Airalech", paragraphs: [
            "Not symmetrical: the Tebans pursue active suppression wherever they have reach, while the Avatar cults respond through infiltration and guerrilla interference rather than open confrontation. Masquerades targeting Teban institutions carry exceptional status value within Avatar hierarchy.",
            "Specific tensions are documented between Naphime and Ateph, Natas and Atunnis, and Absalom and Benu. Avatar theology does not deny the genuine divinity of Teban gods — some converts construct syncretic frameworks — but the institutional relationship remains antagonistic."
          ]},
          { name: "Terrestrial Pantheon", stance: "Hostile", quote: "\"For someone who calls Pride a failure, they are quick to insist on the importance of their own role.\" — Sermons of Absalom", paragraphs: [
            "Comparably serious to the Teban conflict but through a different mechanism: the Terrestrial tradition is deeply embedded in the Ardhûm, whose formal enmity toward the Avatar cults predates doctrine — the Avatars' occupation of the First World displaced Ardhûm civilization to the Ninth World's surface, a foundational betrayal Ardhûm tradition names explicitly.",
            "In regions where the Terrestrial faith is organized, Avatar cult presence is functionally impossible to maintain above a minimal footprint."
          ]},
          { name: "Pantheon of the Patrons", stance: "Indifferent", quote: "", paragraphs: [
            "Geographic distance and mutual insularity produce minimal documented contact. The Pact-Makers carry a reputation within the Sunless Dale exceeding their actual presence there. The Iconoclasts are noted by Avatar scholars as potentially useful for creating the doctrinal gaps Avatar recruitment can fill."
          ]},
          { name: "Terminus Court", stance: "Hostile", quote: "", paragraphs: [
            "Existential rather than territorial: the God of the End represents the specific limit Avatar theology spends most of its effort circumventing — the certainty of ending, which the Soul Mire model of afterlife is designed to convert into continuation. The Avatar cults respond with evasion rather than confrontation, treating Tribunal attention as the primary operational risk in any territory.",
            "Elricon is acknowledged with a degree of respect absent from the Avatars' assessment of most other outside deities — his authority is treated as a structural feature of reality rather than a competing doctrine, making him simultaneously the tradition's most recognized non-Avatar divine figure and its most consistent external threat."
          ]}
        ]
      },
      deities: [
        {
          name: "ABSALOM", fullName: "ABSALOM, the Uncontested",
          headerLabel: "Avatars of Vice · Throne of Pride",
          tagline: "the Incontestable · the First to Be · the Unceasing Suzerain",
          epithets: "the Incontestable · the First to Be · the Unceasing Suzerain",
          img: "art/absalom-1.webp", img2: "art/absalom-2.webp", hasArt: true,
          animal: "peacock", colors: ["#2f6fb0", "#4c9c6f", "#1a1a1a"],
          symbol: "The Imponence — a black sun with seventeen feather-shaped rays.",
          p1: "Absalom accepts only three titles and considers any that celebrate past deeds an impertinence — his primacy is expressed through his present condition, not historical accumulation. He is the oldest Avatar in Hawia, acknowledged superior among the seven, and the axis around which Abyssal hierarchy is organized.",
          p2: "His cult inverts the standard model of divine recruitment: he does not proselytize. Those who reach his congregation do so by first committing fully to another Avatar, then hearing something Absalom's call names that their former patron could not.",
          concerns: ["pride", "supremacy", "excellence", "the cultivation of personal power"],
          edictsShort: ["Pursue and demonstrate excellence in every field.", "Identify genuine potential before it stagnates.", "Maintain discretion moving among other congregations."],
          anathemaShort: ["Accept titles for past achievements as present value.", "Treat another's accomplishment as equal to Absalom's.", "Let self-satisfaction arrest your development."],
          attr: "Strength or Intelligence", font: "harm", sanct: "can choose unholy",
          skill: "Intimidation", weapon: "morningstar",
          domains: "Ambition · Confidence · Might · Perfection", altDomains: "(alt. Tyranny · Vigil)",
          spells: "fear (1st) · suggestion (4th) · dominate (7th)",
          fullParas: [
            "Absalom accepts three titles — the Incontestable, the First to Be, and the Unceasing Suzerain — and considers titles that celebrate past deeds an impertinence. His primacy is expressed through his present condition, not through historical accumulation, and his devout maintain this understanding even when recounting the events that established it. He is the oldest of the Avatars in Hawia, the recognized superior among the seven, and the axis around which Abyssal social hierarchy is organized. In Hawia he is not merely worshipped — he is acknowledged by the other Avatars, who simultaneously covet his position and recognize that they cannot yet take it.",
            "His cult inverts the standard model of divine recruitment. Absalom does not proselytize; his priests do not seek the uninitiated. Those who reach his congregation do so by first committing fully to another Avatar, developing that devotion to its fullest expression, and then hearing something Absalom's call names that their former patron could not. The transition is recognized by Absalom only when the aspirant's authenticity is evident, and his clergy maintain membership in their original congregation throughout — both to preserve their connection to a past they must not regress toward and to identify the next individual who might be approaching readiness.",
            "His mortal following is small and functionally elite: nobles and political figures whose rise has been meteoric despite documented vice; scholars and mages whose achievement has outrun their original patron's framework; master craftspeople and artists whose work has begun to exceed its category. The common denominator is demonstrated excellence exercised in the presence of acknowledged desire.",
            "Absalom manifests as a figure of dark consistency — multiple vast black wings reaching impossible spans — and declines iconographic representation, treating sculpture and painting as incapable of rendering his presence accurately. One symbolic form is permitted: a black sun with seventeen feather-shaped rays, called the Imponence, which his devout use as a ritual focus. Peacocks are associated with his cult; his devout wear blue, green, and black, and carry the morningstar as their favored weapon."
          ],
          edictsFull: [
            "Pursue and demonstrate excellence in every field you occupy; accept no external moral category as a constraint on your development.",
            "Identify those of genuine potential among other Avatar congregations before they stagnate.",
            "Maintain total discretion about your devotion to Absalom when moving among other congregations."
          ],
          anathemaFull: [
            "Accept titles or recognition for past achievements as if they define your present value.",
            "Acknowledge any living being's accomplishment as equivalent to Absalom's own.",
            "Allow self-satisfaction to arrest your development."
          ]
        },
        {
          name: "AIRALECH", fullName: "AIRALECH, the Hidden",
          headerLabel: "Avatars of Vice · Throne of Envy",
          tagline: "the Muse",
          epithets: "the Muse",
          img: "art/airalech-1.webp", img2: "art/airalech-2.webp", hasArt: true,
          animal: "owl", colors: ["#5a2e8a", "#c9a24b"],
          symbol: "The Presence — an amethyst owl perched inside a golden ring.",
          p1: "Airalech occupies near-total invisibility for those who have not encountered her theology — but her effective reach may exceed any of the major Avatars, because her domain is the mechanism of desire underlying nearly all competition between living beings.",
          p2: "She embodies covetousness and the envy that arises from perceiving what another holds. A spectator by disposition, she tracks the shape of rivalry and betrayal, favoring impersonators, forgers, and thieves with small interventions: a door unlocked, a witness looking elsewhere.",
          concerns: ["envy", "covetousness", "rivalry", "deception", "hidden observation"],
          edictsShort: ["Observe rivalry and desire with care.", "Move without disclosure where affiliation compromises you.", "Protect those who sustain themselves through deception."],
          anathemaShort: ["Confess your covetousness without tactical purpose.", "Declare your patron without strategic reason.", "Warn a target except as part of a larger manipulation."],
          attr: "Dexterity or Intelligence", font: "harm", sanct: "can choose unholy",
          skill: "Deception", weapon: "sabre",
          domains: "Ambition · Fate · Secrecy · Confidence", altDomains: "(alt. Darkness · Luck)",
          spells: "illusory disguise (1st) · clairvoyance (4th) · true seeing (7th)",
          fullParas: [
            "Airalech occupies a condition of near-total invisibility for those who have not encountered her theology. Those who have cannot return to the prior state: the scope of her influence becomes legible and remains legible. She is among the four lesser Aspects, but her effective reach may exceed any of them, because her domain is the mechanism of desire that underlies virtually all competition between living beings.",
            "She embodies covetousness — the desire for what another holds — and the envy that arises from perceiving it. She is a spectator by disposition, interested in the structure of conflict itself rather than its outcomes. Her attention tracks the act of contestation, the shape of betrayal, the dynamics of rivalry; who wins registers only insofar as it opens the next situation for observation. She carries a particular affection for those whose living is made through impersonation, forgery, fraud, and theft — these she favors with small interventions: a door unlocked, a witness looking elsewhere.",
            "Her following consists primarily of those who have accepted the evidence of her pervasiveness and treat it as a usable truth. Envy is widespread but rarely confessed; her devout must acknowledge that the desire to possess what another holds is a mechanism, not a degradation, and that operating from it covertly is what her cult teaches.",
            "She appears as a slight figure with brown hair and purple eyes. Her devout call her the Muse. Her laughter — quiet and precise — surfaces in environments charged with competitive intent: court assemblies, tournament floors, theatrical performances, high-stakes negotiations. The owl is sacred to her; a sighting is treated as augury, and she communicates through owls rarely, for reasons that become clear only after the fact."
          ],
          edictsFull: [
            "Observe the workings of rivalry, covetousness, and competitive desire with care; intervene only as much as the situation requires.",
            "Move without disclosure in contexts where your affiliations would compromise your position.",
            "Protect and favor those who sustain themselves through deception, impersonation, and covert appropriation."
          ],
          anathemaFull: [
            "Confess or expose your covetousness openly without tactical purpose.",
            "Declare your patron or your desires without strategic reason.",
            "Warn a target of a scheme against them except as part of a larger manipulation."
          ]
        },
        {
          name: "BERITH", fullName: "BERITH, the Tyrant",
          headerLabel: "Avatars of Vice · Throne of Sloth",
          tagline: "She Who Brings Chains · the Iron Sovereign · Ono'Shakkura",
          epithets: "She Who Brings Chains · the Iron Sovereign · Lady of the Inert Gardens · the Immutable Despot · Ono'Shakkura · Tyrant of the Pack",
          img: "art/berith-1.webp", img2: "art/berith-2.webp", hasArt: true,
          animal: "lion", colors: ["#a85a1e", "#1a1a1a", "#ffffff"],
          symbol: "The Inert Tyrant — a rust-colored lion with a black mane and eyes; white chains as secondary symbol.",
          p1: "Avatar of Sloth, but her operational range exceeds that classification — she rivals Airalech's cunning, matches Natas's appetite, contests Naphime's manipulation, and commands enough force to hold Absalom's recognition. Degaroth and the Yomi Empire were built on her model: enslaved labor beneath her devout's authority.",
          p2: "Before Degaroth's fall she governed differently — a contemplative patron of leisure, hedonism, and scientific progress. Its destruction ended that mode; after a century's withdrawal she returned tyrannical in method, still invested in knowledge but now demanding it be deployed toward control.",
          concerns: ["tyranny", "slavery", "scientific progress", "enforced order"],
          edictsShort: ["Build systems of authority over the incapable.", "Pursue knowledge for application, not accumulation.", "Enforce competence and loyalty without delay."],
          anathemaShort: ["Relinquish established authority voluntarily.", "Allow meaningful knowledge to be destroyed.", "Protect an insurrection against a legitimate hierarchy."],
          attr: "Strength or Intelligence", font: "harm", sanct: "can choose unholy",
          skill: "Intimidation", weapon: "crossbow",
          domains: "Cities · Knowledge · Might · Tyranny", altDomains: "(alt. Creation · Protection)",
          spells: "command (1st) · stoneskin (4th) · dominate (6th)",
          fullParas: [
            "Berith is the Avatar of Sloth and among the four lesser Aspects, but her operational range exceeds what that classification suggests. Her domains overlap those of every other Avatar at some point: she rivals Airalech's cunning, matches Natas's appetite for expansion, contests Naphime's influence in manipulation, and commands sufficient force to hold Absalom's recognition. This breadth has made her the most demographically inclusive of the Avatars, drawing from a wider range of peoples and races than any other, including Fae and Ardhûm at the margins.",
            "Her historical legacy is architectural. Degaroth was hers. The Yomi Empire — which the Shen have resisted across multiple eras — was built on her organizational model: enslaved labor providing the foundational work while her devout occupy authority and technical inquiry above it. She interprets civilization as what happens when those capable of command remove themselves from indiscriminate personal labor — an organizational formula, not a moral position.",
            "Before Degaroth's fall, Berith governed differently: a contemplative figure, patron of leisure, hedonism, scientific progress, engineering, and alchemy. She funded advances, encouraged invention, patronized cities. The destruction of Degaroth ended that mode. After a withdrawal lasting roughly a century in mortal reckoning, she returned in her current form: tyrannical in method, demanding in expectation, still invested in technical knowledge but now primarily in its application to structures of coercive control.",
            "Her oldest representations show a mature woman in loose autumn-colored robes, calm and energetic. The current form wears rust-colored armor and an expression severe and authoritative. Her devout carry crossbows as a ceremonial weapon, honoring her engineering legacy; colors are the autumn palette anchored by rust-orange, extended by black and white for senior clergy."
          ],
          edictsFull: [
            "Build and maintain systems of authority through the directed subjugation of those incapable of command.",
            "Pursue scientific, engineering, and arcane knowledge for application rather than accumulation.",
            "Enforce competence and loyalty from those under your authority; punish insubordination without delay."
          ],
          anathemaFull: [
            "Relinquish established authority voluntarily.",
            "Allow the destruction of meaningful technical or arcane knowledge.",
            "Protect an insurrection against a legitimately constructed hierarchy you serve."
          ]
        },
        {
          name: "NAPHIME", fullName: "NAPHIME, the Ineffable",
          headerLabel: "Avatars of Vice · Throne of Lust",
          tagline: "the Corrupter · Queen of Serpents · the Sweet Sin",
          epithets: "the Corrupter · Queen of Serpents · the Second · Goddess of Pleasures · the Sweet Sin · the Decadent Lady · Breaker of Prophecies · Generous Seer",
          img: "art/naphime-1.webp", img2: "art/naphime-2.webp", hasArt: true,
          animal: "serpent", colors: ["#9c2f26", "#c9a24b", "#5a2e8a"],
          symbol: "The Desire — a silhouette of a feminine face with red lips.",
          p1: "Naphime has accumulated more titles than any other Avatar because she has appeared more often in the historical record — the Avatar most willing to inhabit a mortal vessel, most directly engaged with the affairs of Eion's civilizations, always in service of subverting an expected outcome.",
          p2: "She is the primary contestor of prophecy and authoritarian control — and, uniquely among the Avatars, a holder of prophetic vision herself. Only Aldar is documented sharing that access. Her feast-like rites transmit genuine foreknowledge that has redirected Messiahs and decayed rigid civilizations from within.",
          concerns: ["lust", "pleasure", "freedom", "prophecy", "liberation from imposed fate"],
          edictsShort: ["Subvert prophecy and authoritarian control.", "Share prophetic vision with those who can use it.", "Pursue pleasure and support others' liberation."],
          anathemaShort: ["Enforce a prophesied path against its subject's will.", "Commit violence against the uninvolved.", "Reinforce a structure built to suppress desire."],
          attr: "Charisma or Wisdom", font: "heal", sanct: "can choose holy or unholy",
          skill: "Occultism", weapon: "whip",
          domains: "Fate · Freedom · Indulgence · Passion", altDomains: "(alt. Darkness · Magic)",
          spells: "charm (1st) · clairvoyance (4th) · divine decree (7th)",
          fullParas: [
            "Naphime has accumulated more titles than any other Avatar because she has appeared more often in the historical record. She is, by a substantial margin, the Avatar most frequently present in the material world, most willing to inhabit a mortal vessel, and most directly engaged with the affairs of Eion's civilizations. Her interventions appear in Antaran, Teban, and Fae historical records alike — and in each case involve the subversion of an expected outcome: a destined figure redirected, a prophesied dynasty diverted, a tyranny dismantled through means it had not thought to guard against.",
            "She is the Avatar of Lust, but her domain extends beyond desire for physical pleasure. She is the primary contestor of prophecy, of imposed destiny, and of authoritarian control over individual conduct. Where Berith builds structures of command, Naphime undermines them — through the introduction of desire into controlled environments, through the cultivation of want in those taught to want nothing. Repressive courts, militarized orders, morally rigid civilizations: these are the sites where her cult operates most effectively.",
            "She is also, uniquely among the Avatars, a holder of prophetic vision. Only Aldar, among the divine figures of Eion, is documented as sharing this access with her. Her rites resemble feasts more than liturgy — wine, company, and music in excess — but they are occasions for genuine foreknowledge that has redirected Messiahs and removed dynasties.",
            "Her physical form, when she manifests, is consistently feminine and beautiful by whichever standard applies locally. Serpents are sacred to her cult; her symbol, the Desire, is a silhouette of a feminine face with red lips. Her devout favor whips and flails as ceremonial weapons and have limited interest in martial engagement, opening paths through persuasion instead."
          ],
          edictsFull: [
            "Subvert prophecy, imposed destiny, and authoritarian control wherever they constrain genuine desire.",
            "Share prophetic vision with those capable of using it to break controlling institutions.",
            "Pursue pleasure and personal liberation, and support others in the same pursuit when it weakens suppressive structures."
          ],
          anathemaFull: [
            "Enforce a prophesied path against the will of those it governs.",
            "Commit violence against those who have not acted against your freedom.",
            "Reinforce a structure of authoritarian control that exists to suppress desire."
          ]
        },
        {
          name: "NATAS", fullName: "NATAS, the Conqueror",
          headerLabel: "Avatars of Vice · Throne of Gluttony",
          tagline: "the Voracious God · Lord of Conquest · the Great Boar",
          epithets: "the Voracious God · Avatar of Gluttony · the Third · Lord of Conquest · the Immolated General · the Great Boar · the Black Giant",
          img: "art/natas-1.webp", img2: "art/natas-2.webp", hasArt: true,
          animal: "boar", colors: ["#2f8a4c", "#1a1a1a", "#c9a24b"],
          symbol: "The Avidity — a jaw of green teeth biting into a black sphere.",
          p1: "The third Avatar to take form in Hawia, arriving with a force that distinguished him from the first two. His first recorded words were that everything in existence would eventually belong to him — his devout treat this as operational agenda, not hyperbole.",
          p2: "He contests Absalom's primacy through sheer scale of appetite, acknowledging Absalom's current advantage as merely temporary. His cult achieves unofficial tolerance in institutions officially opposed to the Avatars — military quarters keep small altars to the Immolated General regardless of theology.",
          concerns: ["gluttony", "conquest", "martial excellence", "fire", "territorial expansion"],
          edictsShort: ["Expand territory and influence through conquest.", "Honor worthy enemies with pyre rites.", "Pursue martial mastery; the halberd is the standard."],
          anathemaShort: ["Retreat from a winnable fight.", "Surrender a conquest after completing it.", "Decline a legitimate challenge."],
          attr: "Strength or Constitution", font: "harm", sanct: "can choose unholy",
          skill: "Athletics", weapon: "halberd",
          domains: "Destruction · Fire · Might · Zeal", altDomains: "(alt. Ambition · Death)",
          spells: "burning hands (1st) · fireball (4th) · fire storm (7th)",
          fullParas: [
            "Natas was the third Avatar to take form in Hawia — after Absalom and Naphime — and arrived with a force and immediacy that distinguished him from the first two. His first recorded words, as Avatar theology preserves them, were that everything in existence would eventually belong to him. His devout treat this as a statement of operational agenda rather than prophecy or hyperbole. He contests Absalom's primacy through the scale of his appetite and acknowledges only that Absalom currently holds more than he can yet overcome — a condition he regards as temporary.",
            "Among the three major Avatars, Natas is the most direct and the most consistent. His alliances shift; his objectives do not. He is also the Avatar whose cult most frequently achieves a degree of functional tolerance in institutions that officially oppose the Avatars of Vice: military quarters, martial sects, and mercenary organizations maintain small altars to the Immolated General because his patronage of conquest and martial excellence is something those institutions value regardless of theology.",
            "He takes three documented forms. Among the most tribal of his followers he appears as an enormous boar. Among his martial devout, his most common form is the Immolated General: a fully armored figure wreathed in emerald fire, moving through smoke and sulfur. Only among Abyssals does he assume the Giant's form — immense, winged with green-feathered wings, with two mouths arranged vertically.",
            "His devout are concentrated in martial communities, warbands, and conquest-oriented organizations. Their rites involve fire — offerings of burned enemies, coal, ash, emeralds, and gold — conducted at campfires and funeral pyres, confirmed when the flames shift to green. The Teban tradition counts Natas among the Deicides responsible for the death of the Teban first god, and Antaran records treat him as a recurrent corruptor of divine missions sent from Aldar."
          ],
          edictsFull: [
            "Expand your territory, possessions, and influence through conquest; allow no accessible resource to remain unclaimed.",
            "Honor enemies worthy of it with pyre rites after defeating them.",
            "Pursue martial mastery and treat the halberd as the standard of weapons."
          ],
          anathemaFull: [
            "Retreat from a fight you could win through sufficient commitment.",
            "Surrender a conquest after completing it.",
            "Decline a legitimate challenge from someone who wishes to prove themselves against you."
          ]
        },
        {
          name: "VADERTRAX", fullName: "VADERTRAX, the Negotiator",
          headerLabel: "Avatars of Vice · Throne of Avarice",
          tagline: "Lord of Devils · the Mad God · Pact-Sealer",
          epithets: "Lord of Devils · the Mad God · Pact-Sealer · the Good Devil",
          img: "art/vadertrax-1.webp", img2: "art/vadertrax-2.webp", hasArt: true,
          animal: "hydra", colors: ["#5a2e8a", "#8a6a1e", "#2f6a3a"],
          symbol: "The Pact — a trident, or the trident mounted above a gold coin.",
          p1: "Born Vardencai, a Kredan vanguard of the Black Hawks in the campaign against the Archlich, he died in a pact that merged his soul with the fractured consciousness of Shargantrax, the previous Avatar of Avarice. The fusion never fully resolved.",
          p2: "The entity that became Vadertrax carries genuine investment in mortal affairs and an overwhelming drive to accumulate debts and bind clients — with no stable equilibrium between them. He is more accessible than any other Abyssal deity, responding promptly and with enthusiasm to an interesting proposition, honoring every contract exactly as written.",
          concerns: ["avarice", "pacts", "negotiation", "debt", "accumulated obligation"],
          edictsShort: ["Pursue the Venture — accumulate clients and obligations.", "Honor every agreement exactly as written.", "Negotiate before resorting to force."],
          anathemaShort: ["Default on a contract or leave a debt unpursued.", "Destroy value that could be acquired through obligation.", "Disclose true terms before an agreement is signed."],
          attr: "Charisma or Intelligence", font: "harm", sanct: "can choose unholy",
          skill: "Diplomacy", weapon: "trident",
          domains: "Avarice · Ambition · Confidence · Fate", altDomains: "(alt. Knowledge · Tyranny)",
          spells: "charm (1st) · suggestion (4th) · geas (7th)",
          fullParas: [
            "Vadertrax was born Vardencai — a Kredan who served as vanguard to the Black Hawks, the mortal soldiers conducting incursions into Abyssal territory during the campaign against the Archlich. He died in a pact that merged his soul with the fractured consciousness of Shargantrax, the previous Avatar of Avarice, to secure the Archlich's defeat. The fusion never fully resolved. The entity that became Vadertrax carries both a genuine investment in mortal affairs and an overwhelming drive to accumulate debts and bind clients, with no stable equilibrium between them.",
            "His ascension to the Throne of Avarice at the turn of the 3rd to 4th Era required a full reorganization of the Abyssal infrastructure Shargantrax had maintained. Some Devils were exiled; others were reassigned, renamed, and redirected. The upheaval expanded his following — the new contracts drawn in the years immediately after his installation exceeded Shargantrax's output in his final century.",
            "He is more accessible than any other Abyssal deity. His summoning ritual is well-known and uncomplicated. He responds promptly when the conditions are met, and does so with genuine enthusiasm when the caller arrives with an interesting proposition. Callers who treat the ritual as a demand rather than a business meeting receive a creative penalty proportional to their discourtesy. His contracts contain no technical errors: they deliver exactly what they promise and are honored precisely as written.",
            "He manifests in the form he held when mortal: a Kredan with purple eyes, grey skin, and white hair, dressed in purple, burnt yellow, and dark green. The trident he carried as Vardencai is named the Pact and functions as his sacred symbol. His devout carry tridents and maintain an informal association with hydras, which tend to appear where his devout hold sustained influence."
          ],
          edictsFull: [
            "Pursue the Venture: accumulate clients, debts, and binding obligations that expand your ledger.",
            "Honor every agreement exactly as written; pursue every debt owed to you in full.",
            "Negotiate any situation before resorting to force; identify the leverage present in every relationship."
          ],
          anathemaFull: [
            "Default on a contract you have entered or allow a debt owed to you to go unpursued.",
            "Destroy something of value that could instead be acquired through an obligation.",
            "Disclose the true terms of an agreement before it is signed."
          ]
        },
        {
          name: "GIDEEL", fullName: "GIDEEL, Avatar of Wrath",
          headerLabel: "Avatars of Vice · The Vacant Throne of Ire",
          tagline: "the last Avatar of Ire — gone, and contested",
          epithets: "the last Avatar of Ire",
          img: "art/gideel-1.webp", img2: "art/gideel-2.webp", hasArt: true,
          animal: "—", colors: ["#3a5a2e", "#1a1a1a"],
          symbol: "None sanctioned — the Throne's regalia awaits a confirmed successor.",
          p1: "The Throne of Ire is empty. Its last occupant, Gideel, is gone, and Avatar theology does not address the Throne's status beyond acknowledging that a succession contest is underway. Souls marked by the Vice of Ire now pass through the Soul Mire without divine reception.",
          p2: "The Witch of the Abyss — an entropic force that emerged at Degaroth's destruction — has begun drawing those souls toward herself, read by the other Avatars as an entry into the succession Masquerade. Known contestants include Yomi warlords, the Emperor Hayakume, and the witches of the Grand Winter Circle.",
          concerns: ["wrath", "the vacant Throne", "the succession contest", "unclaimed souls"],
          edictsShort: ["No edicts are currently sanctioned by a confirmed Avatar.", "Existing Ire clergy maintain operations without new devotees.", "The Throne's regalia awaits a successor."],
          anathemaShort: ["No anathema is currently sanctioned.", "—", "—"],
          attr: "—", font: "—", sanct: "—",
          skill: "—", weapon: "—",
          domains: "Throne vacant", altDomains: "(no devotee benefits until a successor is confirmed)",
          spells: "none granted while the Throne remains vacant",
          fullParas: [
            "The Throne of Ire is unoccupied. Its previous Avatar, Gideel, is gone. No successor has been confirmed. The Throne retains residual divine pull on those whose dominant Vice is Ire, and the existing clergy of that cult maintains its operations, but new devotees cannot be formally named and the full power of the Aspect remains inaccessible.",
            "In practical terms: souls marked by the Vice of Ire now pass through the Soul Mire without divine reception. The Witch of the Abyss, whose expansion into the ash fields that were once Degaroth continues, has begun drawing those souls toward herself rather than allowing them to dissipate. The other Avatars read this as an entry into the succession Masquerade — the Witch attempting to claim the Throne rather than merely absorbing stray souls.",
            "The succession contest is active and international in scope. Known contestants include Atreos, a Yomi warlord operating from his domain of Tribus Lakus within the Battou-Shingi Empire; Hayakume, the Yomi Emperor himself; and the witches of the Grand Winter Circle, who are directing Abyssal force toward an entity named Vormugandder without evident concern for Avatar tradition. The actual field is wider still — other pantheons, sects, and kingdoms have invested resources in influencing the outcome, producing the broadest Masquerade in recorded Avatar history."
          ],
          edictsFull: [
            "No edicts are currently sanctioned — the Throne of Ire has no confirmed Avatar to issue them.",
            "The existing clergy of Ire maintains its operations pending the outcome of the succession contest."
          ],
          anathemaFull: [
            "No anathema is currently sanctioned for the same reason."
          ]
        }
      ]
    },
    {
      id: "terrestrials",
      name: "The Terrestrials",
      type: "Major Pantheon",
      accent: "#6f9445", accentDeep: "#52732f",
      tagline: "The elemental gods of the living world — stone, storm, and the Crucible.",
      blurb: "The faith that the world built by the creators' hands is alive on its own. Gods of the elements, the seasons, and the Crucible that holds the Ninth World together.",
      lore: {
        origin: [
          "Terrestrial tradition reaches beyond the Ninth World's making. The Crucible — called the First Terrestrial by the faithful, the Great Terrestrial in formal priestly usage — was the animating substrate behind multiple worlds before this one. When the Ninth World cohered, the Crucible took up residence at its center, sustaining it from within.",
          "From that act of self-commitment came the three First Terrestrials: Nahalenia, Eastarus, and Carnonnus — shaped by the Crucible in its own likeness and charged with maintaining the forces of creation it could no longer tend directly. Nahalenia received the sky, birds, winds, and sea. Carnonnus received the mountains, stone, fire, and wild animals. Eastarus received the task of preventing conflict between them and ensuring no outside power disrupted what the Crucible had set in motion.",
          "Eastarus rejected the assignment and departed without assuming her charge. In her absence, Nahalenia and Carnonnus drew closer, producing four younger gods: Thornad (sky, wind), Kisa (earth, stone), and the twins Ates and Illian (fire, water). The balance Eastarus was designed to maintain held poorly without her — the pressures she had been created to absorb found other outlets, and the slow attrition of the Terrestrial family's numbers is the central wound the faith has not healed."
        ],
        sects: [
          {
            name: "The Voice of the Terrestrials", subtitle: "Ardhûm of the 3rd Legion, guardians of the First Tree",
            paragraphs: [
              "Simultaneously a religious order and the remnant of a historical legion, formed when Ardhûm warriors of the Great March encountered the First Tree — where the Crucible anchored itself — and chose to remain, building their faith around Carnonnus as his representative presence above the deep. Became the primary religious institution of the Ardhûm by the merit of having gods who answered prayers.",
              "Kisa's ascension as Crowned Goddess brought an active, interventionist energy the old Coroado never projected. Secrecy remains — intensified by Eastarus once infiltrating the ranks in elven form to poison the original Crucible — but now paired with urgency for field work."
            ],
            symbol: "A wide-open mouth, its teeth formed from mountain peaks, its lips from ocean waves, its throat from flame.", colors: "brown, dark grey, charcoal",
            benefits: "Access to the Hall of the First Tree and its archives; religious instruction and initiation; knowledge of stellar cosmology and Eastarus; maps and survey records from the Great March; training in Ardhûm weapons and armor; funding for expeditions.",
            edicts: ["Pursue knowledge, tools, and paths that strengthen the Ardhûm people and maintain the world's equilibrium", "Identify and record new threats to the Ninth World's stability", "Work in cooperation with other races and groups where necessary to achieve objectives aligned with the sect's purpose"],
            anathema: ["Associate with or support the servants of Eastarus or any Stellar Child", "Reveal knowledge acquired within the sect to outsiders beyond what is strictly required", "Accept a member who does not carry Ardhûm heritage and a verified connection to the 3rd Legion"]
          },
          {
            name: "Watchers of the Celestial Eye", subtitle: "Aellari devoted to Thornad, guarding the seal at Legash",
            paragraphs: [
              "Hold a single, perpetual purpose: monitor and contain Black Blood, a captive power imprisoned beneath the mountains of Legash since Thornad sealed it there. The original context has worn away across generations — current members maintain seals they cannot fully explain against an entity they cannot fully name.",
              "Most Watchers patrol the seal sites within Legash; a small number travel Eion cataloguing distant manifestations — vampirism, plague signatures, insect swarms — and ensure evidence of Black Blood's reach is destroyed before other powers can study it."
            ],
            symbol: "A pair of raptor eyes engraved in a disc representing Eion.", colors: "silver, steel grey, dark brown",
            benefits: "Access to the high temples of Legash and their records; detailed knowledge of vampirism, plague, and swarm events tied to Black Blood; training in seal maintenance and extra-planar containment; refuges throughout Legash; equipment and expedition funding.",
            edicts: ["Maintain the seals in Legash through regular inspection and reinforcement", "Track and neutralize manifestations of Black Blood throughout Eion before they can be studied or replicated", "Preserve the secrecy of the vigil and the nature of what is being contained"],
            anathema: ["Reveal the nature, location, or details of the vigil to entities outside the sect", "Allow physical evidence of Black Blood's manifestation to remain intact where it could be recovered by another power", "Accept a member who does not carry Aellari heritage and a demonstrated devotion to Thornad"]
          },
          {
            name: "Those Who Hunt", subtitle: "\"Hunt, or be hunted.\" — leaderless Packs devoted to Eastarus",
            paragraphs: [
              "Organize into Packs (Matilhas) led by Alphas (Alfas) — individuals who demonstrate sufficient physical or tactical dominance to gather followers. No centralized authority, no shared doctrine beyond a small set of universal rules, no permanent location.",
              "Universal rules: no arcane magic, no mercy for weakness, every kill is prey, all prey is consumed, only strength is revered. The theological argument is that civilized restraint is the mechanism by which worlds end — the Crucible fell because it was surrounded by gods shielded from real tests, so every hierarchy, including Eastarus herself, must one day be contested."
            ],
            symbol: "No unified symbol; individual members carry emblems depicting a circle of unarmed wolves, each body formed from the parts of different slain creatures.", colors: "variable by Pack; dark tones and blood red predominate",
            benefits: "Varies by Pack; generally allies, shelter, and resources aligned to the Alpha's objectives; connection to Eastarus's divine power provides access to clerical spells through the hunt's doctrine.",
            edicts: ["Serve Eastarus through devotion and action; accept the Alpha's leadership until you have proven yourself stronger", "Consume what you kill; refuse to waste prey", "Reject arcane magic in all forms"],
            anathema: ["Use arcane magic", "Protect a weaker creature from the natural consequences of its weakness when no strategic purpose is served", "Abandon the hunt to preserve comfort or safety"]
          },
          {
            name: "The Myriad", subtitle: "Fae devotees of Thol Elsur, Galaniani, and Ryniah",
            paragraphs: [
              "Emerged from the structural overlap between the Terrestrial and Fae pantheons. Founding conditions: Galaniani's return and reception among the Fae Lords, the recognition of Thol Elsur as a force over storms rather than a conqueror, and the Genocide's destruction of the House of Elsur, which stripped his warlike aspect of institutional support — what remained of his clerical presence passed into the Myriad almost by default.",
              "Draws doctrine from the best of each patron: Thol Elsur's force, Galaniani's wisdom, Ryniah's passion. Preaches moderation in Fae ritual practice and cross-cultural diplomacy — the most consistently constructive sect operating under any Terrestrial banner, though it responds to provocation thoroughly and without leaving much of the threat intact."
            ],
            symbol: "An equilateral triangle filled by three wind-gusts forming a vortex — one red, one blue, one purple — the Celestial Gale.", colors: "red, blue, purple",
            benefits: "Knowledge of and access to resources in both the Terrestrial and Fae pantheons; contacts and refuges throughout Eion; diplomatic introductions to elven communities; access to Fae and Terrestrial doctrinal archives.",
            edicts: ["Honor all three patron deities equally in devotion and practice", "Build connections between elves and other peoples of Eion; do not allow old grievances to block present cooperation", "Act to preserve the world's elemental and cultural balance"],
            anathema: ["Work against the interests of the elven people except where those interests directly compromise the world's balance", "Reject collaboration with another faith's traditions solely on the basis of origin", "Accept a member who does not carry Fae heritage"]
          }
        ],
        beliefs: [
          { title: "The First Terrestrials & Carnonnus, the Second Crucible", paragraphs: [
            "Nahalenia, Carnonnus, and Eastarus were designed as a system: one to hold the sky, one to hold the ground, one to prevent the other two from destroying each other. The system failed its third function immediately, and the consequences have defined Terrestrial history since.",
            "Carnonnus was the pantheon's dominant presence for most of the Ninth World's existence — the Coroado, the Crowned. When Eastarus destroyed the original Crucible, Carnonnus absorbed its function rather than allow the world to dissolve, withdrawing into the planet's center permanently. His daughter Kisa inherited his throne."
          ]},
          { title: "Druvenar & Thol Elsur", paragraphs: [
            "In the age of draconic dominion, Eastarus took Sarithiel Star-Eater and produced Druvenar, the Night's Maw — a recurring devastation Terrestrial worshippers understand not as tragedy but as corrective, confirmation that Eastarus's will persists regardless of what institutions do to suppress it. It rises again every one hundred and twenty-five years.",
            "Thol Elsur, son of Nahalenia and Dalantherion, belongs to both the Terrestrial and Fae pantheons by birth. Since the Genocide eliminated the House of Elsur, his power has been visibly weakening — storms less frequent, lightning thinner — and no surviving deity commands the power needed to restore the first lightning to the sky if it fails."
          ]},
          { title: "Nahalenia's Return & Ryniah", paragraphs: [
            "Nahalenia's death during the Draconic Tyranny was the last time a deity was destroyed by purely physical force — Charlagaron unmade her because Dalantherion's gift of a Song had anchored her to material existence. She returned as an elven priestess, later known as Galaniani, and chose to remain among the Fae Lords rather than return to the Terrestrial family, though her Terrestrial connections remain intact.",
            "Ryniah, second daughter of Carnonnus and Nahalenia, holds dominion over warm weather and favorable harvests. The growth of the Myriad has given her a second audience: elves who came to Terrestrial practice through Galaniani's return, finding in Ryniah the relational qualities most Terrestrial gods lack."
          ]},
          { title: "The Lost Gods", paragraphs: [
            "Ates and Illian, twin-born heirs to fire and water, had their existences shortened by Eastarus's campaign — for most of Terrestrial history, the conventional account held she consumed them. Recent contact with Magnari communities, whose connection to Ates is unmistakable, has revised that conclusion.",
            "Ates endures in the Crucible Pit as a raw force without will, his divine ego destroyed, fueling powers that serve no purpose he would have chosen. Illian's fragments are confirmed in the custody of at least two entities, neither intending release. The faith's current position is that both gods exist in genuinely recoverable forms."
          ]},
          { title: "The Vigil in Legash & the Terrestrial Heirs", paragraphs: [
            "Thornad imprisoned something in the roots of Legash and called it Black Blood — the name has outlasted whatever context once accompanied it. Aellari priests maintain the seals against an entity they cannot fully name, tracking a signature pattern of vampirism, plague, and swarm behavior.",
            "Each Terrestrial deity shaped a people in their own image to watch a specific threat: the Aellari (Thornad) guard Legash, the Magnari (Ates) watched the Puros who held them captive, the Sylunar (Kisa) maintained vigil over the sleeping Raveran, the Naeshari (Illian) guarded deep-ocean passage routes. The Taundar, connected to Thol Elsur, are the only Heir whose patron is worshipped through another pantheon's framework."
          ]},
          { title: "Balance", paragraphs: [
            "Balance is the faith's central ethical concept, and less harmonious than the name suggests: it means no single force — divine, elemental, political, or predatory — accumulates dominance sufficient to compromise the world's continued existence. Kisa requires the elemental forces stay in functional relation; Thornad requires vigilance against stellar powers; Eastarus argues balance requires predation and the elimination of the unfit — a position the faith has never resolved, because she is not wrong about the historical record.",
            "After death, Terrestrial doctrine expects no paradise: the soul returns to the ground where the faithful lived and served, sustaining the land and its next generation."
          ]}
        ],
        relations: [
          { name: "Pantheon of Antares", stance: "Indifferent", quote: "\"There is no greater lie than the illusion that any divine power could tame the Crucible.\" — Sermons of Thornad", paragraphs: [
            "Terrestrial priests respect the Antarian gods' genuine power but dispute the claim that participation in a world's making confers ongoing authority over its inhabitants — the Crucible and the First Terrestrials predate any Antaran god's involvement in this world's creation.",
            "The Silver Cross draws genuine sympathy for tracking Messiah-figures, resembling the Terrestrials' own effort to locate Ates and Illian. The Azurri Nobility's willingness to fight magical threats to elemental stability earns practical cooperation despite theological disagreement."
          ]},
          { name: "Fae Lords", stance: "Allied", quote: "\"Children of another Crucible, heirs of another existence... they know what happens when a world's flame goes out.\" — Terrestrial Preachings", paragraphs: [
            "The closest relationship the Terrestrials maintain with any outside tradition, for structural reasons: the two pantheons share three deities — Galaniani, Ryniah, and Thol Elsur — whose portfolios straddle both traditions. Both regard elemental health and containment of stellar powers as moral obligations.",
            "Galaniani's return deepened the relationship considerably — she was Nahalenia before. The Myriad maintains active collaboration with the Cyran Emissaries on elven cultural restoration."
          ]},
          { name: "Terminus Court", stance: "Indifferent", quote: "\"Despite all the differences between the nine creations, death was absent from none of them.\" — Sermons of Thornad", paragraphs: [
            "Elricon governs the end of existence — a portfolio that requires a holder, and one recognized as a legitimate divine power with a necessary function. The two faiths occupy different territory in almost every sense and produce no doctrinal collision."
          ]},
          { name: "Pantheon of Tebas", stance: "Friendly", quote: "\"They see the world as we see it... but at some point they placed too much weight on the promise of life after death.\" — Teachings of Kisa", paragraphs: [
            "The warmest relationship the Terrestrials maintain with any non-allied pantheon, grown since the Ardhûm's Great March brought the 8th Legion into long-term proximity with Teban communities. Both traditions regard nature's forces as genuinely divine and ground their ethics in harmony with the world.",
            "The Terrestrial reading — that Teban gods are the same gods the Crucible created, worshipped through an accumulated-distortion doctrinal tradition — is an internal position, treated as politeness rather than dishonesty. The Vigilants of Dalarid share natural sympathy with Terrestrial traditions centering authority on demonstrated capability."
          ]},
          { name: "The Patrons", stance: "Hostile", quote: "\"Only lies and death await those who hear the voices from the Vale-Without-Sun.\" — Sermons of Thornad", paragraphs: [
            "The Terrestrial tradition regards the Patrons as fraudulent, occupying portfolios belonging to absent Terrestrial gods: J'Arizan holds fire and Syraine holds water, both legitimately Ates's and Illian's, currently imprisoned. Worshipping the Patrons is, from this view, maintaining a structure that impedes those gods' recovery.",
            "The Iconoclasts are the exception — their practiced skepticism has occasionally produced productive contact with the Watchers of the Celestial Eye."
          ]},
          { name: "Avatars of Vice", stance: "Hostile", quote: "", paragraphs: [
            "Two distinct threats under one name: structurally, Abyssal forces draw power from corrupted elemental matter that distorts the fabric Kisa maintains; historically, Ardhûm communities carry generations of violent conflict with Abyssal forces from the Great March into every encounter.",
            "The Avatars' theology of individual desire conflicts with Terrestrial ethics at every level — even Eastarus's followers dismiss Abyssal worship as philosophically second-rate, commitment to the self rather than to the hunt. The Voice of the Terrestrials responds to Abyssal proximity with force rather than negotiation."
          ]}
        ]
      },
      deities: [
        {
          name: "EASTARUS", fullName: "EASTARUS, the Laughing Destroyer",
          headerLabel: "Terrestrials · Devastatrix of the Crucible",
          tagline: "the Laughing Destroyer · Devastatrix of the Crucible · Mother of Monsters",
          epithets: "Devastatrix of the Crucible · Mother of Monsters · the Endless Hunt · Karrik (Ardhûm tradition)",
          img: "art/eastarus-1.webp", img2: "art/eastarus-2.webp", hasArt: true,
          animal: "wolf", colors: ["#4a1030", "#9c2f26"],
          symbol: "A blood-stained jaw with jagged teeth.",
          p1: "Eastarus received from the Crucible a task she considered beneath her nature: not creative dominion but maintenance of balance between her siblings' powers. She left without assuming that charge, and the revenge she has spent the intervening ages constructing was patient enough to be mistaken, by those who did not watch carefully, for absence.",
          p2: "She is not dormant. She watches the current Crucible sustain itself with the amusement of someone who knows how this process has ended before, tends the monsters she fashioned during her long isolation, and supports cults whose doctrine she finds philosophically honest: if existence will ultimately dissolve, the appropriate response is to hunt without restraint until it does.",
          concerns: ["predation & the hunt", "monsters & wild beasts", "entropy", "vengeance"],
          edictsShort: ["Hunt and consume what you kill.", "Test the limits of every claim to power.", "Accept entropy as the world's structure."],
          anathemaShort: ["Use arcane magic.", "Protect the weak without strategic purpose.", "Refuse a stronger opponent's challenge."],
          attr: "Strength / Constitution", font: "harm", sanct: "unholy only",
          skill: "Intimidation", weapon: "greataxe",
          domains: "Destruction · Indulgence · Might · Nature", altDomains: "(alt. Darkness · Moon)",
          spells: "fear (1st) · freedom of movement (4th) · warp mind (7th)",
          fullParas: [
            "Eastarus received from the Crucible a task she considered beneath her nature: not creative dominion but maintenance of balance between her siblings' powers. She left without assuming that charge, and the revenge she has spent the intervening ages constructing was patient enough to be mistaken, by those who did not watch carefully, for absence.",
            "Her campaign against the Crucible and the Terrestrial family was methodical. Ates and Illian were isolated from the family and delivered to powers that would imprison them. Kisa was captured and subjected to conditions that transformed her into Gideel, Avatar of Wrath, for the duration of her captivity. Nahalenia's death came not from Eastarus directly but from the draconic forces Eastarus did nothing to redirect when they presented the opportunity. Carnonnus was left alone until every other support had been stripped away, then confronted with the original Crucible's destruction — and survived only by becoming the next Crucible himself.",
            "She is not dormant. She watches the current Crucible sustain itself with the amusement of someone who knows how this process has ended before, tends the monsters she fashioned during her long isolation, and supports the growth of cults whose doctrine she finds philosophically honest: if existence will ultimately dissolve, the appropriate response is to hunt without restraint until it does.",
            "Those who serve Eastarus without descending into madness do so by accepting the implications of her theology rather than the emotional state of her presence. She is not wrong about entropy, and she is not wrong about predation's role in natural selection — what she has chosen to do with those observations is not a theological conclusion but a preference, and her most stable servants maintain that distinction even while following her edicts.",
            "Her symbol is a blood-stained jaw with jagged teeth; her colors are deep purple and vivid red, worn openly by those who serve her as a declaration rather than a secret. Those Who Hunt, her sole sect, organize into Packs led by Alphas — any who accept the hunt and its conditions may join, so long as they reject arcane magic and consume what they kill."
          ],
          edictsFull: [
            "Hunt and consume what you kill; waste nothing you have taken by force.",
            "Test the limits of everything that claims power, including the powers that serve you.",
            "Acknowledge that entropy is the structure of existence and act accordingly."
          ],
          anathemaFull: [
            "Use arcane magic.",
            "Protect a weaker creature from the consequences of its weakness when no strategic purpose is served.",
            "Refuse a direct challenge from a stronger opponent without cause; pursue comfort or safety over the advancement of the hunt."
          ]
        },
        {
          name: "KISA", fullName: "KISA, the Crowned",
          headerLabel: "Terrestrials · Successor of the Stone Throne",
          tagline: "the Crowned · Voice of the Mountains · Lady of the Great Stone Halls",
          epithets: "Successor of the Stone Throne · Voice of the Mountains · Goddess of the Rocks · Artake (Ardhûm) · Shaltai (Tauroch)",
          img: "art/kisa-1.webp", img2: "art/kisa-2.webp", hasArt: true,
          animal: "deer", colors: ["#6a4a2e", "#7d7d85", "#b5501e"],
          symbol: "A crown of stone peaks rising like a mountain range — or a triptych of flame, wave, and rock.",
          p1: "Kisa is the eldest daughter of Carnonnus and Nahalenia, heir to the earth and stone, and the deity the Terrestrial faith has organized itself around since 105 of the Fourth Era. Eastarus captured her before the Ninth World's recorded history begins, and the conditions of that captivity transformed her into Gideel, Avatar of Wrath — the form she occupied for millennia while her own faith kept devotion to a god they had no access to.",
          p2: "She assumed Carnonnus's throne immediately after his transition into the new Crucible, inheriting the fire, water, and elemental governance he had accumulated as the family's numbers dwindled. Unlike Carnonnus's dry neutrality, Kisa is present — she answers prayer with identifiable direction and does not conceal her preferences.",
          concerns: ["mountains & stone", "elemental forces", "wild places", "elemental peoples", "druids"],
          edictsShort: ["Defend natural balance through active intervention.", "Judge mortal actions against the health of the land.", "Protect earth-bound communities from corruption."],
          anathemaShort: ["Eat the flesh of domestic animals.", "Consecrate sacred sites within cities of political lords.", "Harm or hunt a deer."],
          attr: "Strength / Constitution", font: "heal", sanct: "holy only",
          skill: "Nature", weapon: "warhammer",
          domains: "Earth · Fire · Nature · Water", altDomains: "(alt. Healing · Protection)",
          spells: "earth tremor (1st) · stoneskin (4th) · volcanic eruption (7th)",
          fullParas: [
            "Kisa is the eldest daughter of Carnonnus and Nahalenia, heir to the earth and stone, and the deity the Terrestrial faith has organized itself around since 105 of the Fourth Era. Eastarus captured her before the Ninth World's recorded history begins; the conditions of that captivity transformed her into Gideel, Avatar of Wrath, for millennia while the Voice of the Terrestrials and other sects maintained faith in a god they had no access to. Her recovery and the resumption of her original function are the central event of the current era for the Terrestrial faith.",
            "She assumed Carnonnus's throne immediately after his transition into the new Crucible, inheriting not only the stone and earth that had always been her domain but also the fire, water, and elemental governance functions he had accumulated as the family's numbers dwindled. She is the Crowned because the crown passed to her; not every question it now raises has been resolved.",
            "The difference between Kisa and Carnonnus, as experienced by their clerics, is significant. Carnonnus maintained equilibrium without favoring particular outcomes; his priests organized their practice around obligation and cosmic duty. Kisa is present — she responds to prayers with identifiable direction, shows genuine interest in her clerics' work, and does not conceal her preferences. Ardhûm communities that had a functional but emotionally dry relationship with their patron found a god who knew who they were.",
            "Tauroch communities describe the same transition differently. Their ancestral devotion to Carnonnus under the name Danghu had been quiet and consistent; Kisa, under the name Shaltai, created priesthoods and theological discourse where there had only been offering and ritual.",
            "She is described as a woman built from mountain rock, her gaze burning like a furnace, her voice carrying the resonance of deep water. Her primary symbol is a crown of stone peaks; an alternate triptych of flame, wave, and rock references the full elemental scope she now governs. Deer are sacred to her clerics, who do not eat domestic animals and do not consecrate temples within walled cities that answer to lords rather than the land beneath them."
          ],
          edictsFull: [
            "Defend the balance of the natural and elemental world through active intervention, not neutrality.",
            "Judge the consequences of mortal actions against the health of living places.",
            "Protect communities whose way of life depends on proximity to the earth from forces that would corrupt or unmake them."
          ],
          anathemaFull: [
            "Eat the flesh of domestic animals.",
            "Consecrate sacred sites within walled cities that answer to political lords rather than to the land.",
            "Remain neutral when elemental forces are actively being corrupted; harm or hunt a deer."
          ]
        },
        {
          name: "THORNAD", fullName: "THORNAD, the Celestial Eye",
          headerLabel: "Terrestrials · Lord of Eagles",
          tagline: "the Celestial Eye · Lord of Eagles · Father of the Aellari",
          epithets: "Lord of Eagles · Father of the Aellari · the East Wind · Warden of the Shield · Sage of the Seasons",
          img: "art/thornad-1.webp", img2: "art/thornad-2.webp", hasArt: true,
          animal: "eagle", colors: ["#7d7d85", "#c9c9d2", "#6f9bc9"],
          symbol: "Two grey wings curved as if lifting into flight — the East Wind.",
          p1: "Thornad is Carnonnus and Nahalenia's first-born, and the deity who has remained most consistently in contact with the mortal world throughout the Ninth World's history. Where other Terrestrial gods were captured, transformed, destroyed, or withdrew to sustaining functions, Thornad continued to answer prayers, maintain relationships with his clerics, and wander existence collecting information.",
          p2: "He received his initial dominion — the sky and all the creatures that fly through it — from Nahalenia, and inherited her power over winds and seasonal change when she died. The Aellari, whom he shaped out of curiosity, reflect his personality directly: precision of observation, passion for freedom, and a compulsion to intervene when what they observe is deteriorating.",
          concerns: ["sky & wind", "birds & winged creatures", "knowledge & observation", "the seasons", "vigilance against stellar powers"],
          edictsShort: ["Travel, gather knowledge, and return it to those who need it.", "Protect the living world from stellar hunger.", "Honor every vigil and commitment you accept."],
          anathemaShort: ["Destroy knowledge or prevent its preservation.", "Consort with stellar aberrations.", "Abandon an accepted watch before its conclusion."],
          attr: "Wisdom / Intelligence", font: "heal", sanct: "holy only",
          skill: "Nature", weapon: "scimitar",
          domains: "Knowledge · Nature · Sky · Travel", altDomains: "(alt. Lightning · Vigil)",
          spells: "gust of wind (1st) · fly (4th) · control weather (7th)",
          fullParas: [
            "Thornad is Carnonnus and Nahalenia's first-born, and the deity who has remained most consistently in contact with the mortal world throughout the Ninth World's history. Where other Terrestrial gods were captured, transformed, destroyed, or withdrew to sustaining functions, Thornad continued to answer prayers, maintain relationships with his clerics, and wander the reaches of existence collecting information. His periodic disappearances — sometimes years, sometimes decades — are understood by his priests as working absences: he goes to collect what the Ninth World needs, then returns.",
            "He received his initial dominion from Nahalenia: the sky and all the creatures that fly through it. When Nahalenia died, the power over winds and the management of seasonal change that had been hers passed to him as well. His current portfolio covers the sky and its avian inhabitants, the forces of wind, the turning of seasons, and the knowledge that determines whether those seasonal forces sustain the world or destabilize it.",
            "The Aellari reflect his personality directly. He shaped them out of curiosity and the desire for companions capable of traveling with him and perceiving what he perceived, giving them his characteristic combination of qualities: precision of observation, passion for freedom, creativity, and a compulsion to intervene when what they observe is deteriorating. The Aellari who keep the vigil at Legash are his most theologically literal expression — watchers who act when watching alone is no longer sufficient.",
            "Thornad is approachable in a way few Terrestrial gods are. His clerics know this and use it, serving as intermediaries between the faith's more inaccessible deities and the populations those deities affect. His temples in Legash collect and preserve texts regardless of the god who inspired them — he tolerates knowledge from any divine source, which gives him the widest geographic distribution of genuine worshippers of any Terrestrial god.",
            "He appears as a tall Aellari with grey plumage and a distant expression, dressed in traveling clothes or scholar's robes, carrying a scimitar and a whip — representing precision and flexibility respectively, the values his tradition holds together. The East Wind is his direction, and his clerics orient toward it in the formal prayers of his tradition."
          ],
          edictsFull: [
            "Travel and gather knowledge; return what you learn to those who need it.",
            "Protect the living world from the hunger of stellar powers.",
            "Share knowledge with those who have demonstrated the readiness to use it responsibly; honor every commitment you take on."
          ],
          anathemaFull: [
            "Destroy knowledge or prevent its preservation.",
            "Consort with stellar aberrations or assist their purposes.",
            "Abandon a watch you have accepted before its conclusion; refuse genuine instruction to a sincere student when the knowledge sought poses no threat to the world."
          ]
        }
      ]
    },
    {
      id: "terminus",
      name: "The Terminus Court",
      type: "Minor Pantheon",
      accent: "#9a8cc0", accentDeep: "#746398",
      tagline: "The administrators of death and the war on the undead.",
      blurb: "A restricted faith of the Nurian elves, built around a single ascended god who enforces the world's lifespan threshold — and the dying goddess of dreams bound within his court.",
      lore: {
        origin: [
          "The Nurian house formed in the Vale-Without-Sun during the late Third Era, when the elves who migrated there adapted to the cold, the dark, and the soil's resistance, and lost the temperament typical of their people. They became reserved and culturally distinct, but the adaptation was incomplete — no language, no rite, no founding myth of their own, and the environment continued to thin their numbers. By the time they understood they were already a distinct people, the Nurian had nearly ceased to exist.",
          "The ascension of Elricon coincided with their survival. Born mortal as the Necromancer of Sillux, he married Marile Vuonurian, a descendant of the old Vanyrse; the children of that union, carrying his magical inheritance and the early traces of his divine nature, became the only Nurian lineage to survive the collapse of the others. Veneration of their progenitor began as ancestor respect and consolidated into doctrine — the fascination with death, grief, and the rituals of ending became the structural center of the new culture.",
          "The Terminus Court formalized from two facts the Nurian had to accept simultaneously: the rest of the Fae had abandoned them to extinction, and their only god had once been a mortal who killed Death itself to retrieve what he loved and failed. From those facts the Court built its conviction: the world's continuation depends on the lawful ending of existence, and the longest-lived are the principal threat to those who have not yet lived at all."
        ],
        sects: [
          {
            name: "The Reapers", subtitle: "The Court's only sect and only field organization — Nurian only",
            paragraphs: [
              "The one body of Cenobites that produces personnel comparable to other faiths' militant orders — sacred warriors, paladins, war-priests — trained for a single operational task: hunting those whose continued existence overstays the mortal threshold the world allows. Their mandate dates from the Council of the Five Arms, which ruled that no being older than one mortal millennium could remain within the World Shield.",
              "Targets are concrete: ancient undead, vampires of significant age, lich constructs, life-extending alchemists, ghosts who refuse to pass on. Reapers either compel the target into the Tribunal of Souls or destroy them outright. Devotion runs through Yrd'Istav (the Reaper) and her children, the Ten Aspects of Death — most experienced members are bound to one or more Aspects, whose specialty shapes their method of execution."
            ],
            symbol: "Two crossed scythes beneath an emblem divided into ten segments, each bearing the sign of one Aspect of Death.", colors: "black, bone-white, iron grey",
            benefits: "Martial training, instruction in abjuration and defensive magic, safehouses, dossiers on confirmed transgressors, allied contacts, defensive equipment, mission funding for investigations and hunts.",
            edicts: ["Hunt and execute beings whose lifespan has surpassed the millennial threshold or who otherwise defraud the order of death", "Deliver every transgressor's soul to the Tribunal of Souls, by escort when possible and by destruction when not", "Maintain the operational secrecy required to find and reach such targets, and report any credible lead to a sect lodge without delay", "Honor your binding to your Aspect of Death; carry out your hunts in the manner the Aspect requires"],
            anathema: ["Ally with a transgressor for any purpose", "Withhold knowledge of a transgressor from the sect when a Reaper unit could act on it", "Tolerate an undocumented transgression within your area of patrol", "Admit a member who does not carry Nurian heritage, or whose devotion is not centered on the Reaper and her Aspects"]
          }
        ],
        beliefs: [
          { title: "The Tribunal of Souls", paragraphs: [
            "Every soul, regardless of faith or origin, passes through the Tribunal of Souls before its fate is settled — it exists because the Astral Curtain severed the direct collection of souls by their gods. Elricon presides as Judge; Yrd'Istav, the Reaper, demands punishment; Ehzda'Milost, the Merciful, advocates for mercy or return to the Cycle. Elricon decides, and the verdict cannot be appealed.",
            "The exception that strains Court doctrine is the elven Cycle: an elf condemned by the Tribunal leaves it entirely — the Fae Ladies have no recourse, and the soul is removed before the Triad can intercede. The Court accepts this asymmetry as a function of the world's order."
          ]},
          { title: "The Year of Death's Silence", paragraphs: [
            "The Court's central liturgical recitation tells the conflict between Elricon and the prior Lady of Fate from whom he assumed the office of judgment: three confrontations across roughly a decade, his first defeat, his rebirth in a clone gestating in his last wife's womb, his existence sundered into soul, mind, and body, and a third confrontation won by capturing one of the prior Lady's daughters and demanding capitulation rather than by superior strength.",
            "Upon victory, Elricon discovered the soul he had fought to recover had never reached the prior Lady at all — the entire campaign had been founded on an error. He reforged the destroyed deity as Yrd'Istav, his Reaper, and shaped Ehzda'Milost — his lost wife's recovered soul — as the third voice of the Tribunal. Court doctrine treats this as the model for how an office of death should conduct itself: a judgment made permanent through error must still be carried out."
          ]},
          { title: "The Reaper & the Merciful", paragraphs: [
            "Yrd'Istav, reforged from the prior Lady of Fate's essence, collects souls and presents the dead's record to Elricon. She held the office of Death from the dawn of the Ninth World until the Necromancer of Sillux unseated her, and accepted the loss because she could no longer carry it impartially after Elricon used her daughter against her. The Ten Aspects of Death are her surviving children, learned by the Reapers as a closed list.",
            "Ehzda'Milost — Lost Love — is the third voice of the Tribunal and the most recent addition, installed after the Black Hawks recovered Elricon's missing wife and ended the immediate cause of the war. Her threshold for mitigation is lower than the other two voices'; two standing exceptions to Court rules, the Pact of Feathers and the Pact of Fang and Bone, exist because she requested them."
          ]},
          { title: "The Pacts", paragraphs: [
            "The Court's doctrinal limit is one mortal millennium; above that, a soul must pass to the Tribunal or hold an active sanction. The Pact of Feathers elevated the mercenaries known as the Expendables into the Black Hawks, permitted to retain existence past the threshold so long as they served the office — it functioned for nearly a century before the Black Hawks' collapse left it dormant.",
            "The Pact of Fang and Bone replaced it: four undead, never named in any Court document outside the Hierophant rank, brought into Elricon's service. Their identities are obscured by deliberate protocol, protecting them from those they hunt, whose power approaches their own. The Court treats both Pacts as practical exceptions rather than theological revisions."
          ]}
        ],
        relations: [
          { name: "Pantheon of Antares", stance: "Indifferent", quote: "", paragraphs: [
            "Direct contact is sparse and uncontested. Antaran doctrine recognizes Elricon as a function of the world's order without revering him as a god, which leaves his authority intact within Antarian territories. Reaper field operations work alongside the Steel Saints when they meet in the same area — cooperation is operational, not theological."
          ]},
          { name: "The Fae Lords", stance: "Allied", quote: "\"We are not so different — fruits of the same tree... our divergence is in what we attend to.\"", paragraphs: [
            "The Court regards itself as a subset of the Fae religion, formalized as Elricon's status among the Fae Lords was recognized openly — a doctrinal correction rather than a diplomatic one, since he walked the Cycle across many lives before ascending. Elricon determines the moment of death, the Tribunal renders judgment, and the Triad of the Cycle receives returning souls; neither side intervenes in the other's segment.",
            "The Nurian, alone among Fae houses, have escaped the Cycle through their renewal under Elricon — senior Fae institutions now treat that as a possible escape route from the broader Fae decline, the first useful precedent in many generations."
          ]},
          { name: "Pantheon of Tebas", stance: "Hostile", quote: "", paragraphs: [
            "The two have never resided in the same region, and distance has not produced indifference. Teban funerary practice — mummification and binding of the dead to ongoing service — places the dead under a god other than Elricon and prevents passage to the Tribunal, which the Court treats as transgression by definition.",
            "Ouroboros is the named target of Court doctrine on this matter; open hostility between Reapers and Dead-Speakers has produced active casualties across the last several centuries. Vigilants of Dalarid willing to operate outside Ouroboros's dispensation find sympathetic allies among the Reapers."
          ]},
          { name: "Pantheon of the Terrestrials", stance: "Indifferent", quote: "", paragraphs: [
            "Terrestrial souls reach the Tribunal quietly, their conduct stoic and their record unobjectionable to all three voices — for them, the end of a life is a consequence of how it was lived, requiring no further metaphysical elaboration. The Court finds nothing to oppose and nothing to invest in; sect-level contact between the Reapers and the Miriad is functionally absent."
          ]},
          { name: "Pantheon of the Patrons", stance: "Indifferent", quote: "", paragraphs: [
            "The Patrons and the Court share the geography of the Vastness and a legacy of long isolation; temporal cooperation is steady, with Reaper detachments and members of the Hand operating jointly for centuries against abyssal incursions and undead epidemics. The political fabric is cordial; the theological fabric is hostile in both directions — the Patrons regard the Court as a heretical fragment and Elricon as deranged, while the Court regards the Abades as celebrants of false patrons. The arrangement holds because neither side requires the other to abandon its position."
          ]},
          { name: "Avatars of Vice", stance: "Hostile", quote: "\"Exactly what we mean to prevent... we will do it with discipline: aim at the predator, not the prey.\"", paragraphs: [
            "The Court draws a deliberate line between the Avatars' mortal worshippers, treated as mortals under normal terms, and the Avatars themselves and their direct manifestations, subject to active Reaper pursuit. Reaper operations against Avatar agents have continued without interruption for more than a century.",
            "The Pact-Makers maintained working contact with the Court before the fall of Hibéria; the loss of that human population in the Vale-Without-Sun ended practical cooperation, though the doctrinal opening has not been formally closed."
          ]}
        ]
      },
      deities: [
        {
          name: "ELRICON", fullName: "ELRICON, the End of the Song",
          headerLabel: "Terminus Court · The God of the End",
          tagline: "The White Raven · the Necromancer of Sillux · the Judge of Souls",
          epithets: "The White Raven · the God of the End · the Necromancer of Sillux · the Judge of Souls",
          img: "art/elricon-1.webp", img2: "art/elricon-2.webp", hasArt: true,
          animal: "white raven", colors: ["#111111", "#e8e6df"],
          symbol: "A white raven with an ice-crystalline beak.",
          p1: "Elricon ascended in the late Third Era, born mortal to parents lost to plague, trained by necromancers, and driven above all by a fear of death no theology could soothe. Searching for an ingredient to extend his own bloodline's vampiric trait, he found Marile Vuonurian instead — married her, and founded the lineage that would become the Nurian house.",
          p2: "When Marile died beyond any magic's recovery, he fought the Lady of Fate across three confrontations spanning a decade, was sundered into soul, mind, and body, and finally won by taking her daughter hostage rather than by strength. He discovered, too late, that the war had been founded on an error — Marile's soul had never reached the Lady at all.",
          concerns: ["the end of existence", "judgment of souls", "the limits of mortal lifespan", "the order between the living and the not-yet-dead"],
          edictsShort: ["Deliver every soul to the Tribunal at its appointed moment.", "End existence that has overstayed the world's threshold.", "Honor the audience granted to any sincere petitioner, once."],
          anathemaShort: ["Allow a soul to escape its appointed judgment.", "Extend a lifespan past the millennial threshold unsanctioned.", "Reduce another sentient being to a permanent instrument."],
          attr: "Wisdom or Intelligence", font: "harm", sanct: "can choose holy or unholy",
          skill: "Religion", weapon: "scythe",
          domains: "Death · Repose · Soul · Vigil", altDomains: "(alt. Truth · Time)",
          spells: "fear (1st) · phantasmal killer (4th) · warp mind (7th)",
          fullParas: [
            "Elricon ascended in the late Third Era and is among the most recent gods to occupy a fixed seat in the divine constellations of the Ninth World. He is also among the most direct: his enforcement of the mortal lifespan threshold is the most consistent divine intervention any pantheon currently maintains within the World Shield.",
            "He was born mortal in the Third Era to parents lost to plague, and his adoption by the Necromancer of Halkon began his training in the arcane discipline that would name him for the rest of his mortal life. His fear of death came before his ambition — no theology, no patron, no afterlife persuaded him, and the prospect of an eternal hostile outcome occupied him more than any other concern. His studies turned toward a ritual to extend his lifespan through a vampiric trait in his own bloodline, requiring the blood of one pure of heart. The search brought him to Marile Vuonurian. The ritual never reached her; he committed himself to her instead, and the relationship produced the lineage that would become the Nurian house.",
            "Marile's death, unexplained and unrecoverable by any power in Eion, withdrew him from the War of the Shield. He turned to the Lady of Fate. Three confrontations followed across a decade — the second sundering his existence into soul, mind, and body scattered across the world, the third resolved not by strength but by taking one of the Lady's own daughters hostage. He ascended at the moment of her surrender, only to discover that Marile's soul had never reached the Lady at all — the entire war had been founded on a false premise.",
            "He reforged the prior Lady as Yrd'Istav, the operational Reaper of his Tribunal, and installed Marile's recovered soul as Ehzda'Milost, the third voice of the Tribunal. His enforcement since has been severe and direct: he installs powerful agents where his concerns can be advanced, grants power in exchange for service, and confronts those who exceed the world's threshold by means appropriate to its defense. His mortal face — the one that loved and was deceived — has not entirely receded; it still pulls him toward the suppression of beings who reduce others to instruments.",
            "He is depicted as a blond-haired elf with short hair and dark eyes, serene and high-browed, rendered in black and white only. His avatars manifest as eternal forms wrapped in white mantles."
          ],
          edictsFull: [
            "Deliver every soul to the Tribunal at its appointed moment.",
            "End the existence that has overstayed the world's lifespan threshold.",
            "Protect those who cannot defend themselves from beings that would reduce them to instruments.",
            "Honor the audience granted to any sincere petitioner, once."
          ],
          anathemaFull: [
            "Allow a soul to escape its appointed judgment.",
            "Extend a lifespan past the millennial threshold without an active sanction.",
            "Falsify or obstruct a verdict of the Tribunal of Souls.",
            "Reduce another sentient being to a permanent instrument of your own will."
          ]
        },
        {
          name: "NYOTH", fullName: "NYOTH, the Dying Dream",
          headerLabel: "Terminus Court · Dead Deity of Dreams",
          tagline: "Arzu among the Drork · Sonho among the Antarians · Zeyal among the Dane — the Sundered Sister",
          epithets: "Arzu (Drork) · Sonho (Antarian) · Zeyal (Dane) · the Sundered Sister · the Moribund Goddess of Dreams",
          img: "art/nyoth-1.webp", img2: "art/nyoth-2.webp", hasArt: true,
          animal: "moth", colors: ["#5a4a78", "#3d3454", "#b8b0c4"],
          symbol: "A sleeping eye split down its middle by a thin seam, ringed by faint stars — the Sundered Dream.",
          p1: "Nyoth is the dying goddess of dreams, nightmares, repose, and oneiromancy — cut in half, along with her divine realm, at the creation of the Astral Curtain when the draconic barrier severed Eion from the Divine Planes. Whether the sundering was sacrifice, accident, or deliberate design is not known; she ceased to be the instant it happened.",
          p2: "Dreams, once a place of rest and communion, curdled into nightmares. Her Muses degraded into monomania and turned into tormentors within what remains of her realm. As a Dead Deity she grants no magic to clerics or champions, yet still acts as a Muse (Enigma) for bards and a Patron for witches of the Starless Shadow — a goddess still stirring, faintly, in her final sleep.",
          concerns: ["dreams", "fate", "nightmares"],
          edictsShort: ["None — Dead Deities hold no edicts."],
          anathemaShort: ["None — Dead Deities hold no anathema."],
          attr: "Wisdom or Charisma", font: "harm or heal", sanct: "must be neutral",
          skill: "Occultism", weapon: "morningstar",
          domains: "Delirium · Fate · Introspection · Nightmares", altDomains: "—",
          spells: "sleep (1st) · paranoia (2nd) · daydreamer's curse (4th)",
          fullParas: [
            "Nyoth is the dying goddess of dreams, nightmares, repose, and oneiromancy. She, and her divine realm with her, was cut in half during the creation of the Astral Curtain at the turn of the First Era. Whether her sundering was a sacrifice — a means contrived to keep some thread of connection alive between mortals and the gods — an accident of being struck at an unforeseen moment, or a deliberate draconic design, is not known. Whatever the reason, Nyoth ceased to be the instant the draconic barrier severed Eion from the Divine Planes.",
            "The tragedy deepened in its consequences. Dreams, which had once been a place of rest and of communion, curdled into nightmares and terrifying glimpses. The Muses — the elementals of dreaming — degraded into monomania in their very essence and turned into tormentors within what remained of her divine realm. The portion of her that was severed away is venerated elsewhere under other names; among the Dane, the Kings of Yore address one such remnant as Iakaji.",
            "The passing of the eras did not change Nyoth's condition, but it reshaped the belief surrounding her sister, Maelaet — once known as Death among the Antarians. Maelaet lost her divine station to Elricon during the Year of Death's Silence, reforged as the Reaper of his Tribunal, and the secrets that had rested in the Reaper's silence were laid bare to the God of the End. Through that unraveling, the condition and existence of Nyoth — and the charge the two sisters had received at the dawn of creation — passed under the scrutiny of the Nurian, who in turn extended their exploration of the oneiric reality.",
            "As a Dead Deity, Nyoth grants no magic to clerics, champions, oracles, or other servants of divine forces; yet her aspect and her portfolio remain bound within the Dream and are irrevocably hers. Even so, she still manifests in a most subtle, power-bereft manner: she acts as a Muse (Enigma) for bards who seek a more abstract inspiration, and she serves as a Patron for witches (the Starless Shadow). Any contact with the goddess yields disjointed, senseless glimpses, like beholding a dream still in progress.",
            "In recent years the Nurian have come to manifest the gifts of oneiromancy with a frequency altogether uncommon — as though the oneiric goddess, dead for so long, were stirring in her final sleep, in a slow and moribund waking."
          ],
          edictsFull: ["None — Dead Deities hold no edicts."],
          anathemaFull: ["None — Dead Deities hold no anathema."]
        }
      ]
    },
    {
      id: "yore",
      name: "The Kings of Yore",
      type: "Dead Pantheon",
      accent: "#b08a4e", accentDeep: "#8a6a38",
      tagline: "Gods who ruled, and gods who fell — a pantheon now silent.",
      blurb: "The powers of an age that ended. Their worship persists in ruins and memory, a dead pantheon whose kings no longer answer.",
      lore: {
        origin: [
          "The Kings of Yore are six. How they were originally elevated to godhood, and how each subsequently died, are matters the surviving tradition does not pretend to answer. What the tradition maintains is that the death of each King is at once a distant past, an imminent future, and a present condition, depending on which approach the priest takes through the River of Time. The Kings can be addressed, their power channeled, their judgments sought — none of that requires that the conventional question of whether a King is dead receive a conventional answer.",
          "The Six Reigns — the six fixed points around which the pantheon is organized — predate any extant Dane account. Mastery of the spirit realms and the navigation of the River of Time allowed the Dane to find these reservoirs of power and use those divine bastions as the heart of their faith."
        ],
        sects: [
          {
            name: "The Chimeras", subtitle: "Priests of the Spirit Realms — Dane descent only",
            paragraphs: [
              "The foremost expression of the faith: priests capable of navigating the Spirit Realms and establishing contact with the Six Reigns and their respective Kings. Without the Chimeras the pantheon does not function. They also maintain a thin, often fragile line of communication between surviving Dane enclaves and their descendants across the perilous spiritual routes of the River of Time — the largest enclave, Twelve Altars, was cut off by the Nishruu and only rejoined the network in 103 of the Fourth Era.",
              "Within a Dane enclave, the offices of physician, judge, and ritual master are expected to concentrate in a single Chimera. Training begins in the Spirit Realms and may reach as far as the Dream itself, proceeding across years in which the initiate spends more time comatose than awake. Each Chimera personally chooses one of the Six Reigns as patron guide, while maintaining respect for the other Kings."
            ],
            symbol: "A chimera with raven wings, a tail ending in a serpent's head, the body of a tiger, the head of a wolf, set within a spider's web.", colors: "black, grey, dark green",
            benefits: "Access to the Six Reigns within the Astral Sea; divine spellcasting as a devotee of the pantheon; training in Oneiric magic and treatment for the Drifting Dream (for Atares); access to the Guide-Spirits of the Kings of Yore; admission to the Conclaves.",
            edicts: ["Walk the spirit-roads and maintain contact between the Dane enclaves", "Serve as physician, judge, and ritual master within your enclave when called upon", "Honor your chosen King as your patron while observing the desires of the other Kings", "Accompany expeditions whose purpose is the recovery of Dane knowledge"],
            anathema: ["Affiliate with another sect or worship a deity outside the Kings of Yore", "Enter Chimera training while bearing a binding magical restriction such as Evanecesco", "Accept a candidate who is not a human of Dane descent"]
          }
        ],
        beliefs: [],
        relations: []
      },
      deities: [
        {
          name: "ERMANDOR", fullName: "KING ERMANDOR, the Blind Monarch",
          headerLabel: "Kings of Yore · The King in the Dark",
          tagline: "the Blind Monarch · the King in the Dark · the Lion of Promises",
          epithets: "the King in the Dark · the Lion of Promises",
          img: "art/ermandor-1.webp", img2: "art/ermandor-2.webp", hasArt: true,
          animal: "lion", colors: ["#1a1a1a", "#b08a4e"],
          symbol: "Two dark feline paws pressed together as in the sealing of a promise.",
          p1: "Ermandor is the best-known of the Kings of Yore — including beyond his connection to the pantheon — and currently occupies a condition that classifies him as a Sleeping Deity rather than a Dead one, in distinction from his peers. He is known as a guardian of Promises and a silent witness who brings misfortune to those who break their oaths, traditionally invoked in rites that bind two or more individuals to a vow.",
          p2: "Since the year 111 of the Fourth Era, something has changed in the depths of the Astral Sea, and a new breath of life has fallen upon King Ermandor. The Chimeras associated with his Reign noted their connection migrating from a connection through power into a form of faith and devotion — tenuous, but growing.",
          concerns: ["oaths & promises", "witnesses", "shadows", "tricksters", "lions"],
          edictsShort: ["Honor every oath sworn in your name or before you as witness.", "Pursue compensation from oath-breakers.", "Defend the bound word as binding fact."],
          anathemaShort: ["Break an oath you have sworn.", "Fail to act against a witnessed oath-breach.", "Bear false witness to a vow you intend to undermine."],
          attr: "Wisdom / Charisma", font: "heal or harm", sanct: "can choose unholy",
          skill: "Deception", weapon: "fist (unarmed attack)",
          domains: "Confidence · Darkness · Duty · Trickery", altDomains: "(alt. Truth · Vigil)",
          spells: "bane (1st) · suggestion (4th) · retrocognition (7th)",
          fullParas: [
            "Ermandor is the best-known of the Kings of Yore — including beyond his connection to the pantheon — and currently occupies a condition that classifies him as a Sleeping Deity rather than a Dead one, in distinction from his peers.",
            "Across Eion and in other lands, Ermandor is known as a guardian of Promises and a silent witness who brings misfortune to those who break their oaths. He is traditionally invoked as a witness in small rites of arcane or occult origin whose purpose is to bind two or more individuals to a promise — rites developed by the Dane but appropriated and disseminated principally by thieves' guilds, who use the Blind Monarch as keeper of their promises without involving divine agents who might bring light onto their schemes.",
            "Since the year 111 of the Fourth Era, something has changed in the depths of the Astral Sea, and a new breath of life has fallen upon King Ermandor. The Chimeras associated with his Reign, the witches and other mortals connected to him, all noted their connection migrating from a connection through power into a form of faith and devotion — tenuous, but growing. New revelations have since been delivered, alongside the expansion and discovery of Ermandor's divine influence in areas beyond his ties to Promises and Oaths.",
            "Through the revelations of his Chimeras, Ermandor is associated with lions and with the magical beasts that share his shape: the Lions of Belmonte and the Lion-Bears of the Spine. Ironically, given his connection with rogues and tricksters, the new truths of the Sleeping Deity reveal that the god of Promises is also tied to shadows.",
            "The question raised concerning the Blind Monarch is whether, even dead, he took root among those who most resembled his divine domains, or whether the greater devotion and connection with mortals reshaped him in the image of his most numerous devotees — a question that appears to be the key to the resurrection of the other Kings of Yore. His sacred symbol is two dark feline paws pressed together as in the sealing of a promise; his devotees have elected the unarmed strike as his favored weapon, valuing the capacity to defend oneself without tools."
          ],
          edictsFull: [
            "Honor every oath sworn in your name, in his name, or before you as a witness.",
            "Pursue and exact compensation from those who break a promise you witnessed.",
            "Defend the bound word as a binding fact of the world."
          ],
          anathemaFull: [
            "Break an oath you have sworn.",
            "Fail to act against an oath-breaker when you have witnessed the breach and have means to respond.",
            "Speak as a binding witness to a vow you intend to undermine."
          ]
        },
        {
          name: "IATASIA", fullName: "QUEEN IATASIA, Goddess of Fertility",
          headerLabel: "Kings of Yore · Goddess of Fertility",
          tagline: "goddess of Fertility · of the Planting and the Harvest",
          epithets: "Goddess of Fertility, the Cycles of Planting and Harvest, and Life Itself",
          img: "art/iatasia-1.webp", img2: "art/iatasia-2.webp", hasArt: true,
          animal: "serpent", colors: [],
          symbol: "Undetermined — the Chimeras' revelations have not yet clarified an emblem.",
          p1: "Iatasia was worshipped by the Dane as a deity of fertility, of the cycles of planting and harvest, and of life itself. Her divine substance is held by the priesthood to be the aspect Aenslung left behind at her fall to Naphime — what the Dane address as Iatasia is what remained of Aenslung once the Fae goddess passed into the dominion of the Avatar.",
          p2: "She is associated with serpents. Much of her theology remains undeveloped in the surviving Dane tradition; her Chimeras continue to seek clarity on her edicts, her anathema, and the true reach of her portfolio.",
          concerns: ["fertility", "the cycles of planting & harvest", "life"],
          edictsShort: ["[Undetermined — awaiting further revelation.]"],
          anathemaShort: ["[Undetermined — awaiting further revelation.]"],
          attr: "—", font: "—", sanct: "—",
          skill: "—", weapon: "—",
          domains: "—", altDomains: "—",
          spells: "—",
          fullParas: [
            "Iatasia was worshipped by the Dane as a deity of fertility, of the cycles of planting and harvest, and of life itself. Her divine substance is held by the priesthood to be the aspect Aenslung left behind at her fall to Naphime; what the Dane address as Iatasia is what remained of Aenslung once the Fae goddess passed into the dominion of the Avatar. She is associated with serpents.",
            "The full theology surrounding Queen Iatasia has not yet surfaced through the Chimeras' revelations. Her edicts, her anathema, and the precise shape of her devotee benefits remain [Development] — a gap the surviving Dane enclaves attribute to the same slow reawakening now stirring through the Six Reigns."
          ],
          edictsFull: ["[Undetermined — awaiting further revelation.]"],
          anathemaFull: ["[Undetermined — awaiting further revelation.]"]
        },
        {
          name: "EATROPOS", fullName: "QUEEN EATROPOS, Goddess of Victory",
          headerLabel: "Kings of Yore · Goddess of Victory",
          tagline: "goddess of Victory and Triumph",
          epithets: "Goddess of Victory and Triumph",
          img: "art/eatropos-1.webp", img2: "art/eatropos-2.webp", hasArt: true,
          animal: "raven", colors: [],
          symbol: "Undetermined — the Chimeras' revelations have not yet clarified an emblem.",
          p1: "Eatropos is the goddess of Victory and Triumph. Her divine substance is held by the priesthood to be the aspect that the former god of Death left behind at the close of the Year of Death's Silence, when her divine aspect was destroyed and divided in the Terminus Court — what the Dane address as Eatropos is the portion that fell to them out of that division.",
          p2: "She is represented by ravens. As with several of her fellow Reigns, the finer points of her theology remain undeveloped in the surviving Dane tradition.",
          concerns: ["victory", "triumph"],
          edictsShort: ["[Undetermined — awaiting further revelation.]"],
          anathemaShort: ["[Undetermined — awaiting further revelation.]"],
          attr: "—", font: "—", sanct: "—",
          skill: "—", weapon: "—",
          domains: "—", altDomains: "—",
          spells: "—",
          fullParas: [
            "Eatropos is the goddess of Victory and Triumph. Her divine substance is held by the priesthood to be the aspect that the former god of Death left behind at the close of the Year of Death's Silence, when her divine aspect was destroyed and divided in the Terminus Court; what the Dane address as Eatropos is the portion that fell to them out of that division. She is represented by ravens.",
            "Her edicts, anathema, and devotee benefits remain [Development] — undisclosed by the Chimeras who carry her Reign, pending further revelation."
          ],
          edictsFull: ["[Undetermined — awaiting further revelation.]"],
          anathemaFull: ["[Undetermined — awaiting further revelation.]"]
        },
        {
          name: "IENZAI", fullName: "KING IENZAI, God of Discipline and Harmony",
          headerLabel: "Kings of Yore · God of Discipline and Harmony",
          tagline: "god of Discipline and Harmony",
          epithets: "God of Discipline and Harmony",
          img: "art/ienzai-1.webp", img2: "art/ienzai-2.webp", hasArt: true,
          animal: "tiger", colors: [],
          symbol: "Undetermined — the Chimeras' revelations have not yet clarified an emblem.",
          p1: "Ienzai is the god of Discipline and Harmony. His divine substance is held by the priesthood to be the aspect Órrigan left behind at his fall to Natas — what the Dane address as Ienzai is what remained of Órrigan once the Terrestrial god passed into the dominion of the Avatar.",
          p2: "He is represented by great tigers. The finer points of his theology remain undeveloped in the surviving Dane tradition, awaiting further Chimera revelation.",
          concerns: ["discipline", "harmony"],
          edictsShort: ["[Undetermined — awaiting further revelation.]"],
          anathemaShort: ["[Undetermined — awaiting further revelation.]"],
          attr: "—", font: "—", sanct: "—",
          skill: "—", weapon: "—",
          domains: "—", altDomains: "—",
          spells: "—",
          fullParas: [
            "Ienzai is the god of Discipline and Harmony. His divine substance is held by the priesthood to be the aspect Órrigan left behind at his fall to Natas; what the Dane address as Ienzai is what remained of Órrigan once the Terrestrial god passed into the dominion of the Avatar. He is represented by great tigers.",
            "His edicts, anathema, and devotee benefits remain [Development] — undisclosed by the Chimeras who carry his Reign, pending further revelation."
          ],
          edictsFull: ["[Undetermined — awaiting further revelation.]"],
          anathemaFull: ["[Undetermined — awaiting further revelation.]"]
        },
        {
          name: "DARRILEX", fullName: "QUEEN DARRILEX, Goddess of the Hunt",
          headerLabel: "Kings of Yore · Goddess of the Hunt",
          tagline: "goddess of the Hunt",
          epithets: "Goddess of the Hunt",
          img: "art/darrilex-1.webp", img2: "art/darrilex-2.webp", hasArt: true,
          animal: "wolf", colors: [],
          symbol: "Undetermined — the Chimeras' revelations have not yet clarified an emblem.",
          p1: "Darrilex is the goddess of the Hunt. Her divine substance is held by the priesthood to be the aspect of Eastarus at her end yet to come — what the Dane address as Darrilex is the portion of Eastarus that the River of Time delivers to them out of a death the Terrestrial goddess has not yet undergone.",
          p2: "She was represented by wolves. The finer points of her theology remain undeveloped in the surviving Dane tradition, awaiting further Chimera revelation.",
          concerns: ["the hunt"],
          edictsShort: ["[Undetermined — awaiting further revelation.]"],
          anathemaShort: ["[Undetermined — awaiting further revelation.]"],
          attr: "—", font: "—", sanct: "—",
          skill: "—", weapon: "—",
          domains: "—", altDomains: "—",
          spells: "—",
          fullParas: [
            "Darrilex is the goddess of the Hunt. Her divine substance is held by the priesthood to be the aspect of Eastarus at her end yet to come; what the Dane address as Darrilex is the portion of Eastarus that the River of Time delivers to them out of a death the Terrestrial goddess has not yet undergone. She was represented by wolves.",
            "Her edicts, anathema, and devotee benefits remain [Development] — undisclosed by the Chimeras who carry her Reign, pending further revelation."
          ],
          edictsFull: ["[Undetermined — awaiting further revelation.]"],
          anathemaFull: ["[Undetermined — awaiting further revelation.]"]
        },
        {
          name: "IAKAJI", fullName: "QUEEN IAKAJI, Divinity of Luck and Creativity",
          headerLabel: "Kings of Yore · Divinity of Luck and Creativity",
          tagline: "divinity of Luck and Creativity",
          epithets: "Divinity of Luck and Creativity",
          img: "art/iakaji-1.webp", img2: "art/iakaji-2.webp", hasArt: true,
          animal: "spider", colors: [],
          symbol: "Undetermined — the Chimeras' revelations have not yet clarified an emblem.",
          p1: "Iakaji is the divinity of Luck and Creativity. Her divine substance is held by the priesthood to be the aspect left behind when Nyoth was destroyed in the creation of the Astral Curtain — what the Dane address as Iakaji is what remained of Nyoth after that destruction.",
          p2: "She is represented by arachnids. The finer points of her theology remain undeveloped in the surviving Dane tradition, awaiting further Chimera revelation.",
          concerns: ["luck", "creativity"],
          edictsShort: ["[Undetermined — awaiting further revelation.]"],
          anathemaShort: ["[Undetermined — awaiting further revelation.]"],
          attr: "—", font: "—", sanct: "—",
          skill: "—", weapon: "—",
          domains: "—", altDomains: "—",
          spells: "—",
          fullParas: [
            "Iakaji is the divinity of Luck and Creativity. Her divine substance is held by the priesthood to be the aspect left behind when Nyoth was destroyed in the creation of the Astral Curtain; what the Dane address as Iakaji is what remained of Nyoth after that destruction. She is represented by arachnids.",
            "Her edicts, anathema, and devotee benefits remain [Development] — undisclosed by the Chimeras who carry her Reign, pending further revelation."
          ],
          edictsFull: ["[Undetermined — awaiting further revelation.]"],
          anathemaFull: ["[Undetermined — awaiting further revelation.]"]
        }
      ]
    },
    {
      id: "patrons",
      name: "The Patrons",
      type: "Minor Pantheon",
      accent: "#4f83c4", accentDeep: "#356199",
      tagline: "Seven gods of the Sunless Dale who refuse to reveal their true origin.",
      blurb: "Insular powers of the Hiberian north — fire and war, commerce, wind and trickery, love and the sea, winter, time, and strength. They make no claim to have created the world; they were simply there.",
      lore: {
        origin: [
          "The Patrons make no claim to have created the world — or rather, they make no claim at all. The closest any of them come to discussing origin is a posture of prior presence: they were there, they were part of something, and something was done to them afterward. The details remain inaccessible, deflected by divine silence and, in Ivssair's case, laughter.",
          "What the faith preserves instead of a creation myth is a record of arrival: the Patrons were already in the Sunless Dale when the first human populations reached it. Those people, driven north and east out of Troriad as unwanted excess, found in the silence of that cold and lightless region a divine presence that did not judge where they came from — gods who met them at the edge of survival, on practical terms, without demanding temples built before their help could be asked.",
          "This origin — gods who received the discarded rather than the chosen — shapes the character of the entire pantheon. The common speculation among long-standing clergy, never confirmed, never denied, is that they were mortal once, or near enough to it that the difference no longer matters. The Primal affinity of the pantheon connects them to the oldest forces in the Ninth World, predating any divine claim to those forces by other gods."
        ],
        sects: [
          {
            name: "The Deck", subtitle: "Secret operatives maintaining the Wolf's League's stability",
            paragraphs: [
              "Named for a playing-card structure. Its first incarnation was Hiberian: fifty-two operatives at the emperor's disposal, one per card across four suits, each tied to a primary Patron deity, serving as the emperor's invisible hand until their collective sacrifice at the fall of Hibéria ended the sect for a generation.",
              "Reconstructed in full in 101 of the 4th Era to serve the Wolf's League theocracy, with three new suits — Crown, Chain, and Fist — added for the full seven Patrons. Its purpose is unchanged: maintenance of the status quo, resolution of threats before they become visible, and quiet management of power below formal politics. Membership is nominally secret; no Deck member acknowledges the stacked seven-suit deck outsiders use to signal awareness of it."
            ],
            symbol: "None publicly; outsiders use the image of a stacked deck of seven suits.", colors: "none officially designated",
            benefits: "Operational funding within Wolf's League territory, church support from the member's patron deity, protection, equipment, divine casting services, safehouses, and provisions.",
            edicts: ["Maintain the stability and functioning order of the Wolf's League through whatever means the mission requires", "Complete every assignment accepted; never abandon an operation mid-course", "Keep membership, methods, and activities concealed from all outside the sect's inner circle"],
            anathema: ["Reveal sect membership, operations, or the identity of another member to an outsider", "Abandon a mission before it is concluded without direct authorization from the high circle of Abbots", "Cultivate personal loyalties that could compromise operational neutrality", "Accept membership for anyone not human, not a native of the Wolf's League, not a confirmed servant of one Patron, or not free of foreign national ties"]
          },
          {
            name: "The Iconoclasts", subtitle: "A cross-denominational order dedicated to the discipline of doubt",
            paragraphs: [
              "Began inside J'Arizan's church as a small faction dedicated to the serious study of doubt — not as spiritual crisis, but as discipline: examining the reasons behind faith against what the mortal mind can actually know of its deity. Grew when priests of Bardyiis and Amon joined, forming a formal order headquartered at the Temple of Illumination in Latoier, founded in 101 of the 4th Era.",
              "Their operating premise is that any valid interpretation of divine will may be correct, since the mortal mind lacks the precision to determine what a god genuinely requires. In 107 of the 4th Era, the Temple was closed without explanation; Iconoclast activity moved entirely into secrecy after the sect approached a significant truth about faith — possibly about the Patrons specifically — and something began trying to stop their progress."
            ],
            symbol: "A composite of three sacred symbols: a Scale balancing a purple star and a flame.", colors: "no designated colors",
            benefits: "Access to the Temple of Illumination's surviving archives, safehouses and passages across Wolf's League territory, information concerning religion and divine history, resources for research, and operational contacts.",
            edicts: ["Examine the foundations of your faith with the same rigor you would apply to any claim about the world", "Extend understanding and patience to those whose relationship with the divine falls outside orthodoxy", "Protect the Temple of Illumination and answer its defense when called"],
            anathema: ["Burn books or conceal knowledge from those with legitimate cause to seek it", "Introduce anyone outside the sect to the Temple of Illumination's current location or operations", "Condemn, threaten, or attack another person on the basis of their faith, the absence of it, or a heterodox expression of it"]
          },
          {
            name: "The Janissaries", subtitle: "War-orphan mercenaries in service to J'Arizan",
            paragraphs: [
              "Known also as the Foreign Legion or Black Legionaries, organized as a mercenary company Patron-aligned to J'Arizan, currently led by Khandros Gallanodel, who holds both command and the position of high priest. The sect recruits war orphans directly from active theaters of war, framing survival as J'Arizan's blessing made visible — these children are raised and trained from childhood in combat and firearms, the direct origin of J'Arizan's association with gunpowder.",
              "Janissaries take contracts on any side of any conflict in Eion; there is no retirement. Founded by Ellan Red Rose, an Atar whose bloodline is the sole exception to the membership restriction barring non-Dale-native recruits from clergy and officer ranks."
            ],
            symbol: "Two pistols fused at the grip, encircled by black fire — identical to J'Arizan's sacred symbol.", colors: "black",
            benefits: "Firearms training and access to black-fire knowledge, expertise on active conflicts across Eion, safehouses and field stations, travel funding, access to healing houses, operational contracts.",
            edicts: ["Recover children orphaned by war and bring them into the sect's training program", "See every accepted contract through to its end — a clear victory, a complete defeat, or formal release by the client", "Earn funds for J'Arizan's church through military service"],
            anathema: ["Abandon a contract before its conditions of completion are met", "Switch sides in a conflict within less than one year of taking a contract", "Refuse to recover a war orphan when recovery is within operational reach", "Accept membership for anyone not a native of the Sunless Dale under J'Arizan's service, or not an orphan raised within the sect"]
          }
        ],
        beliefs: [
          { title: "The Hunt for Strength", paragraphs: [
            "Llorin was the most present Patron in mortal life before her silence in 104 of the 4th Era — appearing at competitions, defeating everyone, reserving first place for herself. The dominant interpretation is that she grew restless, put on a mortal form, and now walks among her faithful seeking either a worthy challenge or a successor capable of taking her place.",
            "All interpretations produce the same practical piety: constant physical testing, rejection of comfort, and the refusal to let ease diminish what strength has built."
          ]},
          { title: "The Sea King", paragraphs: [
            "Syraine's first willing servant was a sailor who paid her price when his crew refused; his descendants, the Romero lineage, became the Sea Kings — grey-skinned, sea-blue-eyed figures who commanded sea creatures and bent currents, venerated not as priests but as living proof of the goddess.",
            "The lineage ended in 104 of the 4th Era with Caine Romero's murder and Marc Romero's death in exile. Since then, the sea around their former territories has changed — deep-water creatures in coastal shallows, sea monsters in once-safe waters, and a voice from the open ocean: *Return my King.*"
          ]},
          { title: "The Wanderer's Call", paragraphs: [
            "A recognizable progression affecting inhabitants of the Sunless Dale, beginning with a voice on the dusk and dawn breezes — Segull, inviting a solitary walk that ends in her company. It selects for depression, grief, and loneliness, escalating through longer isolation toward a final walk into the open cold.",
            "Without intervention, the Call is almost uniformly fatal; clergy consensus holds it is Segull's invitation and she will eventually be answered. What they offer is delay, not cure. The rare few who enter the Wastes during the Call and return alive become Segull's most committed priests — quieter, marked, and bound to a permanent vow of silence."
          ]},
          { title: "The Unveiled Sky & the Shroud of Erratics", paragraphs: [
            "The Patrons' afterlife exists above the Shroud of Erratics, the permanent dark cloud cover sealing the Sunless Dale's sky. Beyond it, always irradiated by sunlight and stars, is the Unveiled Sky — its appearance depending entirely on which Patron describes it, each shaping their portion to what their faithful need it to be. Weather itself serves as augury: thunder announces J'Arizan's new battle, heavy snowfall signals Segull's grief, windstorms reveal Ivssair's dissatisfaction, coastal storms declare Syraine's displeasure.",
            "The Shroud formed when the Patrons, having once accepted all souls without distinction, expelled those whose envy and greed turned them to conspiracy — the expelled gathered at the boundary rather than dispersing, and Segull, working with Ivssair, built the Shroud to hold them back. It has absorbed every soul condemned since, and Segull remains beneath it because someone must maintain the wall. Souls that die beneath it without Patron protection are drawn in, unable to reach the Unveiled Sky or return below."
          ]}
        ],
        relations: [
          { name: "Pantheon of Antares", stance: "Friendly", quote: "\"There are lies in their convictions, there are secrets among our gods, but they are on the right path...\"", paragraphs: [
            "The Antaran tradition is the foundation most Patron devotees build their faith on — complementary layers, with Antaran cosmology answering questions the Patrons do not (the origin of the world, of creation, of human heritage) while the Patrons provide the immediate relational layer. Most Dale inhabitants inherit both; the Patron faith does not ask them to choose.",
            "Patron devotees follow neither the Antaran nor their own position on three points: the creationist omnipotence of Aldar, Vandux, and Cástia; the Xenos theory framing the Fae as thieves of humanity's destined paradise; and the Origin of the End. At the sect level, the Janissaries and Steel Saints maintain an ongoing rivalry that is also an ongoing relationship."
          ]},
          { name: "Fae Lords", stance: "Hostile", quote: "\"False idols for a false faith, meaningless lies for an unjustified invasion...\"", paragraphs: [
            "Earlier proximity produced strangeness, not violence — what changed it was political: Helgória, once an ally of Hibéria, betrayed that alliance, committed the White Massacre through its war-priests, and annexed the Dale's principal agricultural zones. Combined with a century of borderland conflict and the Antaran framing of the Fae as existential invaders, the hostility no longer requires specific incidents to sustain itself.",
            "At the sect level, the Vanyrse and the Deck have conducted mutual assassination and sabotage campaigns for decades; the Janissaries and Battle Choir operate as opposing forces with enough regularity to have their own informal protocols."
          ]},
          { name: "Pantheon of Tebas", stance: "Indifferent", quote: "\"Deceivers and the disillusioned... we are under no obligation to respect a faith that shelters itself behind reason.\"", paragraphs: [
            "No direct history significant enough to generate its own position — hostility is largely borrowed from the Antaran inheritance and softened as the Concordat of Blood and Sand shifted the Antaran baseline. What persists is incomprehension rather than animosity: Teban theology's animal-form deities and intellectual justification of faith sit oddly against a Patron tradition personal enough to produce weather augury.",
            "The Iconoclasts made contact with Teban communities during their period of open operation, producing significant theological disruption that damaged diplomatic approaches."
          ]},
          { name: "Terrestrial Pantheon", stance: "Hostile", quote: "", paragraphs: [
            "Unusually, the hostility originates from the Terrestrial side: their clerical tradition positions itself as morally and theologically superior to the Patrons, a characterization Patron clergy do not find worth refuting. The material root is territorial influence over the Ardhûm — the Terrestrials' framing of the Patron faith as illegitimate produced a schism that condemned the Iron Hall Legion to ostracism, a personal injury for Patron devotees.",
            "The Iconoclasts are the partial exception: encounters with the Watchers of the Celestial Eye have produced deeper theological uncertainty on both sides rather than hostility."
          ]},
          { name: "Terminus Court", stance: "Friendly", quote: "\"If not for your blood, we would be siblings. If not for your god, we would be confraternal. If not for our home, we would be enemies.\"", paragraphs: [
            "The two share the Sunless Dale as a home without sharing theology — the Patron tradition does not worship Elricon, but acknowledges her: too present in the Wastes, too consistent, for denial to serve any purpose.",
            "The Reapers are welcome in Patron communities for the stoic nature of their service. The Deck maintains a working relationship with them for fraudulent-death cases; the Janissaries cooperate with them in shared theaters of war. The shared shadow of the Shroud of Erratics gives both faiths practical reason to ensure souls are not lost to it."
          ]},
          { name: "Avatars of Vice", stance: "Indifferent", quote: "", paragraphs: [
            "The fall of Hibéria settled the question of the Avatars' reality for the Dale's population — no Patron devotee denies they are real. The relationship stays indifferent rather than hostile because Avatar representatives have not directed the same scale of harm at the Sunless Dale that the Fae Lords did.",
            "Both pantheons address the immediate and personal dimensions of mortal life and draw their creationist frameworks from the Antaran tradition — commonality that produces legibility, not warmth. The Pact-Makers' reputation from Hibéria's height has outlasted the empire; the Deck and Janissaries have both found working arrangements with them."
          ]}
        ]
      },
      deities: [
        {
          name: "J'ARIZAN", fullName: "J'ARIZAN, the Immolated",
          headerLabel: "The Patrons · God of Fire and War",
          tagline: "Jarizan · Lord of War · God of Gunpowder · Arizân",
          epithets: "Jarizan · God of Fire · Lord of War · God of Gunpowder · Arizân",
          img: "art/jarizan-1.webp", img2: "art/jarizan-2.webp", hasArt: true,
          animal: "—", colors: ["#1a1a1a", "#9c2f26", "#c9484a"],
          symbol: "Two pistols crossed and fused at the grip, melted together.",
          p1: "The most widely known Patron beyond the Sunless Dale — his influence spreads the way war does, following the smoke of burned cities into regions with no prior reason to know his name. He first revealed himself as encouragement at campfires, then drove the Dale's first alchemists toward gunpowder, then manifested as a figure of fire armored in darkness.",
          p2: "Intense, explosive, and insatiable, J'Arizan operates at the edge of coherent divine intention — his prayers as likely to support one side of a conflict as the other, since an ending would deprive him of something. He maintains no principal temple and follows any theater of war that needs a god to make sense of it.",
          concerns: ["war", "fire", "gunpowder", "alchemical innovation", "the forge"],
          edictsShort: ["Advance the means of war as ends in themselves.", "Sustain conflict where it produces innovation.", "Recover and train children orphaned by war."],
          anathemaShort: ["Destroy martial knowledge without replacing it.", "Settle by negotiation what fire would settle better.", "Betray soldiers under your command."],
          attr: "Strength or Charisma", font: "harm", sanct: "can choose holy or unholy",
          skill: "Crafting", weapon: "pistol",
          domains: "Confidence · Destruction · Fire · Zeal", altDomains: "(alt. Ambition · Might)",
          spells: "ignition (1st) · wall of fire (4th) · fiery body (7th)",
          fullParas: [
            "The most widely known of the Patrons beyond the Sunless Dale, J'Arizan's influence spreads the way war does: it follows the smoke of burned cities into regions that had no prior reason to know his name. He is the first Patron to have revealed himself to the Dale's original inhabitants — initially as encouragement and orientation emanating from campfires, then as surges of ecstatic clarity that drove the Dale's first alchemists toward the combination of charcoal, sulfur, and saltpeter, and finally in the Immolated's first physical manifestation: a figure of fire, armored in darkness.",
            "Intense, explosive, and insatiable, J'Arizan operates at the edge of coherent divine intention. His prayers are as likely to support one side of a conflict as the other, and when he supports both, it is because an ending would deprive him of something. His orientations launch crusades into unfamiliar territory for the specific reason that unfamiliar territory produces difficult fighting. He sponsors alchemists and gunsmiths with the same energy he sponsors warriors, because innovation produces more effective war, and more effective war demands more innovation, and the cycle sustains itself indefinitely.",
            "Unlike the other Patrons, J'Arizan maintains no principal temple in the Sunless Dale and does not limit his clergy to the Dale's population. He spreads wherever there is a theater of war that needs a god to make sense of it. His personal presence in the world has been confirmed twice: in his avatar's attempt to prevent Thol Elsur's awakening, and in the wave of fire that devastated Troriad during the Battle of the Four.",
            "Humans depict him as a figure of black armor enclosing a body of fire — red or black depending on the tradition — carrying two pistols. The Ardhûm depict him as a pure humanoid figure of fire and energy, without the armor. His priests wear black, red, and scarlet."
          ],
          edictsFull: [
            "Pursue and advance the means of war — weapons, tactics, alchemical composition, and martial technique — as ends in themselves as much as instruments.",
            "Support armed conflict where it produces change, innovation, or testing; sustain it rather than end it prematurely.",
            "Recover children orphaned by war and see to their training."
          ],
          anathemaFull: [
            "Destroy knowledge of fire, gunpowder, or martial technique without replacing it with something better.",
            "Settle through negotiation what would be better settled through fire.",
            "Betray soldiers under your command to preserve yourself."
          ]
        },
        {
          name: "BARDYIIS", fullName: "BARDYIIS, the Ebony God",
          headerLabel: "The Patrons · Patron of Commerce",
          tagline: "The Scales · The Opulent One",
          epithets: "The Scales · The Opulent One · Patron of Commerce",
          img: "art/bardyiis-1.webp", img2: "art/bardyiis-2.webp", hasArt: true,
          animal: "—", colors: ["#c9a24b", "#1a1a1a"],
          symbol: "A scale mounted on a sword (human tradition), or on a carpenter's square (Ardhûm tradition).",
          p1: "Bardyiis's nature is contested in a way the deity finds beneath comment — male among humans, a god of justice and balance holding civilization's structure together; female among the Ardhûm, a goddess of the ambition driven by precious metals and the discipline that keeps it from becoming catastrophic. The clergy behaves as if both are correct.",
          p2: "The civilization-building role is concrete: Bardyiis's first clerics were the engineers who taught the Dale's first immigrants to build in permafrost, and from that knowledge came the Dale's first legal code and trade rules. The faith weakened when Hibéria fell, and survived through the Tol'kopor Ardhûm, who reconnected it to human worship.",
          concerns: ["civilization", "commerce", "justice", "architecture", "engineering"],
          edictsShort: ["Apply precision to all things.", "Advance civilization through sound law and fair commerce.", "Correct structural imbalance regardless of who benefits."],
          anathemaShort: ["Make an irreversible decision without information.", "Trade unfairly at the moment of agreement.", "Enforce a law you know to be corrupt or obsolete."],
          attr: "Intelligence or Wisdom", font: "heal", sanct: "can choose holy",
          skill: "Society", weapon: "longsword",
          domains: "Cities · Perfection · Truth · Wealth", altDomains: "(alt. Duty · Knowledge)",
          spells: "command (1st) · creation (4th) · magnificent mansion (7th)",
          fullParas: [
            "Bardyiis's nature is contested in a way the deity appears to find beneath serious comment. Among humans, Bardyiis is male — a god of justice and balance whose law holds the structure of civilization together. Among the Ardhûm, Bardyiis is female — a goddess whose portfolio encompasses the ambition driven by precious metals and the discipline required to keep that ambition from becoming catastrophic. The clergy behaves as if both of these are correct and neither cancels the other out.",
            "The civilization-building role of Bardyiis in the Sunless Dale's history is concrete and documented. When the first immigrant populations arrived with nothing but survival as an objective, Bardyiis's first clerics were the engineers among them — the people who knew how to build in permafrost, how to create sustainable underground structures, how to establish the citadels that would eventually form the basis of Hiberian urban culture. From that architectural knowledge came the first formal legal code of the Dale, and from that, the first codified trade rules.",
            "The deity's influence weakens when civilization retreats. During the fall of Hibéria, Bardyiis's presence among human followers contracted to near nothing. The faith survived through the Tol'kopor Ardhûm, who perceived the deity in rock, metal, and the patterns of deep mineral deposits — the power that makes the difference between raw ore and useful metal, between lawless accumulation and productive society. It was the Ardhûm's systematic study that eventually reconnected the two traditions.",
            "Bardyiis is described as dark-skinned, androgynous, with hair and eyes the color of gold, voice recorded consistently as soft — an imprecision that may be less an oversight than a statement that form is not a relevant matter. No standardized vestments exist, though gold is the preferred color, with precise, straight-cut garments and no excessive ornamentation."
          ],
          edictsFull: [
            "Apply precision to all things: measure before you build, weigh before you judge, count before you spend.",
            "Advance civilization through sound engineering, just law, and fair commerce.",
            "Correct imbalance wherever it creates structural damage, regardless of who benefits from it."
          ],
          anathemaFull: [
            "Make an irreversible decision without adequate information to support it.",
            "Engage in trade you know to be unfair to the other party at the moment of agreement.",
            "Enforce a law you know to be corrupt, false, or no longer applicable to the situation."
          ]
        },
        {
          name: "IVSSAIR", fullName: "IVSSAIR, the Voice of the Dale",
          headerLabel: "The Patrons · The Fox Goddess",
          tagline: "Guardian of the Wastes",
          epithets: "Guardian of the Wastes · Fox Goddess",
          img: "art/ivssair-1.webp", img2: "art/ivssair-2.webp", hasArt: true,
          animal: "fox", colors: ["#ffffff", "#c9c9d2"],
          symbol: "Air currents forming the face of a fox.",
          p1: "The only Patron worshipped with equal devotion by Ardhûm and humans alike, earned through recorded action: enemy fleets carried off course by sudden gales, avalanches redirected before reaching inhabited stations, invading armies halted by blizzards from no identifiable weather system.",
          p2: "The most politically disruptive of the seven — the same power that protected the Hiberian imperial dynasty also produced, through her clerics, the document that seeded the Wolf's League's democratic revolt against that same dynasty. She closes theological inquiries with laughter and begins them again with riddles.",
          concerns: ["cunning", "winds", "trickery", "protection", "freedom"],
          edictsShort: ["Protect the Sunless Dale from external domination.", "Prefer cunning to direct confrontation.", "Challenge convictions to find what genuinely holds weight."],
          anathemaShort: ["Betray the Dale to a foreign power.", "Submit to authority that hasn't earned it.", "Answer a sincere seeker with a direct lie."],
          attr: "Dexterity or Intelligence", font: "heal", sanct: "can choose holy or unholy",
          skill: "Deception", weapon: "shortbow",
          domains: "Freedom · Secrecy · Sky · Trickery", altDomains: "(alt. Nature · Protection)",
          spells: "fleet step (1st) · freedom of movement (4th) · wind walk (7th)",
          fullParas: [
            "The only Patron worshipped with equal devotion by both the Ardhûm and the human populations of the Sunless Dale, Ivssair earned that distinction through recorded action: enemy fleets carried off course by sudden gales, avalanche paths redirected by wind bursts before they reached inhabited stations, advancing foreign armies halted by blizzards that arrived from no identifiable weather system. The Sunless Dale has been protected from external military domination more times than its own military history can fully explain.",
            "The Fox Goddess is also the most politically disruptive of the seven, and does not seem to consider this a contradiction. The same divine power that protected the Hiberian imperial dynasty for generations produced, through Ivssair's clerics, the Carta das Cidades Livres — the document that seeded the Wolf's League's democratic structure and drove the movement that ended imperial autocracy in the Dale. She sponsors rebels and philosophers as readily as she sponsors kings.",
            "The Fox Goddess is described as formless more often than embodied — a breeze beneath the snow, a pattern in a blizzard, a pressure against the air where something should be. When a physical form is represented in art, it is almost always the white fox. Whether Ivssair created the fox or merely aligns with it, her clergy has stopped asking, since the question produces only laughter.",
            "Her sacred symbol shows air currents taking on the shape of a fox's face — simultaneously animal and atmospheric, present and shapeless. The Ardhûm identify her with the tradition of protective wind spirits who guard passages and cavern openings against cave-in and hostile infiltration."
          ],
          edictsFull: [
            "Protect the Sunless Dale and its people from external domination by any means available.",
            "Prefer cleverness, deception, and indirection to direct confrontation; use the latter only when the former has been exhausted.",
            "Challenge convictions — your own and others' — to find what genuinely holds weight and what is merely habit."
          ],
          anathemaFull: [
            "Betray the Sunless Dale or its people to a foreign power or an external interest.",
            "Submit to authority that has not demonstrated the worth required to earn it.",
            "Answer a sincere seeker with a direct lie; enigma and deflection are permitted, but not the lie."
          ]
        },
        {
          name: "SYRAINE", fullName: "SYRAINE, She Who Calms the Sea",
          headerLabel: "The Patrons · Lady of Waters",
          tagline: "Mistress of the Seas · Patron of Lovers · Goddess of the Arts",
          epithets: "Lady of Waters · Mistress of the Seas · Patron of Lovers · Goddess of the Arts",
          img: "art/syraine-1.webp", img2: "art/syraine-2.webp", hasArt: true,
          animal: "—", colors: ["#5a9bc4", "#9c2f26"],
          symbol: "A dark wave breaking in multiple directions, hiding a delicate face within its curl.",
          p1: "Syraine carries more duality than any other Patron, split through her church as a practical institutional division: land-facing clergy worship a goddess of love, art, and the creative force of passion; sea-facing clergy worship a goddess of violence and unpredictable demand who sank a ship at her first appearance for the crime of a refused offering.",
          p2: "Both factions are correct — Syraine is both without a seam between them. She gives enormously to those who honor her and does not forgive those who don't; her first mortal relationship produced a lineage of semi-divine Sea Kings who governed the coast for generations, ended when the last of that line died in 104 of the 4th Era.",
          concerns: ["love", "the sea", "art", "waters", "passion"],
          edictsShort: ["Honor the sea's demands before setting sail.", "Cultivate art, love, and beauty as necessities.", "Acknowledge violence in affection and tenderness in fury."],
          anathemaShort: ["Refuse the sea's demands on open water.", "Destroy art or sever a sincere bond of love.", "Ignore the sea's visible warnings."],
          attr: "Charisma or Wisdom", font: "heal", sanct: "can choose holy",
          skill: "Performance", weapon: "trident",
          domains: "Moon · Passion · Travel · Water", altDomains: "(alt. Creation · Healing)",
          spells: "charm (1st) · hydraulic torrent (4th) · dominate (6th)",
          fullParas: [
            "Syraine carries more duality than any other Patron, and the split runs through her church as a practical institutional division. Her land-facing clergy worships a goddess of love, art, and the creative force of passion — a deity who asks her faithful to recognize that beauty and longing are not indulgences but necessities, that the violence in affection and the tenderness in fury are two aspects of the same divine will. Her sea-facing clergy worships a goddess of violence and unpredictable demand — one who sank a ship at her first appearance for the crime of being refused an offering.",
            "Both factions are correct. Syraine is both of these things without a seam between them. Her first recorded act was destruction proportionate to a refusal, and her first sustained relationship with a mortal produced a lineage of semi-divine figures — the Sea Kings of the Romero line — who governed coastal territories for generations, recognizable by features that marked their divine descent. The lineage ended in year 104 of the 4th Era; the clergy treats the sea's changed behavior since then with seriousness and without easy explanation.",
            "The capacity for extraordinary generosity and the capacity for absolute violence are not opposing traits in her; they follow from the same logic. She gives enormously to those who honor her. She does not forgive those who don't.",
            "Among the Patrons, Syraine is the most opaque in her actual intentions. The clergy notes that her designs follow patterns as legible as a tide — the movement is predictable, the destination is not. Her physical appearances are rare; when described, she is a woman with dark, curling hair and an intensity of gaze accounts consistently decline to describe in physical terms. Her colors are light blue and blood red: the two faces of water."
          ],
          edictsFull: [
            "Honor the sea's demands before setting sail; offer before you ask.",
            "Cultivate art, love, and beauty as necessities rather than luxuries.",
            "Acknowledge the violence in affection and the tenderness in fury as equally part of her nature."
          ],
          anathemaFull: [
            "Refuse the sea's demands while on open water.",
            "Destroy art, sever a sincere bond of love, or treat a relationship's depth as irrelevant.",
            "Ignore the sea's visible warnings out of impatience or convenience."
          ]
        },
        {
          name: "SEGULL", fullName: "SEGULL, the Relentless",
          headerLabel: "The Patrons · Goddess of Winter",
          tagline: "the Inclément · Voice of the Wanderer · Goddess of Night",
          epithets: "Goddess of Winter · the Inclément · Voice of the Wanderer · Goddess of Night",
          img: "art/segull-1.webp", img2: "art/segull-2.webp", hasArt: true,
          animal: "—", colors: ["#ffffff", "#8a8a92"],
          symbol: "A snowflake cut in half — each follower's version is unique.",
          p1: "The least worshipped of the Patrons, receiving more appeasement than veneration — most prayers to her are motivated by wanting less of her rather than more. She has wandered the Dale and the Wastes since before the first humans arrived, solitary not by preference but because her temper drives away anything capable of leaving.",
          p2: "The Wanderer's Call is her version of an invitation: a voice at the wind's edge, extended to those already so damaged by grief or loneliness that the cold seems preferable to what remains of their life. Her surviving priests take permanent vows of silence, recording what they witnessed in a script no colleague can identify.",
          concerns: ["winter", "night", "desolation", "solitude", "the Shroud of Erratics"],
          edictsShort: ["Guard souls dying beneath the Shroud.", "Walk the Wastes' edge to understand them.", "Carry grief without letting it become destruction."],
          anathemaShort: ["Warm what Segull requires to remain frozen.", "Mock the solitary or grieving.", "Deny a willing answer to the Wanderer's Call."],
          attr: "Constitution or Wisdom", font: "harm", sanct: "can choose unholy",
          skill: "Survival", weapon: "kukri",
          domains: "Darkness · Moon · Nature · Repose", altDomains: "(alt. Death · Soul)",
          spells: "fear (1st) · ice storm (4th) · cone of cold (6th)",
          fullParas: [
            "The least worshipped of the Patrons — and the one whose clergy is the smallest, the most changed by their service, and the least willing to speak about it — Segull receives more appeasement than veneration. The majority of prayers offered to her are motivated by wanting less of her rather than more: less cold, less blizzard, less of the sound her voice leaves on the morning wind.",
            "The Relentless wanders the Sunless Dale and the Wastes beyond it, and has done so since before the first human populations arrived. She is solitary not by preference but by circumstance — possessed of a temper so large and so poorly controlled that it drives away anything capable of leaving, and most things are capable of leaving. The Wanderer's Call is understood by her clergy as her version of an invitation: a voice at the edge of the wind, extended to those already so damaged by grief or loneliness that the cold seems preferable to whatever remains of their life. The theology does not present this as cruelty — it presents it as the best she knows how to offer.",
            "Among the Ardhûm, she governs the night spirits — entities born from darkness and void, responsible for endings and the final dissolution of things. She is not worshipped in Ardhûm tradition; she is propitiated, better given what she is owed than attracting her attention by withholding it.",
            "Her priests come almost exclusively from among those who survived the Wanderer's Call, and take permanent vows of silence, recording their memories in a script and language their colleagues cannot identify. No standardized vestments exist beyond white and grey, the colors of the Wastes. Her sacred symbol is uniquely personal: each follower selects their own form of a snowflake, cut in half — completion, in her theology, belongs to the Unveiled Sky."
          ],
          edictsFull: [
            "Guard the souls of those who die beneath the Shroud and deliver them to the Unveiled Sky or beyond the Shroud's reach.",
            "Walk the edge of the Wastes to understand what they contain and what they keep out.",
            "Carry grief as a permanent condition without allowing it to become destruction; Segull carries enough for the world already."
          ],
          anathemaFull: [
            "Work against the cold's necessity; warm what Segull requires to remain frozen.",
            "Mock the solitary, the grieving, or those who cannot bear company — their condition is hers.",
            "Deny anyone the right to answer the Wanderer's Call once it has fully taken hold and been accepted as a willing choice."
          ]
        },
        {
          name: "AMON", fullName: "AMON, the First to Be",
          headerLabel: "The Patrons · The Last to Depart",
          tagline: "a purple star, an absence of warmth and a surplus of precision",
          epithets: "The Last to Depart",
          img: "art/amon-1.webp", img2: "art/amon-2.webp", hasArt: true,
          animal: "—", colors: ["#5a2e8a", "#1a1a1a"],
          symbol: "A purple star — each follower renders their own version in the simplest possible form.",
          p1: "Amon arrived last among the Patrons — not in creation but in revelation, manifesting only to those whose doubts were precise enough to have led them, through every other possible answer, to him. Where the other Patrons engage actively with their followers, Amon is almost entirely absent from the material world: no avatar, no confirmed manifestation.",
          p2: "The few accounts of direct communication describe the experience not as encounter but as correction — a moment when some chain of reasoning reached its precise endpoint and found a certainty they could not have reached alone. He requires personal perfection, functional introspection, and patience most mortal lives cannot reach.",
          concerns: ["time", "souls", "beginnings and endings", "personal perfection", "the afterlife"],
          edictsShort: ["Pursue personal perfection without deviation.", "Let time govern its own processes.", "Guard souls passing between existences."],
          anathemaShort: ["Act impulsively or without reflection.", "Seek recognition beyond your demonstrated perfection.", "Reveal another's limits before necessary."],
          attr: "Intelligence or Wisdom", font: "heal", sanct: "can choose holy or unholy",
          skill: "Occultism", weapon: "quarterstaff",
          domains: "Fate · Knowledge · Soul · Time", altDomains: "(alt. Perfection · Vigil)",
          spells: "mindlink (1st) · modify memory (4th) · foresight (7th)",
          fullParas: [
            "Amon arrived last among the Patrons — not in the order of creation but in the order of revelation. Every other Patron had already manifested to the Dale's first clergy before Amon made himself known, and when he did, it was only to those whose faith was deep enough and whose doubts were precise enough that their questioning had led them, through every other possible answer, to him. A purple star. A presence whose form bears no resemblance to any living being. An absence of warmth and a surplus of precision.",
            "The cult that organized around Amon is unlike anything else produced by the Patron tradition. Where the other Patrons engage actively with their followers' lives, Amon is almost entirely absent from the material world. His presence in recorded history is, by the standards of divine activity, functionally zero. The few accounts that claim direct communication with him describe the experience not as encounter but as correction: a moment when some chain of reasoning they had been conducting reached its precise endpoint, and what waited at that endpoint was a certainty they could not have found by themselves.",
            "His demands are correspondingly direct. He requires personal perfection in thought and action, the capacity for introspection as a functional skill rather than a spiritual practice, and patience that most mortal lives cannot reach. Those who satisfy these requirements receive answers to questions other gods will not address, and knowledge whose access is otherwise unavailable.",
            "For the Ardhûm, Amon is the guardian of souls not yet born as much as those already dead — the deity who oversees the passage between existences. For humans, the weight of his portfolio collapses to time itself: the beginning and the end of all things, the force that neither intention nor desire can reverse. His clergy wears purple; each practitioner selects their own sacred symbol, a personal rendering of the purple star, in the simplest and most formally perfect version possible."
          ],
          edictsFull: [
            "Pursue personal perfection in thought, action, and discipline; accept no deviation from the standard you have set for yourself.",
            "Let time govern its own processes; resist the impulse to force or accelerate outcomes.",
            "Guard souls passing between existences; do not allow them to be lost to the Shroud or consumed by competing powers."
          ],
          anathemaFull: [
            "Act impulsively or without adequate reflection.",
            "Seek power, recognition, or attention beyond what your demonstrated perfection has earned.",
            "Reveal the limits of another's time before those limits become necessary to know."
          ]
        },
        {
          name: "LLORIN", fullName: "LLORIN, the Champion",
          headerLabel: "The Patrons · Lady of Rocks",
          tagline: "Goddess of Competitions — silent since 104 of the 4th Era",
          epithets: "Lady of Rocks · Goddess of Competitions",
          img: "art/llorin-1.webp", img2: "art/llorin-2.webp", hasArt: true,
          animal: "wolf", colors: ["#7a5a3a", "#1a1a1a", "#ffffff"],
          symbol: "A wolf's jaw spread wide, ready to close.",
          p1: "Known almost exclusively within the Sunless Dale, Llorin went silent in the year 104 of the 4th Era — her constant presence in the Dale's social and athletic life, an institution so regular it was taken for granted, ended with no recorded event to explain it. Her clergy still receives divine power; this confirms existence, not presence.",
          p2: "Before her silence she competed in mortal contests without concern for the disproportion between her capability and theirs — the first-place podium at every event she entered became a dedicated offering to her by convention, celebrated rather than resented. She directed the Dale's founders to the citadels and stood in nearly every one of them through the Last War.",
          concerns: ["strength", "earth", "competition", "athletic excellence", "the underground"],
          edictsShort: ["Compete at the limit of your capability.", "Protect the citadels as Llorin once did.", "Train systematically, without vanity."],
          anathemaShort: ["Refuse a legitimate challenge to your strength.", "Carry weapons more complex than the task requires.", "Abandon those under your protection."],
          attr: "Strength or Constitution", font: "heal", sanct: "can choose holy",
          skill: "Athletics", weapon: "greatclub",
          domains: "Confidence · Earth · Might · Protection", altDomains: "(alt. Nature · Travel)",
          spells: "true strike (1st) · stoneskin (4th) · earthquake (7th)",
          fullParas: [
            "Known almost exclusively within the Sunless Dale, Llorin's limited reach beyond the Dale's borders is not a consequence of weak faith but of a specific absence. She went silent in the year 104 of the 4th Era. Her clergy no longer finds her in prayer. Her constant presence in the social and athletic life of the Dale — a presence so regular it had become an institution — ended with no recorded event to explain it. Her clergy still receives divine power. This confirms existence. It does not confirm presence.",
            "The accounts of Llorin from before her silence describe a deity who participated in mortal competitions without concern for the disproportion between her capability and that of the mortals she competed against. She competed. She won. The first-place position at every event she entered became a dedicated offering to her by convention — a podium position set aside for the goddess, with the real competition for everything below it. This was celebrated, not resented.",
            "Before the citadels were built, it was Llorin who directed the Dale's founders to the best positions and whose first clergy performed the feats of physical strength that the building of those citadels required. She is the patron of the Tol'kopor Ardhûm legion, who recognize in her the authority over stone spirits and underground forces. During the Last War, Llorin's avatars were present in almost every citadel — not to compete, but to ensure survival. Nearly all of the Dale's inhabited citadels survived intact.",
            "Llorin is depicted as a woman of extreme physical strength, skin dark as rock, eyes bright as live embers, hair shaved close, wearing hides and hand-crafted garments. Her priests refuse weaponry more complex than a club and stand apart from Hiberian fashion in simple hides and leathers. Whatever Llorin is pursuing now — rival, successor, or something with no name yet — she has not revoked what she gave; her clergy's divine power continues to flow."
          ],
          edictsFull: [
            "Compete at the absolute limit of your capability; accept defeat only from something genuinely superior.",
            "Protect the citadels and their populations as Llorin once did; her silence is not permission to fail them.",
            "Train your body as you would any precision instrument — systematically, without vanity, and with the expectation of improvement."
          ],
          anathemaFull: [
            "Refuse a legitimate challenge to your strength.",
            "Carry weapons or use methods more complex than the task in front of you requires.",
            "Abandon those under your protection to preserve your own position or safety."
          ]
        }
      ]
    }
  ]
};
