/* ============================================================
   Musei Capitolini · Guida alla visita
   Dati delle 15 opere, testi IT/EN, risorse e quiz.
   ============================================================ */

const WORKS = [
  {
    id: "costantino",
    n: 1,
    img: "img/costantino.jpg",
    building: "conservatori",
    floor: "cortile",
    room: { it: "Cortile del Palazzo dei Conservatori", en: "Courtyard of the Palazzo dei Conservatori" },
    title: { it: "Frammenti del Colosso di Costantino", en: "Fragments of the Colossus of Constantine" },
    author: { it: "Arte romana, 312–315 d.C. circa", en: "Roman art, c. 312–315 AD" },
    material: { it: "Marmo (acrolito)", en: "Marble (acrolith)" },
    tldr: {
      it: "Testa, mano, piede e ginocchio di una statua colossale alta 12 metri: l'imperatore Costantino seduto in trono, che dominava la Basilica di Massenzio nel Foro.",
      en: "Head, hand, foot and knee of a 12-metre colossal statue: Emperor Constantine enthroned, which once dominated the Basilica of Maxentius in the Forum."
    },
    long: {
      it: "Appena entrati nel cortile del Palazzo dei Conservatori vi accolgono i frammenti marmorei più famosi di Roma: la testa, alta oltre due metri e mezzo, la mano destra con l'indice puntato verso il cielo, un piede, un ginocchio e parti di braccio del Colosso di Costantino. La statua originale rappresentava l'imperatore seduto in trono e raggiungeva circa dodici metri di altezza. Era un acrolito: solo le parti scoperte del corpo, cioè testa, braccia e gambe, erano scolpite in marmo bianco, mentre il torso, coperto dalle vesti, era realizzato in mattoni e legno rivestiti di bronzo dorato. La statua fu collocata nell'abside occidentale della Basilica di Massenzio, l'enorme edificio del Foro Romano che Costantino completò dopo aver sconfitto il rivale Massenzio nella battaglia di Ponte Milvio del 312. I frammenti furono ritrovati nel 1486 e portati sul Campidoglio per volere di papa Innocenzo VIII. Osservate il volto: gli occhi enormi rivolti verso l'alto, il naso aquilino e la pettinatura a caschetto non descrivono un uomo reale, ma esprimono un potere astratto e quasi divino. È il linguaggio della tarda antichità, che abbandona il realismo classico per un'immagine ieratica dell'imperatore. Nel 2024 una ricostruzione a grandezza naturale dell'intera statua è stata installata nel giardino di Villa Caffarelli, a pochi passi da qui.",
      en: "As soon as you enter the courtyard of the Palazzo dei Conservatori you are greeted by the most famous marble fragments in Rome: the head, over two and a half metres tall, the right hand with its index finger pointing skywards, a foot, a knee and parts of an arm from the Colossus of Constantine. The original statue showed the emperor seated on a throne and stood about twelve metres high. It was an acrolith: only the exposed parts of the body, the head, arms and legs, were carved in white marble, while the torso, covered by robes, was built of brick and wood clad in gilded bronze. The statue stood in the western apse of the Basilica of Maxentius, the enormous building in the Roman Forum that Constantine completed after defeating his rival Maxentius at the Battle of the Milvian Bridge in 312. The fragments were found in 1486 and brought to the Capitol at the wish of Pope Innocent VIII. Look at the face: the huge eyes turned upwards, the aquiline nose and the helmet-like hairstyle do not describe a real man but express an abstract, almost divine power. This is the language of late antiquity, which abandons classical realism for a hieratic image of the emperor. In 2024 a full-size reconstruction of the whole statue was installed in the garden of Villa Caffarelli, a few steps from here."
    },
    fact: {
      it: "La sola testa pesa circa 8–9 tonnellate.",
      en: "The head alone weighs about 8–9 tonnes."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Statua_colossale_di_Costantino_I",
      wiki_en: "https://en.wikipedia.org/wiki/Colossus_of_Constantine",
      museum_it: "https://www.museicapitolini.org/it/percorsi/percorsi_per_sale/museo_del_palazzo_dei_conservatori/cortile",
      museum_en: "https://www.museicapitolini.org/en/percorsi/percorsi_per_sale/museo_del_palazzo_dei_conservatori/cortile",
      yt: { it: "Colosso di Costantino Musei Capitolini", en: "Colossus of Constantine Capitoline Museums" }
    }
  },
  {
    id: "orazi",
    n: 2,
    img: "img/orazi.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Sala degli Orazi e Curiazi (Appartamento dei Conservatori)", en: "Hall of the Horatii and Curiatii (Conservators' Apartment)" },
    title: { it: "Sala degli Orazi e Curiazi", en: "Hall of the Horatii and Curiatii" },
    author: { it: "Affreschi del Cavalier d'Arpino, 1595–1640", en: "Frescoes by Cavalier d'Arpino, 1595–1640" },
    material: { it: "Affresco, marmo, bronzo", en: "Fresco, marble, bronze" },
    tldr: {
      it: "La sala più solenne del Campidoglio: affreschi sulle origini leggendarie di Roma, due statue papali di Bernini e Algardi, e il luogo dove nel 1957 fu firmato il Trattato di Roma che fondò l'Europa unita.",
      en: "The most solemn hall on the Capitol: frescoes on the legendary origins of Rome, two papal statues by Bernini and Algardi, and the room where the 1957 Treaty of Rome founding a united Europe was signed."
    },
    long: {
      it: "Questa è la grande sala di rappresentanza dei Conservatori, i magistrati che governavano Roma in età medievale e moderna. Le pareti sono interamente affrescate da Giuseppe Cesari, detto il Cavalier d'Arpino, che vi lavorò per oltre quarant'anni tra il 1595 e il 1640. Le scene raccontano le origini di Roma secondo Tito Livio: il ritrovamento di Romolo e Remo da parte del pastore Faustolo, il ratto delle Sabine, la fondazione della città, Numa Pompilio che istituisce il culto delle Vestali e soprattutto il combattimento tra gli Orazi e i Curiazi, il duello tra tre fratelli romani e tre fratelli di Alba Longa che dà il nome alla sala. Ai lati troneggiano due statue di pontefici: Urbano VIII Barberini in marmo, scolpito da Gian Lorenzo Bernini e dalla sua bottega tra il 1635 e il 1640, e Innocenzo X Pamphilj in bronzo, capolavoro di Alessandro Algardi del 1645–1650. I due grandi rivali della scultura barocca romana si confrontano qui nella stessa stanza. La sala ha anche un valore storico straordinario: il 25 marzo 1957 vi furono firmati i Trattati di Roma che istituirono la Comunità Economica Europea e l'Euratom, atto di nascita dell'Unione Europea. Nel 2004 vi fu firmato anche il Trattato costituzionale europeo. Notate il soffitto ligneo intagliato e il fregio con gli stemmi.",
      en: "This is the great hall of state of the Conservators, the magistrates who governed Rome in the medieval and modern eras. The walls are entirely frescoed by Giuseppe Cesari, known as Cavalier d'Arpino, who worked here for over forty years between 1595 and 1640. The scenes tell the origins of Rome according to Livy: the discovery of Romulus and Remus by the shepherd Faustulus, the rape of the Sabine women, the founding of the city, Numa Pompilius instituting the cult of the Vestals and above all the fight between the Horatii and the Curiatii, the duel between three Roman brothers and three brothers from Alba Longa which gives the hall its name. Two statues of popes preside at either end: Urban VIII Barberini in marble, carved by Gian Lorenzo Bernini and his workshop between 1635 and 1640, and Innocent X Pamphilj in bronze, a masterpiece by Alessandro Algardi from 1645–1650. The two great rivals of Roman Baroque sculpture face each other here in the same room. The hall also has extraordinary historical significance: on 25 March 1957 the Treaties of Rome establishing the European Economic Community and Euratom were signed here, the birth certificate of the European Union. In 2004 the European Constitutional Treaty was also signed here. Note the carved wooden ceiling and the frieze with coats of arms."
    },
    fact: {
      it: "Il tavolo usato per la firma del 1957 è ancora conservato in Campidoglio.",
      en: "The table used for the 1957 signing is still kept on the Capitol."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Palazzo_dei_Conservatori",
      wiki_en: "https://en.wikipedia.org/wiki/Palazzo_dei_Conservatori",
      museum_it: "https://www.museicapitolini.org/it/percorsi/percorsi_per_sale/appartamento_dei_conservatori/sala_degli_orazi_e_curiazi",
      museum_en: "https://www.museicapitolini.org/en/percorsi/percorsi_per_sale/appartamento_dei_conservatori/sala_degli_orazi_e_curiazi",
      extra: [
        { label: { it: "Trattati di Roma (Wikipedia)", en: "Treaty of Rome (Wikipedia)" }, url: { it: "https://it.wikipedia.org/wiki/Trattati_di_Roma", en: "https://en.wikipedia.org/wiki/Treaty_of_Rome" } }
      ],
      yt: { it: "Sala degli Orazi e Curiazi Campidoglio", en: "Hall of Horatii and Curiatii Capitoline" }
    }
  },
  {
    id: "spinario",
    n: 3,
    img: "img/spinario.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Sala dei Trionfi", en: "Hall of the Triumphs" },
    title: { it: "Spinario", en: "Boy with Thorn (Spinario)" },
    author: { it: "Arte romana, I secolo a.C.", en: "Roman art, 1st century BC" },
    material: { it: "Bronzo", en: "Bronze" },
    tldr: {
      it: "Un ragazzo assorto si toglie una spina dal piede: uno dei bronzi antichi più copiati del Rinascimento, dal fascino intimo e quotidiano.",
      en: "A boy absorbed in pulling a thorn from his foot: one of the ancient bronzes most copied in the Renaissance, intimate and everyday in its charm."
    },
    long: {
      it: "Lo Spinario è una piccola scultura in bronzo, alta circa 73 centimetri, che raffigura un ragazzo seduto su una roccia, intento a togliersi una spina dalla pianta del piede sinistro. La posa è naturale e concentrata: il busto piegato in avanti, la gamba sollevata, lo sguardo fisso sul piede. È una delle poche sculture in bronzo giunte dall'antichità senza mai essere state sepolte o perdute, e faceva parte del gruppo di bronzi che papa Sisto IV donò al popolo romano nel 1471, atto che segna la nascita dei Musei Capitolini, i più antichi musei pubblici del mondo. L'opera è un pastiche eclettico tipico del I secolo a.C.: il corpo, morbido e realistico, segue modelli ellenistici, mentre la testa, con i capelli che ricadono in ciocche ordinate come se il ragazzo fosse in piedi e non chinato, riprende uno stile severo del V secolo a.C. Nel Medioevo lo Spinario si trovava davanti al Laterano e generò una leggenda: sarebbe il pastore Gneo Marzio, che portò un messaggio urgente al Senato senza fermarsi a togliersi la spina, e solo alla fine, compiuto il dovere, si sedette a curarsi il piede. Nel Rinascimento fu tra le opere antiche più ammirate e riprodotte: Brunelleschi, Antico e molti altri ne fecero copie in bronzo, e la posa influenzò innumerevoli artisti.",
      en: "The Spinario is a small bronze sculpture, about 73 centimetres high, depicting a boy seated on a rock, intent on removing a thorn from the sole of his left foot. The pose is natural and concentrated: the torso bent forward, the leg raised, the gaze fixed on the foot. It is one of the few bronze sculptures to have survived from antiquity without ever being buried or lost, and it belonged to the group of bronzes that Pope Sixtus IV donated to the Roman people in 1471, the act that marks the birth of the Capitoline Museums, the oldest public museums in the world. The work is an eclectic pastiche typical of the 1st century BC: the body, soft and realistic, follows Hellenistic models, while the head, with hair falling in orderly locks as if the boy were standing rather than bending, echoes a severe style of the 5th century BC. In the Middle Ages the Spinario stood in front of the Lateran and gave rise to a legend: he was said to be the shepherd Gnaeus Martius, who carried an urgent message to the Senate without stopping to remove the thorn, and only at the end, duty done, sat down to tend his foot. In the Renaissance it was among the most admired and reproduced ancient works: Brunelleschi, Antico and many others made bronze copies, and the pose influenced countless artists."
    },
    fact: {
      it: "Napoleone lo portò a Parigi nel 1798; tornò a Roma nel 1816.",
      en: "Napoleon took it to Paris in 1798; it returned to Rome in 1816."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Spinario",
      wiki_en: "https://en.wikipedia.org/wiki/Boy_with_Thorn",
      museum_it: "https://www.museicapitolini.org/it/opera/spinario",
      museum_en: "https://www.museicapitolini.org/en/opera/spinario",
      yt: { it: "Spinario Musei Capitolini", en: "Spinario Boy with Thorn Capitoline" }
    }
  },
  {
    id: "bruto",
    n: 4,
    img: "img/bruto.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Sala dei Trionfi", en: "Hall of the Triumphs" },
    title: { it: "Bruto Capitolino", en: "Capitoline Brutus" },
    author: { it: "Arte etrusco-italica, IV–III secolo a.C.", en: "Etruscan-Italic art, 4th–3rd century BC" },
    material: { it: "Bronzo, occhi in avorio e pasta vitrea", en: "Bronze, eyes in ivory and glass paste" },
    tldr: {
      it: "Una testa di bronzo dallo sguardo severo, identificata nel Cinquecento con Lucio Giunio Bruto, fondatore della Repubblica: il volto stesso della virtù romana.",
      en: "A bronze head with a stern gaze, identified in the 16th century as Lucius Junius Brutus, founder of the Republic: the very face of Roman virtue."
    },
    long: {
      it: "Il cosiddetto Bruto Capitolino è una delle immagini più intense dell'arte antica. La testa in bronzo, con la barba corta e i capelli aderenti, gli zigomi marcati e le labbra serrate, esprime una gravità e una determinazione che sembrano incarnare l'ideale del cittadino romano della Repubblica. Gli occhi, in avorio e pasta vitrea, sono in gran parte originali e conferiscono al volto una vitalità straordinaria. La testa è databile tra il IV e il III secolo a.C. ed è probabilmente opera di una bottega etrusca o dell'Italia centrale, quando la ritrattistica cominciava a fondere l'idealizzazione greca con l'attenzione italica ai tratti individuali. Il busto con la toga fu aggiunto nel XVI secolo per trasformare la testa in un ritratto a mezzo busto. L'identificazione con Lucio Giunio Bruto, che nel 509 a.C. cacciò l'ultimo re Tarquinio il Superbo e divenne primo console, è una suggestione rinascimentale senza fondamento documentario, ma ha reso l'opera un simbolo politico: durante la Rivoluzione francese fu portata a Parigi come icona della libertà repubblicana. L'opera giunse in Campidoglio nel 1564 per lascito del cardinale Rodolfo Pio da Carpi. Osservate come lo sguardo, leggermente rivolto verso il basso, sembri seguire chi passa nella sala.",
      en: "The so-called Capitoline Brutus is one of the most intense images of ancient art. The bronze head, with its short beard and close-cropped hair, prominent cheekbones and tight lips, expresses a gravity and determination that seem to embody the ideal of the Roman citizen of the Republic. The eyes, in ivory and glass paste, are largely original and give the face an extraordinary vitality. The head dates from between the 4th and 3rd century BC and is probably the work of an Etruscan or central Italian workshop, at a time when portraiture was beginning to fuse Greek idealisation with Italic attention to individual features. The togate bust was added in the 16th century to turn the head into a half-length portrait. The identification with Lucius Junius Brutus, who in 509 BC expelled the last king Tarquinius Superbus and became the first consul, is a Renaissance conjecture without documentary basis, but it made the work a political symbol: during the French Revolution it was taken to Paris as an icon of republican liberty. The work came to the Capitol in 1564 as a bequest from Cardinal Rodolfo Pio da Carpi. Notice how the gaze, turned slightly downwards, seems to follow whoever passes through the room."
    },
    fact: {
      it: "È uno dei pochissimi ritratti in bronzo di età repubblicana sopravvissuti.",
      en: "It is one of the very few surviving bronze portraits from the Republican era."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Bruto_Capitolino",
      wiki_en: "https://en.wikipedia.org/wiki/Capitoline_Brutus",
      museum_it: "https://www.museicapitolini.org/it/opera/bruto-capitolino",
      museum_en: "https://www.museicapitolini.org/en/opera/bruto-capitolino",
      yt: { it: "Bruto Capitolino bronzo", en: "Capitoline Brutus bronze" }
    }
  },
  {
    id: "lupa",
    n: 5,
    img: "img/lupa.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Sala della Lupa", en: "Hall of the She-Wolf" },
    title: { it: "Lupa Capitolina", en: "Capitoline Wolf" },
    author: { it: "Datazione dibattuta: V sec. a.C. o XI–XII sec. d.C.; gemelli del tardo Quattrocento", en: "Disputed date: 5th c. BC or 11th–12th c. AD; twins added in the late 1400s" },
    material: { it: "Bronzo", en: "Bronze" },
    tldr: {
      it: "Il simbolo di Roma: la lupa che allatta Romolo e Remo. I gemelli sono un'aggiunta rinascimentale, e la datazione della lupa stessa è oggetto di un acceso dibattito.",
      en: "The symbol of Rome: the she-wolf suckling Romulus and Remus. The twins are a Renaissance addition, and the date of the wolf itself is hotly debated."
    },
    long: {
      it: "Siete davanti all'immagine più celebre di Roma. La Lupa Capitolina è una scultura in bronzo alta 75 centimetri che rappresenta una lupa dal corpo teso e vigile, con la testa girata di lato, le orecchie dritte e le fauci leggermente aperte, mentre i due gemelli Romolo e Remo si sporgono verso le mammelle. Per secoli è stata considerata un capolavoro etrusco del V secolo a.C., forse la stessa lupa che Cicerone ricorda colpita da un fulmine nel 65 a.C. Ma nel 2006 la restauratrice Anna Maria Carruba osservò che la statua fu fusa in un unico getto, tecnica sconosciuta nell'antichità e tipica invece del Medioevo, e le analisi al radiocarbonio pubblicate nel 2012 hanno indicato una datazione tra l'XI e il XII secolo. Il dibattito tra gli studiosi resta aperto. Ciò che è certo è che i gemelli furono aggiunti alla fine del Quattrocento, probabilmente da Antonio del Pollaiolo, per trasformare la lupa nel simbolo delle origini della città. La scultura fu tra i bronzi donati da Sisto IV al popolo romano nel 1471 ed era già esposta nel Medioevo al Laterano, dove sotto di essa si amministrava la giustizia. Da allora è il simbolo ufficiale di Roma: lo ritrovate sullo stemma della città, sulle maglie della Roma e nelle Olimpiadi del 1960. Osservate la lavorazione del pelo, reso a ciocche stilizzate sul collo e sul dorso, e il contrasto con la superficie liscia dei fianchi.",
      en: "You are standing before the most famous image of Rome. The Capitoline Wolf is a bronze sculpture 75 centimetres high representing a she-wolf with a tense, watchful body, head turned sideways, ears pricked and jaws slightly open, while the twins Romulus and Remus reach up toward her teats. For centuries it was considered an Etruscan masterpiece of the 5th century BC, perhaps the very wolf that Cicero records as struck by lightning in 65 BC. But in 2006 the restorer Anna Maria Carruba observed that the statue was cast in a single pour, a technique unknown in antiquity and typical instead of the Middle Ages, and radiocarbon analyses published in 2012 indicated a date between the 11th and 12th centuries. The scholarly debate remains open. What is certain is that the twins were added at the end of the 15th century, probably by Antonio del Pollaiolo, to turn the wolf into the symbol of the city's origins. The sculpture was among the bronzes donated by Sixtus IV to the Roman people in 1471 and had already been displayed in the Middle Ages at the Lateran, where justice was administered beneath it. Since then it has been the official symbol of Rome: you will find it on the city's coat of arms, on the AS Roma football shirts and at the 1960 Olympics. Note the treatment of the fur, rendered in stylised locks on the neck and back, and the contrast with the smooth surface of the flanks."
    },
    fact: {
      it: "Copie della Lupa sono state donate da Roma a città di tutto il mondo, da Cincinnati a Tokyo.",
      en: "Copies of the Wolf have been given by Rome to cities around the world, from Cincinnati to Tokyo."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Lupa_Capitolina",
      wiki_en: "https://en.wikipedia.org/wiki/Capitoline_Wolf",
      museum_it: "https://www.museicapitolini.org/it/opera/lupa-capitolina",
      museum_en: "https://www.museicapitolini.org/en/opera/lupa-capitolina",
      yt: { it: "Lupa Capitolina storia datazione", en: "Capitoline Wolf history dating" }
    }
  },
  {
    id: "medusa",
    n: 6,
    img: "img/medusa.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Sala delle Oche", en: "Hall of the Geese" },
    title: { it: "Medusa", en: "Medusa" },
    author: { it: "Gian Lorenzo Bernini, 1638–1640 circa", en: "Gian Lorenzo Bernini, c. 1638–1640" },
    material: { it: "Marmo", en: "Marble" },
    tldr: {
      it: "Bernini scolpisce Medusa nell'istante in cui si accorge di star diventando pietra: non un mostro, ma una donna che soffre.",
      en: "Bernini carves Medusa at the instant she realises she is turning to stone: not a monster, but a suffering woman."
    },
    long: {
      it: "In questa piccola sala, chiamata delle Oche per le due oche in bronzo che ricordano le sacre oche del Campidoglio che nel 390 a.C. svegliarono i Romani durante l'assalto dei Galli, si trova un capolavoro del Barocco: il busto di Medusa di Gian Lorenzo Bernini. Nella mitologia Medusa è la Gorgone dallo sguardo che pietrifica, i cui capelli sono serpenti vivi. Gli artisti l'hanno quasi sempre rappresentata come una testa mozzata e urlante, trofeo di Perseo. Bernini invece rovescia la tradizione: la sua Medusa è viva, ha il volto di una giovane donna bellissima, la bocca socchiusa in un lamento, le sopracciglia aggrottate in un'espressione di dolore. È il momento, descritto dal poeta Giovan Battista Marino, in cui la Gorgone vede il proprio riflesso e comincia a pietrificarsi, oppure semplicemente prende coscienza della propria mostruosità. I serpenti si intrecciano sulla testa con un virtuosismo tecnico straordinario, alcuni con le fauci spalancate. Bernini rende visibile il paradosso: lo scultore che trasforma il marmo in carne raffigura una creatura che trasforma la carne in pietra. L'opera fu donata al museo nel 1731 da Francesco Bichi. Notate il contrasto tra la pelle levigatissima del volto e la superficie ruvida e mossa dei serpenti.",
      en: "In this small room, called the Hall of the Geese after the two bronze geese that recall the sacred geese of the Capitol which in 390 BC woke the Romans during the assault of the Gauls, stands a masterpiece of the Baroque: the bust of Medusa by Gian Lorenzo Bernini. In mythology Medusa is the Gorgon whose gaze turns people to stone, and whose hair is made of living snakes. Artists have almost always depicted her as a severed, screaming head, the trophy of Perseus. Bernini instead overturns the tradition: his Medusa is alive, with the face of a beautiful young woman, her mouth half-open in a lament, her brows knitted in an expression of pain. It is the moment, described by the poet Giovan Battista Marino, in which the Gorgon sees her own reflection and begins to petrify, or simply becomes aware of her own monstrousness. The snakes twist over her head with extraordinary technical virtuosity, some with jaws wide open. Bernini makes the paradox visible: the sculptor who turns marble into flesh depicts a creature who turns flesh into stone. The work was donated to the museum in 1731 by Francesco Bichi. Note the contrast between the highly polished skin of the face and the rough, restless surface of the snakes."
    },
    fact: {
      it: "Le oche di bronzo della sala sono opere romane del I secolo d.C.",
      en: "The bronze geese in the room are Roman works of the 1st century AD."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Medusa_(Bernini)",
      wiki_en: "https://en.wikipedia.org/wiki/Medusa_(Bernini)",
      museum_it: "https://www.museicapitolini.org/it/percorsi/percorsi_per_sale/appartamento_dei_conservatori/sala_delle_oche/busto_di_medusa",
      museum_en: "https://www.museicapitolini.org/en/percorsi/percorsi_per_sale/appartamento_dei_conservatori/sala_delle_oche/busto_di_medusa",
      yt: { it: "Medusa Bernini Musei Capitolini", en: "Bernini Medusa Capitoline Museums" }
    }
  },
  {
    id: "marco-aurelio",
    n: 7,
    img: "img/marco-aurelio.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Esedra di Marco Aurelio", en: "Exedra of Marcus Aurelius" },
    title: { it: "Statua equestre di Marco Aurelio", en: "Equestrian Statue of Marcus Aurelius" },
    author: { it: "Arte romana, 176–180 d.C. circa", en: "Roman art, c. 176–180 AD" },
    material: { it: "Bronzo dorato", en: "Gilded bronze" },
    tldr: {
      it: "L'unica statua equestre in bronzo di un imperatore romano sopravvissuta dall'antichità. Si salvò perché nel Medioevo la credevano Costantino. Quella in piazza è una copia.",
      en: "The only bronze equestrian statue of a Roman emperor to survive from antiquity. It was spared because in the Middle Ages it was thought to be Constantine. The one in the square is a copy."
    },
    long: {
      it: "Nella luminosa Esedra costruita nel 2005 si trova l'originale della statua equestre di Marco Aurelio, il cui calco domina la piazza del Campidoglio disegnata da Michelangelo. È un'opera eccezionale: nell'antichità Roma contava decine di statue equestri di imperatori in bronzo, ma tutte furono fuse nel Medioevo per ricavarne metallo o monete. Questa si salvò perché fu creduta l'immagine di Costantino, il primo imperatore cristiano, e quindi risparmiata. L'imperatore filosofo, autore dei Pensieri, è raffigurato senza armi né corazza, con la tunica e il mantello militare, il braccio destro teso in un gesto di clemenza o di saluto alle truppe. Il cavallo, dalle forme possenti e dalla criniera dettagliatissima, solleva la zampa anteriore destra: secondo alcuni studiosi, in origine sotto di essa vi era la figura di un barbaro sconfitto. La statua è alta oltre quattro metri e conserva tracce abbondanti della doratura originale. Nel Medioevo si trovava al Laterano; nel 1538 papa Paolo III la fece trasferire in Campidoglio, dove Michelangelo la pose al centro della nuova piazza, disegnando il basamento. Nel 1981 fu rimossa per un lungo restauro contro la corrosione e nel 1990 entrò definitivamente nel museo, mentre dal 1997 una copia ne prende il posto all'aperto. Girate intorno alla statua: da ogni lato la potenza del cavallo e la calma dell'imperatore creano un equilibrio che ha ispirato Donatello, Verrocchio e tutti gli scultori di monumenti equestri.",
      en: "In the bright Exedra built in 2005 stands the original equestrian statue of Marcus Aurelius, whose cast dominates the Piazza del Campidoglio designed by Michelangelo. It is an exceptional work: in antiquity Rome had dozens of bronze equestrian statues of emperors, but all were melted down in the Middle Ages for metal or coins. This one was spared because it was believed to be an image of Constantine, the first Christian emperor. The philosopher-emperor, author of the Meditations, is shown without weapons or armour, in tunic and military cloak, his right arm outstretched in a gesture of clemency or of address to the troops. The horse, with its powerful forms and highly detailed mane, raises its right foreleg: according to some scholars, a defeated barbarian originally lay beneath it. The statue is over four metres tall and preserves abundant traces of its original gilding. In the Middle Ages it stood at the Lateran; in 1538 Pope Paul III had it moved to the Capitol, where Michelangelo placed it at the centre of the new square and designed its pedestal. In 1981 it was removed for a long restoration against corrosion and in 1990 it entered the museum for good, while since 1997 a copy has taken its place outdoors. Walk around the statue: from every side the power of the horse and the calm of the emperor create a balance that inspired Donatello, Verrocchio and every sculptor of equestrian monuments since."
    },
    fact: {
      it: "Una leggenda medievale diceva che quando la doratura fosse tornata completa, sarebbe arrivato il Giorno del Giudizio.",
      en: "A medieval legend said that when the gilding became complete again, Judgement Day would come."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Statua_equestre_di_Marco_Aurelio",
      wiki_en: "https://en.wikipedia.org/wiki/Equestrian_Statue_of_Marcus_Aurelius",
      museum_it: "https://www.museicapitolini.org/it/opera/statua-equestre-di-marco-aurelio",
      museum_en: "https://www.museicapitolini.org/en/opera/statua-equestre-di-marco-aurelio",
      yt: { it: "Marco Aurelio statua equestre Musei Capitolini", en: "Marcus Aurelius equestrian statue Capitoline" }
    }
  },
  {
    id: "ercole",
    n: 8,
    img: "img/ercole.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Esedra di Marco Aurelio", en: "Exedra of Marcus Aurelius" },
    title: { it: "Ercole del Foro Boario", en: "Hercules of the Forum Boarium" },
    author: { it: "Arte romana, II secolo a.C.", en: "Roman art, 2nd century BC" },
    material: { it: "Bronzo dorato", en: "Gilded bronze" },
    tldr: {
      it: "Un Ercole giovane, interamente dorato, con clava e mele delle Esperidi: la statua di culto di un tempio del Foro Boario, riemersa intatta nel Quattrocento.",
      en: "A youthful Hercules, entirely gilded, with club and apples of the Hesperides: the cult statue of a temple in the Forum Boarium, unearthed intact in the 15th century."
    },
    long: {
      it: "Accanto a Marco Aurelio brilla un'altra rarità: una statua in bronzo dorato di Ercole, alta 2 metri e 41, giunta a noi quasi integra. L'eroe è rappresentato giovane e imberbe, in piedi, con la clava nella mano destra e nella sinistra le mele d'oro del giardino delle Esperidi, la penultima delle sue dodici fatiche. Il modello è greco, nella tradizione di Lisippo del IV secolo a.C., ma la statua fu realizzata nel II secolo a.C., quando a Roma i generali vittoriosi facevano erigere templi e statue con il bottino delle guerre in Oriente. Fu ritrovata durante il pontificato di Sisto IV, intorno al 1470, nell'area del Foro Boario, l'antico mercato del bestiame presso il Tevere dove sorgeva il tempio rotondo di Ercole Vincitore, ancora oggi visibile vicino alla Bocca della Verità. Probabilmente era proprio la statua di culto di quel tempio, o di un santuario vicino. La doratura ben conservata ci restituisce l'effetto abbagliante che avevano le statue di bronzo nell'antichità, molto diverse dalla patina scura a cui siamo abituati. Confrontatela con l'Ercole in marmo di Commodo nella sala accanto: stesso eroe, ma un'idea di potere completamente diversa.",
      en: "Beside Marcus Aurelius shines another rarity: a gilded bronze statue of Hercules, 2.41 metres tall, which has come down to us almost intact. The hero is shown young and beardless, standing, with the club in his right hand and in his left the golden apples of the garden of the Hesperides, the penultimate of his twelve labours. The model is Greek, in the tradition of Lysippus of the 4th century BC, but the statue was made in the 2nd century BC, when victorious Roman generals had temples and statues erected with the spoils of their wars in the East. It was found during the pontificate of Sixtus IV, around 1470, in the area of the Forum Boarium, the ancient cattle market near the Tiber where the round temple of Hercules Victor stood, still visible today near the Bocca della Verità. It was probably the cult statue of that very temple, or of a nearby sanctuary. The well-preserved gilding restores for us the dazzling effect that bronze statues had in antiquity, very different from the dark patina we are used to. Compare it with the marble Hercules of Commodus in the next room: the same hero, but a completely different idea of power."
    },
    fact: {
      it: "È tra le più grandi statue antiche in bronzo dorato conservate al mondo.",
      en: "It is among the largest surviving ancient gilded bronze statues in the world."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Ercole_del_Foro_Boario",
      wiki_en: "https://en.wikipedia.org/wiki/Hercules_of_the_Forum_Boarium",
      museum_it: "https://www.museicapitolini.org/it/percorsi/percorsi_per_sale/museo_del_palazzo_dei_conservatori/esedra_di_marco_aurelio",
      museum_en: "https://www.museicapitolini.org/en/percorsi/percorsi_per_sale/museo_del_palazzo_dei_conservatori/esedra_di_marco_aurelio",
      yt: { it: "Ercole bronzo dorato Foro Boario Capitolini", en: "Gilded Hercules Forum Boarium Capitoline" }
    }
  },
  {
    id: "commodo",
    n: 9,
    img: "img/commodo.jpg",
    building: "conservatori",
    floor: "primo",
    room: { it: "Sale degli Horti Lamiani", en: "Halls of the Horti Lamiani" },
    title: { it: "Busto di Commodo come Ercole", en: "Bust of Commodus as Hercules" },
    author: { it: "Arte romana, 190–192 d.C.", en: "Roman art, 190–192 AD" },
    material: { it: "Marmo", en: "Marble" },
    tldr: {
      it: "L'imperatore Commodo, il 'gladiatore' del film, si fa ritrarre come Ercole con pelle di leone e clava: un capolavoro di propaganda e megalomania, in condizioni perfette.",
      en: "Emperor Commodus, the 'Gladiator' villain of the film, has himself portrayed as Hercules with lion skin and club: a masterpiece of propaganda and megalomania, in perfect condition."
    },
    long: {
      it: "Questo busto è uno dei ritratti romani meglio conservati e più sorprendenti. Rappresenta Commodo, figlio di Marco Aurelio e imperatore dal 180 al 192, nelle vesti di Ercole: sulla testa porta la pelle del leone di Nemea, con le zampe annodate sul petto, nella destra impugna la clava e nella sinistra tiene le mele delle Esperidi. Negli ultimi anni di regno Commodo si proclamò Hercules Romanus, si esibì come gladiatore nell'anfiteatro e volle ribattezzare Roma Colonia Commodiana. Il busto è la traduzione in marmo di questa follia di grandezza, ma è anche un'opera di straordinaria qualità: il volto, con la barba riccia e i capelli scolpiti a trapano per creare effetti di luce e ombra, è levigato fino a sembrare vivo, mentre la pelle di leone è resa con un realismo minuzioso. Il basamento è altrettanto ricco: due Amazzoni inginocchiate, di cui una sola sopravvive, reggono un globo con i segni dello zodiaco e due cornucopie, simboli dell'abbondanza e dell'ordine cosmico garantiti dall'imperatore. Fu ritrovato nel 1874 sull'Esquilino, negli Horti Lamiani, una lussuosa villa imperiale, dove era stato nascosto in una camera sotterranea: forse per proteggerlo dalla damnatio memoriae che colpì Commodo dopo il suo assassinio, avvenuto il 31 dicembre 192. Accanto al busto sono esposti due Tritoni marini provenienti dallo stesso ritrovamento.",
      en: "This bust is one of the best-preserved and most surprising Roman portraits. It represents Commodus, son of Marcus Aurelius and emperor from 180 to 192, in the guise of Hercules: on his head he wears the skin of the Nemean lion, its paws knotted on his chest, in his right hand he grips the club and in his left he holds the apples of the Hesperides. In the final years of his reign Commodus proclaimed himself Hercules Romanus, performed as a gladiator in the amphitheatre and wanted to rename Rome Colonia Commodiana. The bust is the translation into marble of this delusion of grandeur, but it is also a work of extraordinary quality: the face, with its curly beard and hair carved with a drill to create effects of light and shadow, is polished until it seems alive, while the lion skin is rendered with meticulous realism. The base is equally rich: two kneeling Amazons, of which only one survives, support a globe with the signs of the zodiac and two cornucopiae, symbols of the abundance and cosmic order guaranteed by the emperor. It was found in 1874 on the Esquiline, in the Horti Lamiani, a luxurious imperial villa, where it had been hidden in an underground chamber: perhaps to protect it from the damnatio memoriae that struck Commodus after his assassination on 31 December 192. Next to the bust are two marine Tritons from the same find."
    },
    fact: {
      it: "Commodo fu strangolato nel bagno dal suo allenatore di lotta, Narcisso.",
      en: "Commodus was strangled in his bath by his wrestling trainer, Narcissus."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Commodo",
      wiki_en: "https://en.wikipedia.org/wiki/Commodus_as_Hercules",
      museum_it: "https://www.museicapitolini.org/it/opera/busto-di-commodo-come-ercole",
      museum_en: "https://www.museicapitolini.org/en/opera/busto-di-commodo-come-ercole",
      yt: { it: "Commodo come Ercole busto Capitolini", en: "Commodus as Hercules bust Capitoline" }
    }
  },
  {
    id: "buona-ventura",
    n: 10,
    img: "img/buona-ventura.jpg",
    building: "conservatori",
    floor: "secondo",
    room: { it: "Pinacoteca Capitolina, Sala di Santa Petronilla", en: "Capitoline Picture Gallery, Santa Petronilla Room" },
    title: { it: "La Buona Ventura", en: "The Fortune Teller" },
    author: { it: "Caravaggio, 1594–1595 circa", en: "Caravaggio, c. 1594–1595" },
    material: { it: "Olio su tela", en: "Oil on canvas" },
    tldr: {
      it: "Una zingara legge la mano a un giovane elegante mentre gli sfila l'anello: il giovane Caravaggio inventa la pittura di genere presa dalla strada.",
      en: "A gypsy reads a fashionable young man's palm while slipping off his ring: the young Caravaggio invents genre painting taken straight from the street."
    },
    long: {
      it: "Salite alla Pinacoteca per incontrare due tele di Caravaggio. La Buona Ventura è una delle prime opere del pittore lombardo, dipinta a Roma verso il 1594–1595, quando aveva poco più di vent'anni e cercava fortuna nella bottega del Cavalier d'Arpino, lo stesso che affrescò la Sala degli Orazi e Curiazi. La scena è semplice e teatrale: una giovane zingara con il turbante bianco tiene la mano di un ragazzo vestito alla moda, con piume sul cappello e spada al fianco, fingendo di leggergli il futuro. I due si guardano negli occhi, e il giovane, lusingato, non si accorge che le dita della ragazza gli stanno sfilando l'anello. Secondo le fonti Caravaggio chiamò una zingara dalla strada per farla posare, dichiarando di preferire la natura ai modelli antichi: era una rivoluzione, perché la pittura di genere, con personaggi comuni e nessun tema sacro o mitologico, non esisteva ancora a Roma. Il quadro fu acquistato dal cardinale Francesco Maria Del Monte, primo grande protettore dell'artista, che ne commissionò poi una seconda versione oggi al Louvre. La tela capitolina entrò in Pinacoteca nel 1750 con la collezione Pio di Savoia. Notate la luce morbida e il fondo neutro, ancora lontani dai contrasti drammatici della maturità, e i dettagli: il guanto, la piuma, lo sguardo complice.",
      en: "Go up to the Picture Gallery to meet two canvases by Caravaggio. The Fortune Teller is one of the earliest works by the Lombard painter, painted in Rome around 1594–1595 when he was barely in his twenties and seeking his fortune in the workshop of Cavalier d'Arpino, the same artist who frescoed the Hall of the Horatii and Curiatii. The scene is simple and theatrical: a young gypsy woman in a white turban holds the hand of a fashionably dressed young man, with feathers on his hat and a sword at his side, pretending to read his future. The two gaze into each other's eyes, and the flattered youth does not notice that the girl's fingers are slipping the ring off his finger. According to the sources Caravaggio called a gypsy in from the street to pose, declaring that he preferred nature to ancient models: this was a revolution, because genre painting, with ordinary people and no sacred or mythological subject, did not yet exist in Rome. The painting was bought by Cardinal Francesco Maria Del Monte, the artist's first great patron, who later commissioned a second version now in the Louvre. The Capitoline canvas entered the Picture Gallery in 1750 with the Pio di Savoia collection. Note the soft light and the neutral background, still far from the dramatic contrasts of his maturity, and the details: the glove, the feather, the knowing glance."
    },
    fact: {
      it: "Un dipinto del Cavalier d'Arpino è nascosto sotto: Caravaggio riutilizzò una tela del maestro.",
      en: "A painting by Cavalier d'Arpino lies underneath: Caravaggio reused a canvas of his master's."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Buona_ventura_(Caravaggio_Roma)",
      wiki_en: "https://en.wikipedia.org/wiki/The_Fortune_Teller_(Caravaggio)",
      museum_it: "https://www.museicapitolini.org/it/opera/la-buona-ventura",
      museum_en: "https://www.museicapitolini.org/en/opera/la-buona-ventura",
      yt: { it: "Caravaggio Buona Ventura Musei Capitolini", en: "Caravaggio Fortune Teller Capitoline" }
    }
  },
  {
    id: "san-giovanni",
    n: 11,
    img: "img/san-giovanni.jpg",
    building: "conservatori",
    floor: "secondo",
    room: { it: "Pinacoteca Capitolina, Sala di Santa Petronilla", en: "Capitoline Picture Gallery, Santa Petronilla Room" },
    title: { it: "San Giovanni Battista", en: "Saint John the Baptist (Youth with a Ram)" },
    author: { it: "Caravaggio, 1602 circa", en: "Caravaggio, c. 1602" },
    material: { it: "Olio su tela", en: "Oil on canvas" },
    tldr: {
      it: "Un ragazzo nudo abbraccia un ariete e sorride allo spettatore: il San Giovanni più ambiguo e sensuale di Caravaggio, ispirato agli ignudi di Michelangelo.",
      en: "A naked boy hugs a ram and smiles at the viewer: Caravaggio's most ambiguous and sensual Saint John, inspired by Michelangelo's ignudi."
    },
    long: {
      it: "Questa tela, dipinta intorno al 1602, mostra Caravaggio nella piena maturità del suo stile: un fascio di luce violenta scolpisce il corpo di un adolescente nudo, seduto su un drappo rosso e su una pelliccia, che si volta verso di noi con un sorriso ironico mentre abbraccia un ariete. Il titolo tradizionale è San Giovanni Battista, ma dell'iconografia del santo manca quasi tutto: non c'è l'agnello, sostituito da un ariete, non c'è la croce di canne, non c'è l'atteggiamento penitente. Per questo gli studiosi hanno discusso a lungo sul vero soggetto, e alcuni l'hanno chiamato semplicemente Giovane con ariete. La posa, con la gamba piegata e il busto ruotato, cita apertamente gli ignudi che Michelangelo dipinse sulla volta della Cappella Sistina, un omaggio e insieme una sfida al maestro. Il dipinto fu commissionato da Ciriaco Mattei, ricco collezionista romano, forse per il figlio che si chiamava proprio Giovanni Battista, e passò poi ai Pio di Savoia, con la cui collezione entrò in Pinacoteca nel 1750. Una versione quasi identica si trova nella Galleria Doria Pamphilj di Roma. Osservate il realismo del corpo, con la pelle abbronzata del viso e delle mani che contrasta con il torso chiaro, come in un vero ragazzo di strada che posa in studio.",
      en: "This canvas, painted around 1602, shows Caravaggio at the full maturity of his style: a beam of violent light sculpts the body of a naked adolescent, seated on a red drape and a fur, who turns towards us with an ironic smile while embracing a ram. The traditional title is Saint John the Baptist, but almost everything of the saint's iconography is missing: there is no lamb, replaced by a ram, no reed cross, no penitent attitude. For this reason scholars have long debated the true subject, and some have called it simply Youth with a Ram. The pose, with the bent leg and twisted torso, openly quotes the ignudi that Michelangelo painted on the ceiling of the Sistine Chapel, at once a tribute and a challenge to the master. The painting was commissioned by Ciriaco Mattei, a wealthy Roman collector, perhaps for his son who was indeed named Giovanni Battista, and then passed to the Pio di Savoia, with whose collection it entered the Picture Gallery in 1750. An almost identical version is in the Galleria Doria Pamphilj in Rome. Observe the realism of the body, with the tanned skin of the face and hands contrasting with the pale torso, like a real street boy posing in the studio."
    },
    fact: {
      it: "Nella stessa sala si trova anche il Seppellimento di Santa Petronilla del Guercino, alta oltre 7 metri.",
      en: "The same room also holds Guercino's Burial of Saint Petronilla, over 7 metres tall."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/San_Giovanni_Battista_(Caravaggio)",
      wiki_en: "https://en.wikipedia.org/wiki/John_the_Baptist_(Caravaggio)",
      museum_it: "https://www.museicapitolini.org/it/opera/san-giovanni-battista",
      museum_en: "https://www.museicapitolini.org/en/opera/san-giovanni-battista",
      yt: { it: "Caravaggio San Giovanni Battista Capitolini", en: "Caravaggio John the Baptist Capitoline ram" }
    }
  },
  {
    id: "marforio",
    n: 12,
    img: "img/marforio.jpg",
    building: "nuovo",
    floor: "cortile",
    room: { it: "Cortile del Palazzo Nuovo", en: "Courtyard of the Palazzo Nuovo" },
    title: { it: "Marforio", en: "Marforio" },
    author: { it: "Arte romana, I secolo d.C.", en: "Roman art, 1st century AD" },
    material: { it: "Marmo", en: "Marble" },
    tldr: {
      it: "Un gigantesco dio fluviale sdraiato che nel Rinascimento 'parlava': su di lui i romani appendevano satire anonime contro il potere, in dialogo con Pasquino.",
      en: "A giant reclining river god that 'talked' in the Renaissance: Romans hung anonymous satires against the powerful on him, in dialogue with Pasquino."
    },
    long: {
      it: "Attraversata la Galleria Lapidaria sotterranea e il Tabularium, con la sua vista mozzafiato sul Foro Romano, si arriva al Palazzo Nuovo, costruito tra il 1603 e il 1654 su disegno di Michelangelo per completare la piazza. Nel cortile vi accoglie Marforio, una statua colossale di divinità fluviale sdraiata, con la barba fluente e un vaso da cui sgorga l'acqua della fontana. Realizzata nel I secolo d.C., raffigura forse l'Oceano o il Tevere; il nome deriverebbe dal luogo in cui si trovava nell'antichità, il Foro di Marte, Martis Forum, presso il Carcere Mamertino ai piedi del Campidoglio. Marforio è celebre soprattutto perché è una delle statue parlanti di Roma. A partire dal Cinquecento i romani attaccavano sulle statue antiche fogli anonimi con versi satirici contro papi, cardinali e governanti, le cosiddette pasquinate. Marforio dialogava con Pasquino, la statua parlante più famosa: Marforio poneva una domanda ingenua e Pasquino rispondeva con una battuta feroce. Un esempio celebre: quando papa Urbano VIII Barberini spogliò il Pantheon del bronzo, Marforio chiese chi fosse stato e Pasquino rispose: quod non fecerunt barbari, fecerunt Barberini, quello che non fecero i barbari lo fecero i Barberini. La statua fu portata sul Campidoglio nel 1594 e sistemata nel cortile con la fontana nel 1679.",
      en: "After crossing the underground Galleria Lapidaria and the Tabularium, with its breathtaking view over the Roman Forum, you reach the Palazzo Nuovo, built between 1603 and 1654 to Michelangelo's design to complete the square. In the courtyard you are welcomed by Marforio, a colossal statue of a reclining river god, with a flowing beard and a vase from which the fountain's water pours. Made in the 1st century AD, it may represent Oceanus or the Tiber; the name is thought to derive from where it stood in antiquity, the Forum of Mars, Martis Forum, near the Mamertine Prison at the foot of the Capitol. Marforio is famous above all because it is one of Rome's talking statues. From the 16th century onwards Romans attached anonymous sheets with satirical verses against popes, cardinals and rulers to ancient statues, the so-called pasquinades. Marforio conversed with Pasquino, the most famous talking statue: Marforio would ask a naive question and Pasquino would answer with a savage quip. A famous example: when Pope Urban VIII Barberini stripped the Pantheon of its bronze, Marforio asked who had done it and Pasquino replied: quod non fecerunt barbari, fecerunt Barberini, what the barbarians did not do, the Barberini did. The statue was brought to the Capitol in 1594 and installed in the courtyard with the fountain in 1679."
    },
    fact: {
      it: "Le statue parlanti di Roma sono sei: Pasquino, Marforio, Madama Lucrezia, Abate Luigi, il Facchino e il Babuino.",
      en: "Rome has six talking statues: Pasquino, Marforio, Madama Lucrezia, Abate Luigi, il Facchino and il Babuino."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Marforio",
      wiki_en: "https://en.wikipedia.org/wiki/Marforio",
      museum_it: "https://www.museicapitolini.org/it/collezioni/percorsi_per_sale/palazzo_nuovo",
      museum_en: "https://www.museicapitolini.org/en/collezioni/percorsi_per_sale/palazzo_nuovo",
      yt: { it: "Marforio statua parlante Campidoglio", en: "Marforio talking statue Rome" }
    }
  },
  {
    id: "galata",
    n: 13,
    img: "img/galata.jpg",
    building: "nuovo",
    floor: "primo",
    room: { it: "Sala del Gladiatore", en: "Hall of the Gladiator" },
    title: { it: "Galata morente", en: "Dying Gaul" },
    author: { it: "Copia romana (I–II sec. d.C.) da originale ellenistico di Pergamo, 230–220 a.C.", en: "Roman copy (1st–2nd c. AD) after a Hellenistic original from Pergamon, 230–220 BC" },
    material: { it: "Marmo", en: "Marble" },
    tldr: {
      it: "Un guerriero celta ferito a morte, nudo, con il torque al collo, si regge su un braccio nell'ultimo istante di vita: il capolavoro del pathos ellenistico, che celebra la dignità del nemico sconfitto.",
      en: "A mortally wounded Celtic warrior, naked, with a torque round his neck, props himself on one arm in his last moment of life: the masterpiece of Hellenistic pathos, honouring the dignity of the defeated enemy."
    },
    long: {
      it: "Al centro della sala, che prende il nome dall'antica interpretazione errata della statua come gladiatore, giace il Galata morente. Un guerriero nudo, abbattuto su uno scudo, si sostiene con il braccio destro mentre il sangue esce da una ferita al fianco; il capo è chino, il volto contratto ma composto. I baffi, i capelli spessi e arruffati e soprattutto il torque, il collare rigido di metallo, lo identificano come un Galata, cioè un Celta dell'Asia Minore. La statua è una copia romana in marmo di un originale in bronzo realizzato a Pergamo tra il 230 e il 220 a.C. per celebrare la vittoria del re Attalo I sui Galati, forse opera dello scultore Epigono. Il messaggio è sottile e potente: mostrando il nemico non come un mostro ma come un uomo fiero che muore con dignità, i vincitori esaltano la propria grandezza. È l'espressione più alta dell'arte ellenistica, che cerca l'emozione, il pathos, la sofferenza del corpo. Fu ritrovata a Roma all'inizio del Seicento, negli Horti Sallustiani, presso l'attuale via Veneto, e passò alla collezione del cardinale Ludovico Ludovisi; nel 1734 fu acquistata da papa Clemente XII per il museo. Napoleone la portò a Parigi nel 1797 e tornò nel 1816. Lord Byron le dedicò versi celebri nel Childe Harold. Giratele intorno: la statua è pensata per essere vista da ogni lato, e la tensione del braccio che regge il corpo è visibile in ogni muscolo.",
      en: "In the centre of the hall, which takes its name from the old mistaken interpretation of the statue as a gladiator, lies the Dying Gaul. A naked warrior, fallen onto a shield, supports himself on his right arm while blood flows from a wound in his side; his head is bowed, his face contracted yet composed. The moustache, the thick tousled hair and above all the torque, the rigid metal neck ring, identify him as a Galatian, a Celt of Asia Minor. The statue is a Roman marble copy of a bronze original made in Pergamon between 230 and 220 BC to celebrate King Attalus I's victory over the Galatians, possibly the work of the sculptor Epigonus. The message is subtle and powerful: by showing the enemy not as a monster but as a proud man dying with dignity, the victors exalt their own greatness. It is the highest expression of Hellenistic art, which seeks emotion, pathos, the suffering of the body. It was found in Rome at the beginning of the 17th century in the Horti Sallustiani, near today's Via Veneto, and passed into the collection of Cardinal Ludovico Ludovisi; in 1734 it was bought by Pope Clement XII for the museum. Napoleon took it to Paris in 1797 and it returned in 1816. Lord Byron devoted famous verses to it in Childe Harold. Walk around it: the statue is designed to be seen from every side, and the strain of the arm supporting the body is visible in every muscle."
    },
    fact: {
      it: "Accanto al guerriero giacciono una tromba spezzata e una spada: le sue armi cadute.",
      en: "Beside the warrior lie a broken trumpet and a sword: his fallen weapons."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Galata_morente",
      wiki_en: "https://en.wikipedia.org/wiki/Dying_Gaul",
      museum_it: "https://www.museicapitolini.org/it/collezioni/percorsi_per_sale/palazzo_nuovo/sala_del_gladiatore/statua_del_galata_capitolino",
      museum_en: "https://www.museicapitolini.org/en/collezioni/percorsi_per_sale/palazzo_nuovo/sala_del_gladiatore/statua_del_galata_capitolino",
      yt: { it: "Galata morente Musei Capitolini", en: "Dying Gaul Capitoline Museums" }
    }
  },
  {
    id: "venere",
    n: 14,
    img: "img/venere.jpg",
    building: "nuovo",
    floor: "primo",
    room: { it: "Gabinetto della Venere", en: "Cabinet of Venus" },
    title: { it: "Venere Capitolina", en: "Capitoline Venus" },
    author: { it: "Copia romana (II sec. d.C.) da originale ellenistico derivato da Prassitele", en: "Roman copy (2nd c. AD) after a Hellenistic original derived from Praxiteles" },
    material: { it: "Marmo", en: "Marble" },
    tldr: {
      it: "La dea dell'amore sorpresa al bagno, che si copre con le mani in un gesto di pudore: la Venere più celebre di Roma, custodita in una stanza tutta per sé.",
      en: "The goddess of love surprised at her bath, covering herself with her hands in a gesture of modesty: Rome's most celebrated Venus, kept in a room all her own."
    },
    long: {
      it: "In un piccolo ambiente ottagonale, creato appositamente per lei, si trova la Venere Capitolina. La dea è rappresentata nuda, appena uscita dal bagno, con accanto un vaso e un panno; sorpresa da uno sguardo, si copre il seno con il braccio destro e il pube con la mano sinistra, in un gesto che gli storici dell'arte chiamano Venere pudica. Il tipo deriva dalla celebre Afrodite Cnidia di Prassitele, del IV secolo a.C., la prima statua di culto greca a rappresentare una dea completamente nuda, ma la Capitolina ne è una variante ellenistica più sensuale, con il corpo pieno, l'elaborata acconciatura raccolta in uno chignon e il volto leggermente inclinato. La copia romana, alta 1 metro e 93, fu realizzata in età antonina, nel II secolo d.C., in un marmo pregiato e levigatissimo. Fu ritrovata tra il 1666 e il 1670 nei pressi della basilica di San Vitale, tra il Quirinale e il Viminale, e nel 1752 papa Benedetto XIV la acquistò per il museo. Come molti capolavori capitolini fu portata a Parigi da Napoleone e restituita nel 1816. La sistemazione in una stanza separata risale all'Ottocento e permette di girarle intorno, come richiedono le statue ellenistiche, apprezzando la morbidezza delle spalle e della schiena. Le innumerevoli copie sette-ottocentesche, dalle ville inglesi ai giardini americani, ne fanno una delle immagini più diffuse della bellezza classica.",
      en: "In a small octagonal room created especially for her stands the Capitoline Venus. The goddess is shown naked, just out of her bath, with a vase and a cloth beside her; surprised by a gaze, she covers her breast with her right arm and her pubis with her left hand, in a gesture art historians call Venus Pudica, the modest Venus. The type derives from the famous Aphrodite of Knidos by Praxiteles, of the 4th century BC, the first Greek cult statue to show a goddess completely naked, but the Capitoline is a more sensual Hellenistic variant, with a fuller body, elaborate hair gathered in a chignon and the face slightly inclined. The Roman copy, 1.93 metres tall, was made in the Antonine era, in the 2nd century AD, in fine, highly polished marble. It was found between 1666 and 1670 near the basilica of San Vitale, between the Quirinal and Viminal hills, and in 1752 Pope Benedict XIV bought it for the museum. Like many Capitoline masterpieces it was taken to Paris by Napoleon and returned in 1816. Its display in a separate room dates from the 19th century and allows you to walk around it, as Hellenistic statues demand, appreciating the softness of the shoulders and back. The countless 18th- and 19th-century copies, from English country houses to American gardens, make it one of the most widespread images of classical beauty."
    },
    fact: {
      it: "Nel 2016 la statua fu coperta con pannelli durante la visita del presidente iraniano Rouhani, scatenando polemiche.",
      en: "In 2016 the statue was boxed in with panels during Iranian president Rouhani's visit, sparking controversy."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Venere_Capitolina",
      wiki_en: "https://en.wikipedia.org/wiki/Capitoline_Venus",
      museum_it: "https://www.museicapitolini.org/it/collezioni/percorsi_per_sale/palazzo_nuovo/gabinetto_della_venere/statua_della_venere_capitolina",
      museum_en: "https://www.museicapitolini.org/en/collezioni/percorsi_per_sale/palazzo_nuovo/gabinetto_della_venere/statua_della_venere_capitolina",
      yt: { it: "Venere Capitolina Musei Capitolini", en: "Capitoline Venus statue" }
    }
  },
  {
    id: "colombe",
    n: 15,
    img: "img/colombe.jpg",
    building: "nuovo",
    floor: "primo",
    room: { it: "Sala delle Colombe", en: "Hall of the Doves" },
    title: { it: "Mosaico delle colombe", en: "Mosaic of the Doves" },
    author: { it: "Arte romana, II sec. d.C., da un originale di Sosos di Pergamo", en: "Roman art, 2nd c. AD, after an original by Sosus of Pergamon" },
    material: { it: "Mosaico in tessere minute (opus vermiculatum)", en: "Mosaic in tiny tesserae (opus vermiculatum)" },
    tldr: {
      it: "Quattro colombe su una coppa di bronzo, una che beve: un mosaico dalla Villa di Adriano che riproduce il capolavoro descritto da Plinio, con tessere piccole come chicchi di riso.",
      en: "Four doves on a bronze bowl, one drinking: a mosaic from Hadrian's Villa reproducing the masterpiece described by Pliny, with tesserae as small as grains of rice."
    },
    long: {
      it: "L'ultima tappa è un'opera piccola ma preziosissima. Il Mosaico delle colombe, di 85 per 98 centimetri, raffigura quattro colombe posate sull'orlo di una coppa di bronzo dorato: una beve, una si liscia le piume, le altre guardano intorno, mentre l'acqua riflette la luce e la coppa proietta la sua ombra. È un emblema, cioè un quadro in mosaico destinato al centro di un pavimento, e fu realizzato nel II secolo d.C. per la Villa di Adriano a Tivoli, dove fu ritrovato nel 1737 dal cardinale Giuseppe Alessandro Furietti. Plinio il Vecchio, nella Storia Naturale, descrive un mosaico identico realizzato a Pergamo nel II secolo a.C. da Sosos, il più famoso mosaicista dell'antichità, con una colomba che beve e l'ombra della sua testa riflessa nell'acqua: la versione capitolina è considerata la copia più fedele di quell'originale perduto. La tecnica è l'opus vermiculatum, con tessere minuscole, alcune di appena un millimetro, che seguono i contorni delle figure per ottenere sfumature degne di un dipinto. Contate le tessere in un centimetro quadrato: possono essere più di sessanta. Il mosaico fu acquistato per il museo nel 1765 da papa Clemente XIII. Nella stessa sala trovate anche un altro mosaico dalla Villa di Adriano con maschere teatrali, e le iscrizioni funerarie dei colombari romani, ma il vero tesoro sono queste quattro colombe, che hanno ispirato gioielli in micromosaico, stoffe e stampe per due secoli.",
      en: "The final stop is a small but extremely precious work. The Mosaic of the Doves, 85 by 98 centimetres, depicts four doves perched on the rim of a gilded bronze bowl: one drinks, one preens its feathers, the others look around, while the water reflects the light and the bowl casts its shadow. It is an emblema, a mosaic picture intended for the centre of a floor, and it was made in the 2nd century AD for Hadrian's Villa at Tivoli, where it was found in 1737 by Cardinal Giuseppe Alessandro Furietti. Pliny the Elder, in his Natural History, describes an identical mosaic made in Pergamon in the 2nd century BC by Sosus, the most famous mosaicist of antiquity, with a dove drinking and the shadow of its head reflected in the water: the Capitoline version is considered the most faithful copy of that lost original. The technique is opus vermiculatum, with minute tesserae, some barely a millimetre across, following the contours of the figures to achieve shading worthy of a painting. Count the tesserae in one square centimetre: there can be more than sixty. The mosaic was bought for the museum in 1765 by Pope Clement XIII. In the same room you will also find another mosaic from Hadrian's Villa with theatrical masks, and the funerary inscriptions of Roman columbaria, but the real treasure is these four doves, which have inspired micromosaic jewellery, textiles and prints for two centuries."
    },
    fact: {
      it: "Il mosaico contiene circa 160 tessere per pollice quadrato, secondo le stime settecentesche.",
      en: "The mosaic contains about 160 tesserae per square inch, according to 18th-century estimates."
    },
    links: {
      wiki_it: "https://it.wikipedia.org/wiki/Sosos_di_Pergamo",
      wiki_en: "https://en.wikipedia.org/wiki/Sosus_of_Pergamon",
      museum_it: "https://www.museicapitolini.org/it/opera/mosaico-delle-colombe",
      museum_en: "https://www.museicapitolini.org/en/opera/mosaico-delle-colombe",
      yt: { it: "Mosaico delle colombe Musei Capitolini", en: "Mosaic of the Doves Capitoline Hadrian" }
    }
  }
];

