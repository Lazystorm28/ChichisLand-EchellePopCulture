const bddJeu = {
    1: {
        actions: [
            "Réussir un niveau de Pacman en moins de 3 minutes.",
            "Réussir un niveau de Sonic en un seul coup."
        ],
        personnages: {
            "Rayman": [
                { q: "De quelle couleur est le foulard/bandana iconique de Rayman ?", r: "Rouge" },
                { q: "Quel est le nom de son meilleur ami, une grande créature bleue et gourmande ?", r: "Globox" },
                { q: "Quelle particularité anatomique frappe immédiatement quand on regarde Rayman ?", r: "Il n'a ni bras, ni jambes, ni cou (ses membres flottent)" },
                { q: "Comment s'appelle le créateur français de Rayman ?", r: "Michel Ancel" },
                { q: "Dans Rayman 2: The Great Escape, quel peuple de robots extraterrestres envahit le monde ?", r: "Les Robot-Pirates (dirigés par Barbe-Tranchante)" },
                { q: "Quel est le nom de la fée qui donne ses pouvoirs à Rayman dans le tout premier jeu ?", r: "Betilla" },
                { q: "Quel personnage de Rayman Origins et Legends est le souverain de la Lande aux Esprits Frappés ?", r: "Le Magicien (ou Ales Mansay)" },
                { q: "Quel ennemi juré de Rayman, boss final du premier jeu, réapparaît sous forme d'ombre dans Rayman Arena ?", r: "Mr Dark" },
                { q: "Quel spin-off festif sorti sur Wii a fait de l'ombre à Rayman en introduisant des animaux déjantés ?", r: "Rayman contre les Lapins Crétins" },
                { q: "Dans la lore originale, de quoi est constituée la source d'énergie magique du monde de Rayman ?", r: "Les Lums (ou le Grand Protoon)" }
            ],
            "Sonic et Tails": [
                { q: "De quelle couleur est le pelage de Sonic ?", r: "Bleu" },
                { q: "Quel est le vrai prénom de Tails ?", r: "Miles Prower" },
                { q: "Quel est l'objectif principal du Dr. Eggman (Robotnik) ?", r: "Conquérir le monde et construire son empire (Eggmanland)" },
                { q: "Combien de queues possède Tails, lui permettant de voler comme un hélicoptère ?", r: "Deux" },
                { q: "Comment s'appelle l'île flottante d'où est originaire Knuckles ?", r: "Angel Island" },
                { q: "Quel objet Sonic doit-il absolument posséder pour ne pas mourir instantanément lorsqu'il est touché ?", r: "Au moins un anneau (Ring)" },
                { q: "Dans quel jeu sorti en 1998 Sonic fait-il sa première véritable transition vers la 3D intégrale ?", r: "Sonic Adventure" },
                { q: "Quel est le nom de la transformation de Sonic lorsqu'il rassemble les 7 Chaos Emeralds ?", r: "Super Sonic" },
                { q: "Comment s'appelle le rival sombre de Sonic, créé par le professeur Gerald Robotnik ?", r: "Shadow the Hedgehog" },
                { q: "Quel est le nom de l'oiseau robotique ou du modèle de robot de Tails introduit dans Sonic Adventure ?", r: "E-102 Gamma (ou simplement la série E-100)" }
            ],
            "Pac-Man": [
                { q: "Quelle forme géométrique simple a inspiré le design de Pac-Man ?", r: "Un cercle (une pizza à laquelle il manque une part)" },
                { q: "Quels sont les noms anglais des quatre fantômes originaux ?", r: "Blinky, Pinky, Inky et Clyde" },
                { q: "Que doit manger Pac-Man pour pouvoir éphémèrement dévorer les fantômes ?", r: "Une pac-gomme géante (ou Super Pac-Gomme / Power Pellet)" },
                { q: "Quel est le score maximal théorique parfait réalisable dans le jeu d'arcade original ?", r: "3 333 360 points" },
                { q: "Que se passe-t-il au niveau 256 du jeu original ?", r: "Un bug d'affichage (Split-Screen) rend le niveau impossible à terminer" },
                { q: "Quel est le nom de la version féminine de Pac-Man en 1982 ?", r: "Ms. Pac-Man" },
                { q: "Quel fruit est le tout premier bonus à apparaître au centre du labyrinthe ?", r: "La cerise" },
                { q: "Quel studio de développement japonais a créé Pac-Man ?", r: "Namco" },
                { q: "Dans la série animée des années 80, comment s'appelle le grand méchant qui commande les fantômes ?", r: "Mezmaron" },
                { q: "Quel est le nom du créateur de Pac-Man ?", r: "Toru Iwatani" }
            ]
        }
    },
    2: {
        actions: [
            "Imiter l'un de ces personnages au choix."
        ],
        personnages: {
            "Solid Snake": [
                { q: "Dans quelle série de jeux vidéo Solid Snake est-il le protagoniste principal ?", r: "Metal Gear / Metal Gear Solid" },
                { q: "Quel est son accessoire de camouflage en carton le plus célèbre ?", r: "Une boîte en carton" },
                { q: "Qui est le concepteur et réalisateur de cette saga de jeux vidéo ?", r: "Hideo Kojima" },
                { q: "De quel soldat légendaire Solid Snake est-il le clone ?", r: "Big Boss (ou Naked Snake)" },
                { q: "Quel est le véritable prénom de Solid Snake ?", r: "David" },
                { q: "Comment s'appelle son frère jumeau génétique et antagoniste principal du premier MGS ?", r: "Liquid Snake" },
                { q: "Sur quelle île de l'Alaska se déroule l'intrigue de Metal Gear Solid (1998) ?", r: "Shadow Moses" },
                { q: "De quelle maladie ou virus génétique programmé Snake est-il porteur ?", r: "FoxDie" },
                { q: "Quel groupe d'élite Snake affronte-t-il sur la Big Shell dans MGS 2 ?", r: "Dead Cell" },
                { q: "Quelle était l'arme secrète développée à Groznyj Grad dans MGS 3 ?", r: "Le Shagohod" }
            ],
            "Samus Aran": [
                { q: "Quelle est la profession de Samus Aran ?", r: "Chasseuse de primes" },
                { q: "Quelle espèce extraterrestre a élevé Samus après la destruction de sa colonie ?", r: "Les Chozos" },
                { q: "Comment s'appelle l'intelligence artificielle et boss récurrent qui contrôle la planète Zebes ?", r: "Mother Brain" },
                { q: "Quelle transformation permet à Samus de se rouler en boule ?", r: "La Morphing Ball (Boule Morphing)" },
                { q: "Quel est le nom du dragon de l'espace, leader des Pirates de l'Espace ?", r: "Ridley" },
                { q: "Dans quel jeu découvre-t-on pour la première fois que Samus est une femme ?", r: "Metroid (NES, 1986)" },
                { q: "Qu'est-ce que le 'SA-X' dans Metroid Fusion ?", r: "Un parasite X qui a cloné Samus dans sa puissance maximale" },
                { q: "Quelle substance radioactive bleue est au cœur de l'intrigue de la trilogie Metroid Prime ?", r: "Le Phazon" },
                { q: "Quel studio rétro-américain a développé la trilogie Metroid Prime ?", r: "Retro Studios" },
                { q: "Comment s'appelle la planète d'origine de la civilisation Chozo dans Metroid Dread ?", r: "ZDR" }
            ],
            "Pikachu": [
                { q: "De quel type de Pokémon est Pikachu ?", r: "Électrik" },
                { q: "Quelle est la forme de la queue d'un Pikachu femelle ?", r: "Une forme de cœur à l'extrémité" },
                { q: "Quelle pierre évolutive faut-il utiliser pour faire évoluer Pikachu en Raichu ?", r: "La Pierre Foudre" },
                { q: "Quel est le numéro de Pikachu dans le Pokédex national ?", r: "#025" },
                { q: "Dans la série animée, why le Pikachu de Sacha refuse-t-il de rester dans sa Pokéball ?", r: "Il préfère être dehors avec son dresseur et est indépendant" },
                { q: "Comment s'appelle la pré-évolution de Pikachu ?", r: "Pichu" },
                { q: "Quelle capacité signature de type Électrik, introduite en génération 3, Pikachu apprend-il en courant ?", r: "Électacle (Volt Tackle)" },
                { q: "Dans le jeu Détective Pikachu, quelle est la boisson préférée de ce Pikachu ?", r: "Le café noir" },
                { q: "Quel objet tenu, spécifique à Pikachu, double son Attaque et son Attaque Spéciale ?", r: "La Balle Lumière" },
                { q: "Quel organ situé sur les joues de Pikachu produit de l'électricité ?", r: "Les poches électriques (les ronds rouges sur ses joues)" }
            ],
            "Captain Falcon": [
                { q: "De quelle franchise de jeux de course futuristes Captain Falcon est-il le héros ?", r: "F-Zero" },
                { q: "Quel est le nom de son célèbre vaisseau/véhicule bleu ?", r: "Blue Falcon" },
                { q: "Quelle attaque dévastatrice et ultra-populaire Falcon crie-t-il dans Super Smash Bros. ?", r: "Falcon Punch !" },
                { q: "Quelle est la véritable profession secrète de Captain Falcon ?", r: "Chasseur de primes" },
                { q: "Quel est le nom de son clone maléfique créé par Black Shadow ?", r: "Blood Falcon" },
                { q: "Dans quel opus de la série fait-il sa toute première apparition ?", r: "Le tout premier F-Zero (SNES, 1990)" },
                { q: "Comment s'appelle la planète métropole futuriste qui sert souvent de circuit phare ?", r: "Mute City" },
                { q: "Quel est le véritable nom (civil) de Captain Falcon ?", r: "Douglas Jay Falcon" },
                { q: "Dans l'anime F-Zero: GP Legend, qui reprend le rôle de Captain Falcon ?", r: "Rick Wheeler (Ryu Suzaku)" },
                { q: "Quel studio externe a co-développé l'exigeant F-Zero GX sur GameCube ?", r: "Amusement Vision (Sega)" }
            ]
        }
    },
    3: {
        actions: [
            "Imiter l'un de ces personnages au choix.",
            "Manger le plus de chips et bonbons possible en 30 secondes en imitant Taz."
        ],
        personnages: {
            "Bip-Bip et Coyote": [
                { q: "Quel est le nom de l'entreprise fictive à laquelle Coyote commande ses gadgets ?", r: "ACME" },
                { q: "Quel cri caractéristique pousse Bip-Bip en courant ?", r: "Bip-Bip ! (ou Meep-Meep !)" },
                { q: "Quel est l'oiseau réel qui a inspiré le personnage de Bip-Bip ?", r: "Le Grand Géocoucou (Roadrunner en anglais)" },
                { q: "Quel célèbre réalisateur d'animation a créé ce duo pour la Warner Bros. ?", r: "Chuck Jones" },
                { q: "Dans quel type d'environnement américain se déroulent leurs courses-poursuites ?", r: "Le désert du Sud-Ouest américain (Arizona / Nouveau-Mexique)" },
                { q: "Quel est le nom scientifique fictif (en faux latin) donné à Coyote au début ?", r: "Carnivorous vulgaris" },
                { q: "Quelle est la seule chose que Coyote réussit parfois à attraper à la place de Bip-Bip ?", r: "Des ennuis / ses propres pièges" },
                { q: "Quel panneau Coyote sort-il souvent juste avant de tomber d'une falaise ?", r: "Un panneau humoristique (ex: 'Ouch', 'In gual we trust', 'Help')" },
                { q: "Dans quel film spatial mêlant animation et prises de vues réelles de 1996 le duo apparaît-il ?", r: "Space Jam" },
                { q: "Quelle règle d'or concernant les dialogues de Coyote est respectée dans la série ?", r: "Coyote ne doit jamais parler (sauf dans de rares spin-offs avec Bugs Bunny)" }
            ],
            "Taz": [
                { q: "De quel véritable animal australien s'inspire le personnage de Taz ?", r: "Le diable de Tasmanie" },
                { q: "Quel est le nom complet de Taz ?", r: "Le Diable de Tasmanie (Tasmanian Devil)" },
                { q: "Quel moyen de locomotion ultra-rapide Taz utilise-t-il en tournant sur lui-même ?", r: "Une tornade / un tourbillon" },
                { q: "Comment s'appelle la femme de Taz, apparue dans la série animée Taz-Mania ?", r: "She-Devil" },
                { q: "Quel est le plat ou l'animal que Taz cherche constamment à dévorer face à Bugs Bunny ?", r: "Le lapin (ou n'importe quoi d'autre, il mange tout)" },
                { q: "Dans quelle décennie Taz est-il apparu pour la première fois à l'écran ?", r: "Les années 1950 (1954 précisément)" },
                { q: "Quel comédien de doublage américain légendaire a créé la voix de Taz ?", r: "Mel Blanc" },
                { q: "Dans la série Taz-Mania, quel est le métier du père de Taz, Hugh ?", r: "Il adore le golf et faire des mots croisés (il est très calme et bourgeois)" },
                { q: "Quel jeu vidéo sorti sur PS2/GameCube met en scène Taz fuyant un zoo spatial ?", r: "Taz: Wanted" },
                { q: "Quel trait de caractère surprenant possède le père de Taz par rapport à la sauvagerie de son fils ?", r: "Il est extrêmement calme, parle de manière posée et boit du thé" }
            ],
            "Titi et Grosminet": [
                { q: "Quels sont les noms originaux (en anglais) de Titi et Grosminet ?", r: "Tweety Pie et Sylvester" },
                { q: "Quelle phrase fétiche Titi prononce-t-il toujours lorsqu'il aperçoit Grosminet ?", r: "Z'ai cru voir un rominet ! (I tawt I taw a puddy tat!)" },
                { q: "Comment s'appelle la vieille dame propriétaire des deux animaux ?", r: "Mémé (Granny)" },
                { q: "De quelle couleur est le plumage de Titi ?", r: "Jaune" },
                { q: "Quel autre animal de compagnie (un chien de garde) protège souvent Titi ?", r: "Hector le bouledogue" },
                { q: "Dans quel type de cage ou d'objet Titi passe-t-il la majorité de son temps ?", r: "Une cage à oiseaux dorée suspendue" },
                { q: "Quel court-métrage de ce duo a remporté l'Oscar en 1947 ?", r: "Tweetie Pie (La Tarte au Titi)" },
                { q: "Quel est le problème d'élocution caractéristique de Titi ?", r: "Il rhotacise / zoze (il remplace les ch/z par des z, parle comme un bébé)" },
                { q: "Dans la série Les Mystères de Titi et Grosminet, quel est le rôle de Mémé ?", r: "Détective privée" },
                { q: "Quel est le nom du fils de Grosminet, qui a souvent honte de son père ?", r: "Sylvestre Junior" }
            ]
        }
    },
    4: {
        actions: [
            "Imiter un des personnages de Tintin au choix.",
            "Chanter au karaoké la chanson thème de Ghostbusters.",
            "Chanter au karaoké le générique de Scooby-Doo."
        ],
        personnages: {
            "Ghostbusters": [
                { q: "Quels sont les noms de famille des trois scientifiques originaux ?", r: "Venkman, Stantz et Spengler" },
                { q: "Quel est le nom du fantôme vert goinfre et gluant qui devient leur mascotte ?", r: "Bouffe-tout (Slimer)" },
                { q: "Quelle règle de sécurité absolue les chasseurs ne doivent-ils jamais enfreindre ?", r: "Ne jamais croiser les effluves (les rayons de leurs packs)" },
                { q: "Comment s'appelle le véhicule des Ghostbusters, une ambulance modifiée ?", r: "Ecto-1" },
                { q: "Quel dieu sumérien de la destruction est le boss final du premier film ?", r: "Gozer" },
                { q: "Sous quelle forme géante et comestible ce dieu se manifeste-t-il dans la rue ?", r: "Le Bibendum Chamallow (Stay Puft Marshmallow Man)" },
                { q: "Quelle est l'adresse de la caserne de pompiers qui leur sert de QG ?", r: "14 North Moore Street (à New York)" },
                { q: "Qui a écrit et interprété la chanson thème Ghostbusters ?", r: "Ray Parker Jr." },
                { q: "Quel tableau maléfique abrite l'esprit d'un tyran dans Ghostbusters 2 ?", r: "Vigo des Carpates" },
                { q: "Comment s'appelle la secrétaire cynique mais dévouée de l'équipe ?", r: "Janine Melnitz" }
            ],
            "Scooby-Doo": [
                { q: "De quelle race de chien est Scooby-Doo ?", r: "Grand Danois (Dogue Allemand)" },
                { q: "Quel est le nom complet de Scooby-Doo ?", r: "Scoobert-Doo" },
                { q: "Comment s'appelle le van coloré à bord duquel voyage le groupe ?", r: "La Mystery Machine" },
                { q: "Quelle est la friandise préférée de Scooby et Sammy ?", r: "Les Scooby-Snacks" },
                { q: "Quel membre de l'équipe porte des lunettes et résout les énigmes par son intelligence ?", r: "Vélma (Daphné est la rousse, Fred le blond)" },
                { q: "Qui est le neveu minuscule et courageux de Scooby-Doo ?", r: "Scrappy-Doo" },
                { q: "Quelle phrase les coupables prononcent-ils presque toujours une fois démasqués ?", r: "Et j'aurais réussi si ce n'était ces satanés gamins et leur cabot !" },
                { q: "Dans quelle ville fictive de Californie le groupe a-t-il ses habitudes ?", r: "Coolsville" },
                { q: "Quel est le véritable prénom de Sammy en version originale (Shaggy) ?", r: "Norville" },
                { q: "En quelle année la toute première série Scooby-Doo a-t-elle été diffusée ?", r: "1969" }
            ],
            "Tintin": [
                { q: "Quelle est la profession officielle de Tintin ?", r: "Reporter (Journaliste)" },
                { q: "De quelle race est son fidèle chien Milou ?", r: "Fox-terrier à poil dur blanc" },
                { q: "Quelle est l'exclamation ou le juron fétiche du Capitaine Haddock impliquant des crustacés ?", r: "Mille sabords ! / Moule à gaufres ! / Cyrano de Bergerac !" },
                { q: "Comment s'appelle le château appartenant aux ancêtres de Haddock ?", r: "Le château de Moulinsart" },
                { q: "Quels sont les noms des deux détectives policiers maladroits et moustachus ?", r: "Dupond et Dupont" },
                { q: "Quel est le premier album de Tintin publié par Hergé ?", r: "Tintin au pays des Soviets" },
                { q: "Quel pays fictif d'Europe de l'Est, rival de la Bordurie, Tintin visite-t-il dans Le Sceptre d'Ottokar ?", r: "La Syldavie" },
                { q: "Quel inventeur sourdingue est inspiré du scientifique Auguste Piccard ?", r: "Le Professeur Tournesol" },
                { q: "Dans quel album Tintin marche-t-il pour la première fois sur la Lune ?", r: "On a marché sur la Lune" },
                { q: "Quel est le nom du milliardaire excentrique qui embarque Tintin dans son jet dans Vol 714 ?", r: "Laszlo Carreidas" }
            ]
        }
    },
    5: {
        actions: [
            "Donner une catchphrase (réplique culte) du personnage pioché de manière convaincante."
        ],
        personnages: {
            "Buzz l'Éclair": [
                { q: "De quelle organisation spatiale fictive Buzz l'Éclair est-il membre ?", r: "Star Command" },
                { q: "Quelle est sa réplique fétiche devenue culte ?", r: "Vers l'infini et au-delà !" },
                { q: "Qui est l'empereur maléfique, ennemi juré de Buzz ?", r: "L'Empereur Zurg" },
                { q: "Quelle est la particularité visuelle du rayon laser de Buzz sur son bras ?", r: "C'est juste une petite LED rouge qui clignote (ce n'est pas un vrai laser)" },
                { q: "Quel jouet de cow-boy est le meilleur ami de Buzz ?", r: "Woody" },
                { q: "Dans Toy Story 2, quelle version alternative de Buzz remplace temporairement l'original ?", r: "Le Buzz avec la ceinture anti-gravité neuve" },
                { q: "Quelle langue Buzz se met-il à parler couramment après une réinitialisation dans Toy Story 3 ?", r: "L'espagnol (mode andalou)" },
                { q: "Quel est le nom de la planète d'origine de l'Empereur Zurg ?", r: "Planète X" },
                { q: "Quel acteur prête sa voix à Buzz l'Éclair dans la version originale des films Toy Story ?", r: "Tim Allen" },
                { q: "Dans le film spin-off Lightyear (2022), comment s'appelle le chat robotique ?", r: "Sox" }
            ],
            "Dingo": [
                { q: "Quel animal anthropomorphe est Dingo ?", r: "Un chien" },
                { q: "Comment s'appelle le fils unique de Dingo ?", r: "Max" },
                { q: "Quel est le rire caractéristique de Dingo en version originale ?", r: "Ah-hyuck !" },
                { q: "Sous quel pseudonyme de super-héros Dingo se transforme-t-il avec des super-cacahuètes ?", r: "Super Dingo (Super Goofy)" },
                { q: "Quel sport ou activité Dingo tente-t-il d'expliquer maladroitement dans ses courts-métrages ?", r: "Le ski, le football, le baseball, la musculation (les sketches 'How to...')" },
                { q: "Quel était le nom original de Dingo lors de sa première apparition en 1932 ?", r: "Dippy Dawg" },
                { q: "Comment s'appelle la vache excentrique présentée comme sa petite amie ?", r: "Clarabelle" },
                { q: "Dans la série de jeux vidéo Kingdom Hearts, quelle arme Dingo utilise-t-il ?", r: "Un bouclier" },
                { q: "Quel est le nom de la voiture rouge et jaune customisée de Dingo ?", r: "La Dingomobile" },
                { q: "Dans le film Dingo et Max, vers quelle ville font-ils un road trip pour voir Powerline ?", r: "Los Angeles" }
            ],
            "Donald Duck": [
                { q: "De quelle couleur est le costume de marin traditionnel de Donald ?", r: "Bleu (avec un nœud rouge)" },
                { q: "Quels sont les prénoms des trois neveux espiègles de Donald ?", r: "Riri, Fifi et Loulou" },
                { q: "Quelle est la relation familiale exacte entre Donald et Picsou ?", r: "Picsou est l'oncle maternel de Donald" },
                { q: "Comment s'appelle la fiancée éternelle de Donald ?", r: "Daisy Duck" },
                { q: "Quel est le nom du cousin de Donald qui a une chance insolente ?", r: "Gontran Bonheur" },
                { q: "Sous quel nom de super-héros nocturne Donald protège-t-il Donaldville dans les BD ?", r: "Fantomiald" },
                { q: "Quel est le nom du savant fou et inventeur officiel de Donaldville ?", r: "Géo Trouvetou" },
                { q: "Dans quel court-métrage de propagande de 1943 Donald fait-il un cauchemar dans une usine nazie ?", r: "Der Fuehrer's Face" },
                { q: "Comment s'appelle la sœur jumelle de Donald (mère de Riri, Fifi, Loulou) ?", r: "Della Duck" },
                { q: "Quel volatile excentrique d'Amérique du Sud accompagne Donald et José Carioca ?", r: "Panchito Pistoles" }
            ],
            "Bart Simpson": [
                { q: "Quel est le deuxième prénom (middle name) de Bart Simpson ?", r: "Jo-Jo (Bartholomew Jo-Jo Simpson)" },
                { q: "Quelle phrase de défi ou d'insolence Bart crie-t-il souvent en anglais ?", r: "Eat my shorts! (Mange mon short !)" },
                { q: "Quel est le nom de l'alter ego de Bart lorsqu'il fait des graffitis ?", r: "El Barto" },
                { q: "Comment s'appelle l'animateur de télévision pour enfants dont Bart est fan ?", r: "Krusty le clown" },
                { q: "Quel criminel aux cheveux longs veut obsessionnellement tuer Bart ?", r: "Tahiti Bob (Sideshow Bob)" },
                { q: "Quel est le nom du meilleur ami à lunettes de Bart ?", r: "Milhouse Van Houten" },
                { q: "Quelle bêtise récurrente Bart fait-il au téléphone au bar de Moe ?", r: "Des canulars téléphoniques avec des jeux de mots (ex: 'M. Sékunegrossetaf')" },
                { q: "Dans l'épisode Treehouse of Horror VII, comment s'appelle son jumeau maléfique caché ?", r: "Hugo" },
                { q: "Quelle est la marque et la couleur de l'objet de transport fétiche de Bart ?", r: "Un skateboard vert" },
                { q: "Quel est le nom du chien de la famille Simpson ?", r: "Petit Papa Noël (Santa's Little Helper)" }
            ],
            "Ronflex": [
                { q: "Quelle est l'activité principale de Ronflex tout au long de la journée ?", r: "Dormir et manger" },
                { q: "Quel objet musical indispensable doit-on utiliser pour le réveiller dans Rouge/Bleu ?", r: "La Poké Flûte" },
                { q: "De quelle pré-évolution Ronflex est-il l'évolution ?", r: "Goinfrex" },
                { q: "Quel est le type de Ronflex ?", r: "Normal" },
                { q: "Combien de kilos pèse un Ronflex moyen selon le Pokédex ?", r: "460 kg" },
                { q: "Quelle Capacité Z exclusive Ronflex peut-il utiliser dans Soleil et Lune ?", r: "Giga-Impact Apocalypse (Pulverizing Pancake)" },
                { q: "Dans le jeu Pokémon Sleep, quel est le rôle central de Ronflex ?", r: "Il dort au centre de l'île et on étudie les styles de dodo au tour de lui grâce à sa puissance" },
                { q: "Quelle partie de son corps sert de terrain de jeu pour les enfants Pokémon ?", r: "Son gros ventre tout doux" },
                { q: "Quelle est la seule condition pour qu'un Goinfrex évolue en Ronflex ?", r: "Avoir un niveau de Bonheur au maximum" },
                { q: "Sous sa forme Gigamax, qu'est-ce qui pousse sur le ventre géant de Ronflex ?", r: "Un parc avec un arbre et de la pelouse (un petit écosystème)" }
            ],
            "Bender (Futurama)": [
                { q: "De quel métal Bender prétend-il être composé à 40 % ?", r: "Titane / Zinc / Fer (le pourcentage change tout le temps selon son mensonge)" },
                { q: "Quelle est la fonction première pour laquelle Bender a été construit ?", r: "Tordre des barres de métal (Bending)" },
                { q: "De quelle substance Bender a-t-il besoin pour s'alimenter, sous peine de tomber en panne ?", r: "De l'alcool (bière, etc.)" },
                { q: "Quelle est l'expression favorite et insultante de Bender ?", r: "Prends mon cul de métal brillant ! (Bite my shiny metal ass!)" },
                { q: "Dans quelle ville du Mexique Bender a-t-il été fabriqué ?", r: "Tijuana" },
                { q: "Comment s'appelle le jumeau maléfique (qui porte une petite barbe) de Bender ?", r: "Flexo" },
                { q: "Quel est le numéro de l'appartement dans lequel Fry et Bender vivent ?", r: "Appartement 00100100 (le symbole du dollar $ en binaire)" },
                { q: "De quel personnage de la série Bender est-il secrètement le plus jaloux ?", r: "Nibbler (le petit animal de Leela qui a toute l'attention)" },
                { q: "Quelle est la religion ou le culte robotique secret auquel Bender adhère ?", r: "La Robotologie" },
                { q: "Quel art culinaire très particulier Bender tente-t-il de maîtriser dans un épisode ?", r: "La cuisine (bien qu'il n'ait pas de goût et empoisonne tout le monde)" }
            ],
            "Les Tortues Ninja": [
                { q: "Quels sont les prénoms des quatre tortues ninja ?", r: "Leonardo, Raphael, Donatello et Michelangelo" },
                { q: "De quel maître rat reçoivent-elles leur entraînement ?", r: "Maître Splinter" },
                { q: "Quelle est la nourriture préférée absolue des tortues ?", r: "La pizza" },
                { q: "Comment s'appelle le grand méchant en armure métallique, leader du Clan des Foot ?", r: "Shredder" },
                { q: "Quelle journaliste humaine portant une combinaison jaune est leur alliée ?", r: "April O'Neil" },
                { q: "Quels animaux mutants servent d'hommes de main stupides à Shredder ?", r: "Bebop (phacochère) et Rocksteady (rhinocéros)" },
                { q: "Quelle arme blanche traditionnelle utilise Raphaël ?", r: "Les deux Sais (sortes de dagues à trois pointes)" },
                { q: "Comment s'appelle la dimension extraterrestre d'où vient le cerveau nommé Krang ?", r: "La Dimension X" },
                { q: "Quel justicier au masque de hockey utilise des crosses de sport ?", r: "Casey Jones" },
                { q: "Quel est le nom de la substance mutagène chimique qui a transformé les tortues ?", r: "Le Mutagène (ou le 'Ooze' / Limon)" }
            ]
        }
    },
    6: {
        actions: [
            "Imiter Donkey Kong bruyamment.",
            "Faire la chorégraphie iconique des Power Rangers.",
            "Danser la Batusi (la danse mythique de Batman des années 60)."
        ],
        personnages: {
            "Donkey Kong": [
                { q: "Quel type de fruit Donkey Kong adore-t-il par-dessus tout ?", r: "La banane" },
                { q: "Quel est le nom de son jeune acolyte casquetté qui l'accompagne ?", r: "Diddy Kong" },
                { q: "Dans le jeu d'arcade de 1981, quel personnage (futur Mario) devait sauver la demoiselle ?", r: "Jumpman" },
                { q: "Comment s'appelle la tribu de crocodiles dirigée par King K. Rool ?", r: "Les Kremlings" },
                { q: "Quel est le nom du vieux singe grincheux, qui est le DK original de 1981 ?", r: "Cranky Kong" },
                { q: "Quel studio britannique a révolutionné la franchise en créant DK Country sur SNES ?", r: "Rareware (Rare)" },
                { q: "Quel instrument de percussion a eu le droit à ses jeux dédiés avec DK sur GameCube ?", r: "Les Bongos (DK Bongos)" },
                { q: "Comment s'appelle la petite amie de Diddy Kong aux couettes dorées ?", r: "Dixie Kong" },
                { q: "Dans Donkey Kong 64, quel est le nom du grand singe costaud ?", r: "Chunky Kong" },
                { q: "Comment s'appelle la rhinocéros amicale que Donkey Kong peut chevaucher ?", r: "Rambi" }
            ],
            "les Power Rangers": [
                { q: "De quelle couleur est le leader traditionnel de la majorité des équipes ?", r: "Rouge" },
                { q: "Comment s'appellent les robots géants que les Rangers pilotent ?", r: "Les Zords (ou Megazord quand ils s'assemblent)" },
                { q: "Quelle sorcière extraterrestre libérée après 10 000 ans est la méchante originale ?", r: "Rita Repulsa" },
                { q: "Quel est le nom de l'entité cosmique (tête flottante dans un tube) qui guide les Rangers ?", r: "Zordon" },
                { q: "Quel Ranger, d'abord introduit comme le Ranger Vert maléfique, est le plus iconique ?", r: "Tommy Oliver" },
                { q: "Comment s'appelle le duo de lycéens loufoques et maladroits ?", r: "Bulk et Skull" },
                { q: "Dans quelle ville fictive de Californie se déroule l'action de la première série ?", r: "Angel Grove" },
                { q: "Quel est le nom du petit robot d'assistance doré qui crie toujours 'Ai-ai-ai-ai-ai !' ?", r: "Alpha 5" },
                { q: "Quelle saison des Power Rangers (2001) implique des forces de police temporelles ?", r: "Power Rangers : Force du Temps (Time Force)" },
                { q: "De quelle franchise de séries japonaises les Power Rangers réutilisent-ils les images ?", r: "Super Sentai" }
            ],
            "Flash": [
                { q: "Quel est le nom civil du Flash le plus emblématique ?", r: "Barry Allen" },
                { q: "Quelle est la source d'énergie cosmique qui donne leurs pouvoirs aux Flash ?", r: "La Force Véloce (Speed Force)" },
                { q: "Dans quelle ville fictive américaine Flash officie-t-il ?", r: "Central City" },
                { q: "Quelle est la profession scientifique de Barry Allen au sein de la police ?", r: "Scientifique de la police scientifique (Légiste / Chimiste judiciaire)" },
                { q: "Quel bolide maléfique venu du futur, portant un costume jaune, est son pire ennemi ?", r: "Néachron / Le Flash Inversé (Reverse-Flash / Eobard Thawne)" },
                { q: "Comment s'appelle l'événement majeur des comics (2011) où Flash modifie la timeline ?", r: "Flashpoint" },
                { q: "Quel est le nom du tout premier Flash (celui avec le casque métallique ailé) ?", r: "Jay Garrick" },
                { q: "Quel groupe de super-vilains s'est associé spécifiquement pour combattre Flash ?", r: "Les Lascars (The Rogues)" },
                { q: "Quel est le nom du jeune acolyte de Flash, qui deviendra le 3e Flash ?", r: "Wally West" },
                { q: "Quel appareil inventé par Barry lui permet de voyager dans le multivers via ses vibrations ?", r: "Le Tapis roulant cosmique (Cosmic Treadmill)" }
            ],
            "Batman": [
                { q: "Quel est le véritable nom du milliardaire caché sous le masque de Batman ?", r: "Bruce Wayne" },
                { q: "Comment s'appellent les parents de Bruce Wayne, dont le meurtre a tout déclenché ?", r: "Thomas et Martha Wayne" },
                { q: "Quel est le nom du fidèle majordome et confident de Bruce Wayne ?", r: "Alfred Pennyworth" },
                { q: "Comment s'appelle l'asile psychiatrique où sont enfermés la plupart de ses ennemis ?", r: "L'Asile d'Arkham (Arkham Asylum)" },
                { q: "Quel vilain a brisé le dos de Batman lors du célèbre arc Knightfall ?", r: "Bane" },
                { q: "Quel est le nom civil du premier Robin, devenu plus tard Nightwing ?", r: "Dick Grayson" },
                { q: "Qui est le chef de la Ligue des Ombres et père de Talia al Ghul ?", r: "Ra's al Ghul" },
                { q: "Comment s'appelle la ville sombre que Batman protège ?", r: "Gotham City" },
                { q: "Quel procureur de la ville est devenu le criminel Double-Face ?", r: "Harvey Dent" },
                { q: "Dans quel comic de Frank Miller de 1986 Batman affronte-t-il Superman ?", r: "The Dark Knight Returns" }
            ],
            "Captain América": [
                { q: "Quel est le véritable nom (civil) de Captain America ?", r: "Steve Rogers" },
                { q: "En quelle année (comics) fait-il sa première apparition en frappant Hitler ?", r: "1941" },
                { q: "De quel métal fictif ultra-résistant du Wakanda est fait son bouclier ?", r: "Le Vibranium" },
                { q: "Comment s'appelle la formule chimique qui l'a transformé en super-soldat ?", r: "Le sérum du super-soldat" },
                { q: "Comment s'appelle son meilleur ami, qui devient le Soldat de l'Hiver ?", r: "Bucky Barnes" },
                { q: "Quelle organisation terroriste dirigée par Crâne Rouge est son ennemie ?", r: "Hydra" },
                { q: "Pendant combien d'années environ Steve Rogers est-il resté congelé ?", r: "Environ 70 ans" },
                { q: "Qui sont les deux auteurs de comics légendaires qui ont créé Captain America ?", r: "Joe Simon et Jack Kirby" },
                { q: "Comment s'appelle l'agent secret britannique, grand amour de Steve ?", r: "Peggy Carter" },
                { q: "Dans les comics, quel héros afro-américain reprend le bouclier après sa retraite ?", r: "Sam Wilson (Le Faucon)" }
            ],
            "Iron man": [
                { q: "Quel est le nom complet de l'inventeur milliardaire sous l'armure ?", r: "Tony Stark (Anthony Edward Stark)" },
                { q: "Quel appareil implanté dans sa poitrine le maintient en vie ?", r: "Le Réacteur Arc" },
                { q: "Comment s'appelle l'IA qui gère l'armure et la maison de Tony au début ?", r: "J.A.R.V.I.S." },
                { q: "Quel est le nom de l'armure massive conçue pour contrer les rages de Hulk ?", r: "Hulkbuster" },
                { q: "Qui est la secrétaire dévouée d'Stark Industries qui épouse Tony ?", r: "Pepper Potts" },
                { q: "Quel nom porte la première armure grise rudimentaire construite dans la grotte ?", r: "Mark I (Mark 1)" },
                { q: "Quel terroriste et leader des Dix Anneaux est historiquement son rival ?", r: "Le Mandarin" },
                { q: "De quel problème de santé majeur Tony Stark souffre-t-il dans l'arc mythique des comics ?", r: "L'alcoolisme (arc 'Le Démon dans la bouteille')" },
                { q: "Comment s'appelle le meilleur ami militaire de Tony qui pilote War Machine ?", r: "James 'Rhodey' Rhodes" },
                { q: "Quel événement tragique des comics oppose Iron Man à Captain America ?", r: "Civil War" }
            ],
            "Superman": [
                { q: "Quel est le nom kryptonien de naissance de Superman ?", r: "Kal-El" },
                { q: "Sur quelle planète lointaine Superman est-il né ?", r: "Krypton" },
                { q: "Dans quelle petite ville rurale du Kansas Clark Kent a-t-il été élevé ?", r: "Smallville" },
                { q: "Quelle est la seule faiblesse minérale de Superman ?", r: "La Kryptonite" },
                { q: "Pour quel grand journal de Metropolis Clark Kent travaille-t-il ?", r: "Le Daily Planet" },
                { q: "Comment s'appelle le milliardaire chauve et ennemi juré de Superman ?", r: "Lex Luthor" },
                { q: "De quel type d'étoile Superman tire-t-il ses pouvoirs sur Terre ?", r: "Un soleil jaune" },
                { q: "Quel monstre génétique inarrêtable réussit à battre Superman à mort en 1992 ?", r: "Doomsday" },
                { q: "Quel criminel de guerre kryptonien exige que Superman 'agenouille-toi devant' lui ?", r: "Général Zod" },
                { q: "Comment s'appelle la cité miniature kryptonienne bouteille, sauvée de Brainiac ?", r: "Kandor" }
            ]
        }
    },
    7: {
        images: [
            { src: "images/Gundam1.jpg", type: "Gundam" },
            { src: "images/Gundam2.png", type: "Gundam" },
            { src: "images/Gundam3.png", type: "Gundam" },
            { src: "images/Gundam4.png", type: "Gundam" },
            { src: "images/Gundam5.jpg", type: "Gundam" },
            { src: "images/Transformers1.png", type: "Transformers" },
            { src: "images/Transformers2.png", type: "Transformers" },
            { src: "images/Transformers3.jpg", type: "Transformers" },
            { src: "images/Transformers4.png", type: "Transformers" },
            { src: "images/Transformers5.png", type: "Transformers" }
        ]
    }
};