/* ---------------- QUIZ ---------------- */
const QUIZ = [
  { work: "lupa", q: { it: "Chi ha aggiunto i gemelli Romolo e Remo sotto la Lupa Capitolina?", en: "Who added the twins Romulus and Remus beneath the Capitoline Wolf?" },
    a: { it: ["Uno scultore etrusco del V secolo a.C.", "Probabilmente Antonio del Pollaiolo, alla fine del Quattrocento", "Gian Lorenzo Bernini", "Michelangelo"], en: ["An Etruscan sculptor of the 5th century BC", "Probably Antonio del Pollaiolo, at the end of the 15th century", "Gian Lorenzo Bernini", "Michelangelo"] }, correct: 1 },
  { work: "lupa", q: { it: "Cosa hanno suggerito le analisi al radiocarbonio sulla Lupa Capitolina?", en: "What did radiocarbon analyses suggest about the Capitoline Wolf?" },
    a: { it: ["Che è un falso ottocentesco", "Che risale al V secolo a.C.", "Che potrebbe essere medievale, XI–XII secolo", "Che è di epoca augustea"], en: ["That it is a 19th-century fake", "That it dates from the 5th century BC", "That it may be medieval, 11th–12th century", "That it is Augustan"] }, correct: 2 },
  { work: "marco-aurelio", q: { it: "Perché la statua di Marco Aurelio non fu fusa nel Medioevo?", en: "Why was the statue of Marcus Aurelius not melted down in the Middle Ages?" },
    a: { it: ["Era sepolta sotto terra", "Era creduta una statua di Costantino", "Era troppo pesante da spostare", "Era nascosta in Vaticano"], en: ["It was buried underground", "It was believed to be a statue of Constantine", "It was too heavy to move", "It was hidden in the Vatican"] }, correct: 1 },
  { work: "marco-aurelio", q: { it: "Da quando l'originale di Marco Aurelio è custodito all'interno del museo?", en: "Since when has the original Marcus Aurelius been kept inside the museum?" },
    a: { it: ["Dal 1538", "Dal 1990", "Dal 1816", "Dal 2020"], en: ["Since 1538", "Since 1990", "Since 1816", "Since 2020"] }, correct: 1 },
  { work: "spinario", q: { it: "Cosa sta facendo lo Spinario?", en: "What is the Spinario doing?" },
    a: { it: ["Allaccia un sandalo", "Si toglie una spina dal piede", "Lancia un disco", "Cura una ferita al ginocchio"], en: ["Tying a sandal", "Removing a thorn from his foot", "Throwing a discus", "Tending a knee wound"] }, correct: 1 },
  { work: "spinario", q: { it: "In che anno Sisto IV donò i bronzi al popolo romano, fondando i Musei Capitolini?", en: "In what year did Sixtus IV donate the bronzes to the Roman people, founding the Capitoline Museums?" },
    a: { it: ["1471", "1538", "1734", "1600"], en: ["1471", "1538", "1734", "1600"] }, correct: 0 },
  { work: "bruto", q: { it: "Di che materiale sono gli occhi del Bruto Capitolino?", en: "What are the eyes of the Capitoline Brutus made of?" },
    a: { it: ["Bronzo dorato", "Avorio e pasta vitrea", "Marmo bianco", "Argento"], en: ["Gilded bronze", "Ivory and glass paste", "White marble", "Silver"] }, correct: 1 },
  { work: "costantino", q: { it: "Dove si trovava in origine il Colosso di Costantino?", en: "Where did the Colossus of Constantine originally stand?" },
    a: { it: ["Nel Colosseo", "Nella Basilica di Massenzio", "Nel Pantheon", "A Villa Adriana"], en: ["In the Colosseum", "In the Basilica of Maxentius", "In the Pantheon", "At Hadrian's Villa"] }, correct: 1 },
  { work: "costantino", q: { it: "Quanto era alta circa la statua completa di Costantino?", en: "Roughly how tall was the complete statue of Constantine?" },
    a: { it: ["4 metri", "12 metri", "25 metri", "2,5 metri"], en: ["4 metres", "12 metres", "25 metres", "2.5 metres"] }, correct: 1 },
  { work: "ercole", q: { it: "Cosa tiene in mano l'Ercole in bronzo dorato?", en: "What is the gilded bronze Hercules holding?" },
    a: { it: ["Una lira e una corona", "La clava e le mele delle Esperidi", "Uno scudo e una lancia", "La pelle del leone"], en: ["A lyre and a crown", "The club and the apples of the Hesperides", "A shield and a spear", "The lion skin"] }, correct: 1 },
  { work: "commodo", q: { it: "Come si fece rappresentare l'imperatore Commodo nel celebre busto?", en: "How did Emperor Commodus have himself portrayed in the famous bust?" },
    a: { it: ["Come Giove", "Come Apollo", "Come Ercole", "Come Marte"], en: ["As Jupiter", "As Apollo", "As Hercules", "As Mars"] }, correct: 2 },
  { work: "commodo", q: { it: "Dove fu ritrovato il busto di Commodo nel 1874?", en: "Where was the bust of Commodus found in 1874?" },
    a: { it: ["Negli Horti Lamiani sull'Esquilino", "Nel Foro Boario", "A Ostia Antica", "Sul Palatino"], en: ["In the Horti Lamiani on the Esquiline", "In the Forum Boarium", "At Ostia Antica", "On the Palatine"] }, correct: 0 },
  { work: "medusa", q: { it: "Cosa rende insolita la Medusa di Bernini?", en: "What makes Bernini's Medusa unusual?" },
    a: { it: ["È di bronzo invece che di marmo", "È viva e sofferente, non una testa mozzata", "Non ha serpenti", "È ritratta di spalle"], en: ["It is bronze instead of marble", "She is alive and suffering, not a severed head", "She has no snakes", "She is shown from behind"] }, correct: 1 },
  { work: "orazi", q: { it: "Quale trattato fu firmato nella Sala degli Orazi e Curiazi nel 1957?", en: "Which treaty was signed in the Hall of the Horatii and Curiatii in 1957?" },
    a: { it: ["Il Trattato di Versailles", "I Patti Lateranensi", "I Trattati di Roma (CEE ed Euratom)", "Il Trattato di Maastricht"], en: ["The Treaty of Versailles", "The Lateran Pacts", "The Treaties of Rome (EEC and Euratom)", "The Maastricht Treaty"] }, correct: 2 },
  { work: "orazi", q: { it: "Chi affrescò la Sala degli Orazi e Curiazi?", en: "Who frescoed the Hall of the Horatii and Curiatii?" },
    a: { it: ["Caravaggio", "Il Cavalier d'Arpino", "Raffaello", "Pietro da Cortona"], en: ["Caravaggio", "Cavalier d'Arpino", "Raphael", "Pietro da Cortona"] }, correct: 1 },
  { work: "buona-ventura", q: { it: "Cosa fa la zingara nella Buona Ventura di Caravaggio mentre legge la mano?", en: "What does the gypsy do in Caravaggio's Fortune Teller while reading the palm?" },
    a: { it: ["Ruba la borsa", "Sfila l'anello al giovane", "Nasconde una carta", "Versa del vino"], en: ["Steals the purse", "Slips the ring off the young man's finger", "Hides a card", "Pours wine"] }, correct: 1 },
  { work: "san-giovanni", q: { it: "Quale animale abbraccia il San Giovanni Battista di Caravaggio?", en: "Which animal does Caravaggio's Saint John the Baptist embrace?" },
    a: { it: ["Un agnello", "Un ariete", "Un cane", "Una capra"], en: ["A lamb", "A ram", "A dog", "A goat"] }, correct: 1 },
  { work: "marforio", q: { it: "Perché Marforio è chiamato 'statua parlante'?", en: "Why is Marforio called a 'talking statue'?" },
    a: { it: ["Contiene un meccanismo sonoro", "Vi si affiggevano satire anonime, in dialogo con Pasquino", "Fu usata come pulpito", "Un'iscrizione la fa parlare in prima persona"], en: ["It contains a sound mechanism", "Anonymous satires were posted on it, in dialogue with Pasquino", "It was used as a pulpit", "An inscription makes it speak in the first person"] }, correct: 1 },
  { work: "galata", q: { it: "Cosa identifica il Galata morente come un guerriero celta?", en: "What identifies the Dying Gaul as a Celtic warrior?" },
    a: { it: ["L'elmo con le corna", "Il torque al collo e i baffi", "Il tatuaggio sul braccio", "La corazza"], en: ["The horned helmet", "The torque round his neck and the moustache", "The tattoo on his arm", "The breastplate"] }, correct: 1 },
  { work: "galata", q: { it: "Per celebrare quale vittoria fu realizzato l'originale del Galata morente?", en: "Which victory did the original of the Dying Gaul celebrate?" },
    a: { it: ["Di Roma su Cartagine", "Di Attalo I di Pergamo sui Galati", "Di Alessandro Magno sui Persiani", "Di Cesare sui Galli"], en: ["Rome over Carthage", "Attalus I of Pergamon over the Galatians", "Alexander the Great over the Persians", "Caesar over the Gauls"] }, correct: 1 },
  { work: "venere", q: { it: "Da quale celebre statua greca deriva il tipo della Venere Capitolina?", en: "From which famous Greek statue does the Capitoline Venus type derive?" },
    a: { it: ["L'Afrodite Cnidia di Prassitele", "La Nike di Samotracia", "Il Discobolo di Mirone", "L'Atena Parthenos di Fidia"], en: ["The Aphrodite of Knidos by Praxiteles", "The Nike of Samothrace", "The Discobolus of Myron", "The Athena Parthenos by Phidias"] }, correct: 0 },
  { work: "colombe", q: { it: "Da dove proviene il Mosaico delle colombe?", en: "Where does the Mosaic of the Doves come from?" },
    a: { it: ["Da Pompei", "Dalla Villa di Adriano a Tivoli", "Da Ostia Antica", "Dalla Domus Aurea"], en: ["From Pompeii", "From Hadrian's Villa at Tivoli", "From Ostia Antica", "From the Domus Aurea"] }, correct: 1 },
  { work: "colombe", q: { it: "Quale autore antico descrive l'originale del mosaico di Sosos?", en: "Which ancient author describes the original of Sosus' mosaic?" },
    a: { it: ["Plinio il Vecchio", "Tito Livio", "Virgilio", "Tacito"], en: ["Pliny the Elder", "Livy", "Virgil", "Tacitus"] }, correct: 0 },
  { work: "lupa", q: { it: "Quanti sono i Musei Capitolini in termini di età rispetto agli altri musei pubblici del mondo?", en: "How do the Capitoline Museums rank in age among the world's public museums?" },
    a: { it: ["Sono i più antichi", "Sono i secondi dopo il Louvre", "Sono i più antichi d'Italia ma non del mondo", "Sono del Novecento"], en: ["They are the oldest", "Second after the Louvre", "The oldest in Italy but not in the world", "Twentieth-century"] }, correct: 0 }
];