let niveauActuel = 1;

function lancerNiveau() {
    document.getElementById("niveau-titre").innerText = `Niveau ${niveauActuel} / 7`;
    const zoneGundam = document.getElementById("zone-gundam");
    const card = document.getElementById("card");
    const txtPerso = document.getElementById("perso-nom");
    const txtType = document.getElementById("epreuve-type");
    const zoneContenu = document.getElementById("contenu-epreuve");

    if (niveauActuel === 7) {
        // Logique spéciale Niveau 7
        card.classList.add("hidden");
        zoneGundam.classList.remove("hidden");
        
        const listeImages = bddJeu[7].images;
        const imagePiochee = listeImages[Math.floor(Math.random() * listeImages.length)];
        
        document.getElementById("img-gundam").src = imagePiochee.src;
        document.getElementById("reponse-gundam").innerText = `RÉPONSE POUR LE JUGE : C'est un ${imagePiochee.type} !`;
        return;
    }

    // Niveaux 1 à 6
    card.classList.remove("hidden");
    zoneGundam.classList.add("hidden");

    const donneesNiveau = bddJeu[niveauActuel];
    const nomsPersos = Object.keys(donneesNiveau.personnages);
    const persoPioche = nomsPersos[Math.floor(Math.random() * nomsPersos.length)];

    // Choix aléatoire : Action (0) ou Questions (1)
    const typeEpreuve = Math.floor(Math.random() * 2);

    if (typeEpreuve === 0 && donneesNiveau.actions && donneesNiveau.actions.length > 0) {
        // Épreuve Action : Aucun nom de personnage n'apparaît
        txtPerso.innerText = ""; 
        txtType.innerText = "Action";
        txtType.style.background = "#ff007f";
        const actionPiochee = donneesNiveau.actions[Math.floor(Math.random() * donneesNiveau.actions.length)];
        zoneContenu.innerHTML = `<p style='text-align:center; font-weight:bold; font-size:1.2rem;'>${actionPiochee}</p>`;
    } else {
        // Épreuve Questions : On affiche le nom du personnage pioché
        txtPerso.innerText = persoPioche;
        txtType.innerText = "3 Questions";
        txtType.style.background = "#00b0ff";
        
        const toutesQuestions = donneesNiveau.personnages[persoPioche];
        // Mélanger et prendre 3 questions au hasard
        const questionsMelangees = [...toutesQuestions].sort(() => 0.5 - Math.random());
        const selectionQuestions = questionsMelangees.slice(0, 3);

        let codeHtml = "";
        selectionQuestions.forEach((item, index) => {
            codeHtml += `
                <div class="item-question">
                    <strong>Q${index + 1}: ${item.q}</strong>
                    <span>Rép: ${item.r}</span>
                </div>
            `;
        });
        zoneContenu.innerHTML = codeHtml;
    }
}

document.getElementById("btn-valider").addEventListener("click", () => {
    if (niveauActuel < 7) {
        niveauActuel++;
        lancerNiveau();
    } else {
        alert("Félicitations ! Vous avez validé tous les niveaux du jeu !");
        niveauActuel = 1;
        lancerNiveau();
    }
});

// Lancement automatique du jeu au chargement de l'écran
window.onload = lancerNiveau;