/* ---------------- UI STRINGS ---------------- */
const I18N = {
  it: {
    appName: "Musei Capitolini",
    subtitle: "Guida alla visita · 15 capolavori",
    nav_route: "Percorso", nav_map: "Mappa", nav_quiz: "Quiz", nav_info: "Info",
    hero_title: "I 15 capolavori da non perdere",
    hero_text: "Segui il percorso nell'ordine consigliato: parte dal cortile del Palazzo dei Conservatori e finisce nel Palazzo Nuovo. Tocca un'opera per leggere, ascoltare e vedere dove si trova.",
    progress: "Opere viste",
    start: "Inizia il percorso",
    continue: "Continua",
    all_seen: "Hai visto tutte le opere! Mettiti alla prova con il quiz.",
    go_quiz: "Vai al quiz",
    tldr: "In breve",
    detail: "Approfondimento",
    listen: "Ascolta",
    pause: "Pausa",
    resume: "Riprendi",
    stop: "Stop",
    no_tts: "Il tuo browser non supporta la lettura vocale.",
    where: "Dove si trova",
    show_on_map: "Mostra sulla mappa",
    resources: "Risorse",
    wikipedia: "Wikipedia",
    museum_site: "Sito ufficiale del museo",
    youtube: "Cerca video su YouTube",
    curiosity: "Lo sapevi?",
    mark_seen: "Segna come vista",
    seen: "Vista ✓",
    prev: "Precedente", next: "Successiva",
    back: "Indietro",
    map_title: "Mappa del museo",
    map_note: "Mappa schematica, non in scala. I numeri corrispondono all'ordine del percorso.",
    overview: "Panoramica",
    f_cons_cortile: "Conservatori · Cortile",
    f_cons_primo: "Conservatori · 1° piano",
    f_cons_secondo: "Conservatori · 2° piano (Pinacoteca)",
    f_nuovo_cortile: "Palazzo Nuovo · Cortile",
    f_nuovo_primo: "Palazzo Nuovo · 1° piano",
    legend_tap: "Tocca un numero per aprire l'opera.",
    quiz_title: "Quiz finale",
    quiz_intro: "10 domande sulle opere che hai appena visto. Guadagna punti e conquista il titolo di Senatore del Campidoglio!",
    quiz_start: "Inizia il quiz",
    quiz_question: "Domanda",
    quiz_of: "di",
    quiz_correct: "Esatto!",
    quiz_wrong: "Sbagliato.",
    quiz_answer_was: "La risposta giusta era:",
    quiz_next: "Prossima domanda",
    quiz_finish: "Vedi il risultato",
    quiz_result: "Risultato",
    quiz_score: "Punteggio",
    quiz_points: "punti",
    quiz_streak: "Serie migliore",
    quiz_retry: "Rigioca",
    quiz_review: "Rivedi l'opera",
    quiz_share: "Condividi",
    quiz_copied: "Risultato copiato!",
    quiz_best: "Record personale",
    rank_0: "Turista distratto", rank_0_d: "Hai visto le opere... di sfuggita. Torna a dare un'occhiata!",
    rank_1: "Visitatore curioso", rank_1_d: "Buona base! Qualche dettaglio ti è sfuggito.",
    rank_2: "Custode del Campidoglio", rank_2_d: "Conosci bene i capolavori capitolini.",
    rank_3: "Senatore di Roma", rank_3_d: "Perfetto! Il Senato e il Popolo Romano ti salutano. SPQR!",
    share_text: "Ho fatto {score}/{total} al quiz dei Musei Capitolini e ho conquistato il titolo di {rank}! 🏛️",
    info_title: "Informazioni utili",
    info_hours: "Orari",
    info_hours_v: "Tutti i giorni 9:30–19:30 (ultimo ingresso un'ora prima). Chiuso 1 gennaio, 1 maggio, 25 dicembre. Verifica sempre sul sito ufficiale.",
    info_where: "Dove",
    info_where_v: "Piazza del Campidoglio 1, Roma. Ingresso dal Palazzo dei Conservatori (a destra salendo la Cordonata).",
    info_route: "Percorso consigliato",
    info_route_v: "Palazzo dei Conservatori (cortile → 1° piano → Pinacoteca al 2° piano) → Galleria Lapidaria e Tabularium (sotterranei, vista sul Foro) → Palazzo Nuovo (cortile → 1° piano). Circa 2–3 ore.",
    info_tips: "Consigli",
    info_tips_v: "Non perdere la terrazza del Tabularium sul Foro Romano e la Terrazza Caffarelli (caffè con vista). Le foto senza flash sono permesse.",
    info_tickets: "Biglietti e sito ufficiale",
    info_credits: "Crediti",
    info_credits_v: "Le immagini provengono da Wikimedia Commons (pubblico dominio / CC). Testi redatti per questa guida; verifica sempre i dettagli con le fonti ufficiali.",
    install: "Aggiungi alla schermata Home per usarla come app, anche offline.",
    reset: "Azzera progressi",
    reset_confirm: "Vuoi davvero azzerare le opere viste e il punteggio?",
    lang_switch: "EN"
  },
  en: {
    appName: "Capitoline Museums",
    subtitle: "Visitor guide · 15 masterpieces",
    nav_route: "Route", nav_map: "Map", nav_quiz: "Quiz", nav_info: "Info",
    hero_title: "The 15 masterpieces not to miss",
    hero_text: "Follow the route in the suggested order: it starts in the courtyard of the Palazzo dei Conservatori and ends in the Palazzo Nuovo. Tap a work to read, listen and see where it is.",
    progress: "Works seen",
    start: "Start the route",
    continue: "Continue",
    all_seen: "You have seen all the works! Test yourself with the quiz.",
    go_quiz: "Go to the quiz",
    tldr: "In short",
    detail: "In depth",
    listen: "Listen",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    no_tts: "Your browser does not support speech playback.",
    where: "Where it is",
    show_on_map: "Show on map",
    resources: "Resources",
    wikipedia: "Wikipedia",
    museum_site: "Official museum website",
    youtube: "Search videos on YouTube",
    curiosity: "Did you know?",
    mark_seen: "Mark as seen",
    seen: "Seen ✓",
    prev: "Previous", next: "Next",
    back: "Back",
    map_title: "Museum map",
    map_note: "Schematic map, not to scale. Numbers follow the route order.",
    overview: "Overview",
    f_cons_cortile: "Conservatori · Courtyard",
    f_cons_primo: "Conservatori · 1st floor",
    f_cons_secondo: "Conservatori · 2nd floor (Picture Gallery)",
    f_nuovo_cortile: "Palazzo Nuovo · Courtyard",
    f_nuovo_primo: "Palazzo Nuovo · 1st floor",
    legend_tap: "Tap a number to open the work.",
    quiz_title: "Final quiz",
    quiz_intro: "10 questions about the works you have just seen. Earn points and win the title of Senator of the Capitol!",
    quiz_start: "Start the quiz",
    quiz_question: "Question",
    quiz_of: "of",
    quiz_correct: "Correct!",
    quiz_wrong: "Wrong.",
    quiz_answer_was: "The right answer was:",
    quiz_next: "Next question",
    quiz_finish: "See result",
    quiz_result: "Result",
    quiz_score: "Score",
    quiz_points: "points",
    quiz_streak: "Best streak",
    quiz_retry: "Play again",
    quiz_review: "Review the work",
    quiz_share: "Share",
    quiz_copied: "Result copied!",
    quiz_best: "Personal best",
    rank_0: "Distracted tourist", rank_0_d: "You saw the works... in passing. Go back for another look!",
    rank_1: "Curious visitor", rank_1_d: "Good foundation! A few details slipped by.",
    rank_2: "Keeper of the Capitol", rank_2_d: "You know the Capitoline masterpieces well.",
    rank_3: "Senator of Rome", rank_3_d: "Perfect! The Senate and People of Rome salute you. SPQR!",
    share_text: "I scored {score}/{total} on the Capitoline Museums quiz and earned the title of {rank}! 🏛️",
    info_title: "Useful information",
    info_hours: "Opening hours",
    info_hours_v: "Daily 9:30–19:30 (last entry one hour before). Closed 1 January, 1 May, 25 December. Always check the official website.",
    info_where: "Where",
    info_where_v: "Piazza del Campidoglio 1, Rome. Entrance through the Palazzo dei Conservatori (on the right as you climb the Cordonata).",
    info_route: "Suggested route",
    info_route_v: "Palazzo dei Conservatori (courtyard → 1st floor → Picture Gallery on the 2nd floor) → Galleria Lapidaria and Tabularium (underground, view over the Forum) → Palazzo Nuovo (courtyard → 1st floor). About 2–3 hours.",
    info_tips: "Tips",
    info_tips_v: "Don't miss the Tabularium terrace over the Roman Forum and the Caffarelli Terrace (café with a view). Photos without flash are allowed.",
    info_tickets: "Tickets and official website",
    info_credits: "Credits",
    info_credits_v: "Images from Wikimedia Commons (public domain / CC). Texts written for this guide; always check details against official sources.",
    install: "Add to your Home Screen to use it as an app, even offline.",
    reset: "Reset progress",
    reset_confirm: "Do you really want to reset seen works and score?",
    lang_switch: "IT"
  }
};
