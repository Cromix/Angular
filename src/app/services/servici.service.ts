import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ServiciService {
  services = [
    {
      id: 1,
      spec: "Stomatologie preventivă",
      des: [{ name: "Dr. Simona Bran-Walter", Tel: "0728386786" }],
      img: "/assets/icons/stoma-prevent.png",
      imgPrev: "assets/imgs/sina-protruzie.jpg",
      text: [
        "Un dinte sanatos sta intr-o gingie sanatoasa!",
        "Plecand de la aceasta premiza, consideram ca afectiunile parodontale pot fi depistate la timp si prevenite prin periaj, detartraj manual sau cu ultrasunete.",
        "Totodata cu ajutorul jetului pe baza de bicarbonat pot fi indepartate placa bacteriana, petele dentare aparute din cauza alimentatiei dar si diverse afectiuni gingivale.",
        "Sigilarea dintilor  la copii este modul in care putem prevenii aparitia cariei dentare, dar la fel de important este si o fluorizare corecta.",
        "TERAPIA SFORAITULUI CU AJUTORUL   SINELOR DE PROTRUZIE",
        "DE CE SFORAIM?",
        "PNEEA IN SOMN apare deobicei atunci cand musculatura valului palatin si a limbii sufera modificari.  SFORAITUL  datorita sunetelor poate deranja partenerul de viata , dar nu numai, el apare datorita modificarilo cailor respiratorii superioare si poate duce la diverse imbolnaviri ale organismului .  Initial inofensiva, apneea in somn poate ajunge de la putine secunde pana la minute , timp in care caile respiratorii sunt inchise datorita limbii si a musculatirii care a suferit modificari . Din acest moment poate sa devina o reala problema de sanatate,  deloc de neglijat ; creierul  trage semnalul de alarma si trezeste organismul  pentru a respira.  Cu cat sunt mai dese aceste semnale sau de durata mai lunga poate duce la stari de oboseala,  lipsa de concentrare ( chiar si de adormire pentru secunde) si creierul incepe sa uite . Exista si riscul cresterii tensiunii arteriale care poate duce la un risc crescut de atac cerebral si chiar  la infarct. Statistica spune ca persoanele cu apnee in somn traiesc in medie cu pana la 7 ani mai putin. DIAGNOTIC Se efectueaza  de catre colegii specialisti din cadrul  laboratorului de somn,  unde cu ajutorul unor aparate se poate masura gradul imbolnavirii. Caile respiratorii superioare sunt verificate si de catre medicii specialisti  O.R.L. pentru a nu fi obstruate (polipi nazali sau alte afectiuni). TERAPIA Situatiile de apnee usoara se pot rezolva cu ajutorul sinelor de protruzie in asa fel incat sforaitul sa nu mai fie o problema, respiratia devine usoara, aceasta  datorita  ortezelor  care pe departe sunt cu mult mai usor de suportat de catre dumneavoastra,  decat alte variante existente pana in prezent. In cazul in care apneea in somn are forma mai severa, medicii specializati in problem de somn si cei  de la O.R.L. va vor recomanda alte metode de terapie ( oxigenoterapie sau chiar operatie). "
      ]
    },
    {
      id: 2,
      spec: "Medicină dentară adulți",
      des: [
        { name: "Dr. Simona Bran-Walter", Tel: "0728386786" },
      ],
      img: "/assets/icons/dental-adulti.png",
      text: [
        "Stomatologia zilelor noastre trebuie  sa fie reprezentata prin calitate si tehnici minimal invazive.",
        "Acordam doesebita atentie ca in cadrul cabinetului nostru, durerea sa fie aproape inexistenta.",
        "Stiind ca in acste conditii,  rezultatul final pe care il obtinem, adica vindecarea, sunt mai bune si rapide.",
        "Gama larga de servicii terapeutice atat  pentru copii cat si  pentru adulti, de la obturatii pana la proteze fixe si mobile, sunt de calitate si la standarde de ultima ora.",
        "Armonia si estetica se imbina in cadrul unui act medical, care  sta la baza obiectivelor noastre."
      ]
    },
    {
      id: 3,
      spec: "Medicină dentară copii",
      des: [
        { name: "Dr. Simona Bran-Walter", Tel: "0728386786" },
      ],
      img: "/assets/icons/dental-copii.png",
      text: [
        "Pentru ca atunci cand copii nostrii sunt fericiti, ne transporta si pe noi in starea lor de spirit, ne-am gandit sa inlocuim  banalele plombe triste albe sau de multe ori inca gri, cu culori vesele.",
        "Asocierea cu pietre pretioase, mai ales de catre fetite, este datorata sclipiciului inglobat in obturatii."
      ]
    },
    {
      id: 19,
      spec: "Parodontologie",
      des: [
        { name: "Dr. Andreea Hanghicel", Tel: "0728386786" }
      ],
      img: "/assets/icons/periodontics.png",
      text: [
        "Boala parodontală sau parodontoza, așa cum e cunoscută în viața de zi cu zi, reprezintă inflamația și pierderea progresivă a suportului dentar. Din ce în ce mai întâlnită în rândul populației, boala parodontală nu se face resimțită prin apariția durerii, ci prin gingii sângeroase și în cele din urmă prin mobilitate dentară, ducând în final la pierderea dinților de pe arcadă.",
        "Cea mai importantă metodă de combatere a bolii parodontale este prevenția. Ceea ce înseamnă o atenție crescută asupra igienei orale din partea pacientului dar și prezentarea acestuia în cabinetul de medicină dentară în vederea realizării unei igienizări profesionale o dată pe an, în unele cazuri și mai frecvent.",
        "Parodontologia este ramura stomatologiei care se ocupă de bunăstarea osului, ligamentelor parodontale și ale gingiei. Astfel, daca prezentați o gingie roșie-violacee, moale și crescută în volum sau o gingie subțire, retrasă de pe dinte, care duce la expunerea rădăcinii dentare și totodată la apariția sensibilității dentare, vă așteptăm la un consult de specialitate.",
        "Asocierea cu pietre pretioase, mai ales de catre fetite, este datorata sclipiciului inglobat in obturatii."
      ]
    },
    {
      id: 4,
      spec: "Ortodontie si Ortopedie Dento-Faciala",
      des: [
        { name: "Dr. Simona Bran-Walter", Tel: "0728386786" },
        { name: "Dr. Oana Zirbo ", Tel: "0728386786" }],
      img: "/assets/icons/stoma.png",
      text: [
        "Din practica ei zilnica fac parte tratamentul ortodontic al adultului prin abordarea interdisciplinara a cazurilor, tratamentul ortodontic al adolescentilor si interceptia (aparate mobilizabile si miofunctionale) care vizeaza cresterea si dezvoltarea armonioasa a copilului."
      ]
    },
    {
      id: 16,
      spec: "Implantologie",
      des: [{ name: "Dr. Beatrice Doandes", Tel: "0728386786" }],
      img: "/assets/icons/implant.png",
      imgPrev: "assets/imgs/dent-implant.jpg",
      text: [
        "Implantul  dentar este un dispozitiv care se introduce in osul maxilar sau mandibular in scopul de a inchide  spatii care au rezultat in urma pierderii unor dinti.  Peste implanturile dentare se confectioneaza  lucrarea protetica dorita.",
        "Supraprotezarea cu miniimplanturi a fost gandita de a venii in ajutorul tuturor purtatorilor de proteze mobile.",
        "Metoda confera stabilitate imediata protezei.",
        "Dupa inserarea miniimplantelor in os si adaptarea protezei deja existente, in aceeasi sedinta, se observa de catre pacient o imbunatatire a stabilitatii si functionalitatii protezei."
      ]
    },
    {
      id: 5,
      spec: "Chirurgie maxilo-faciala",
      des: [{ name: "Dr. Beatrice Doandes", Tel: "0728386786" },],
      img: "/assets/icons/stoma-chirurgie.png"
    },
    {
      id: 6,
      spec: "Medicină de familie",
      des: [
        { name: "Dr. Daniela David", Tel: "0770771493" },
        { name: "Dr. Dragos Stoicu", Tel: "0725560276" }
      ],
      img: "/assets/icons/med-familie.png",
      text: [
        "Rolul medicului de familie este cel de strateg al starii de sanatate a omului sanatos sau bolnav, asigurand asistenta medicala primara si continua, prin actiuni preventive,educationale, terapeutice si de recuperare contribuind astfel la promovarea starii de sanatate a individului, a familiei si colectivitatii.",
        "In cadrul medicinei de familie, pacientul are dreptul la gratuitatea actelor medicale care fac parte din 'pachetul asigurat' cum ar fi : consultatii la cabinet, primirea retetelor compensate sau gratuite, a biletelor de trimitere sau de internare ( dupa caz), vaccinarile obligatorii.",
        "Scopul medicului de familie este acela de a preveni, vindeca sau ameliora suferinta pacientului."
      ]
    },
    {
      id: 21,
      spec: "Cardiologie",
      des: [
        { name: "Dr. Zus Sebastian", Tel: "0770396146" },
      ],
      img: "/assets/icons/cardio.png",
      text: [
        "Dr. Zus Adrian-Sebastian, medic specialist cardiologie cu competenţă în ecografie cardiacă şi cardiologie intervenţională, cu activitate în cadrul Institutului de Boli Cardiovasculare Timişoara şi Universităţii de Medicină şi Farmacie “Victor Babeş” Timişoara, oferă servicii cardiologie complete:",
        "• consultaţie",
        "• EKG",
        "• ecografie cardiacă",
        "• Holtere",
        "• test de efort",
        "• consultaţii on-line",
        "• precum şi sfaturi pentru prevenţia bolilor cardiovasculare. "
      ]
    },

    // {
    //   id: 8,
    //   spec: "Medicina muncii",
    //   des: [{ name: "Dr. Valentin Duda", Tel: "0771509087" }],
    //   img: "/assets/icons/med-munci.png",
    //   text: [
    //     "Medicina muncii este specialitatea medicala care studiaza relatia om-munca, adaptarea omului la munca si adaptarea muncii la persoana care o efectueaza.",
    //     "În conformitate cu legislația în vigoare (HG 355/2007; HG 1169/2011) asigurăm:",
    //     "• controlul medical la angajarea in munca;",
    //     "• controlul medical de adaptare;",
    //     "• controlul medical periodic;",
    //     "• controlul medical la reluarea muncii.",
    //     "• Întocmire dosare gravide",
    //     "La cerere:",
    //     "Aviz medical  Siguranta Circulatiei",
    //     "Fisa port arma",
    //     "Fisa medicala pentru obtinerea/preschimbarea permisului auto"
    //   ]
    // },
    {
      id: 10,
      spec: "Ortopedie si Traumatologie",
      des: [],
      img: "/assets/icons/traumo.png",
      text: [
        "Ortopedia și traumatologia este specialitatea chirurgicală care se ocupă cu depistarea, diagnosticarea, tratarea și recuperarea afecțiunilor congenitale și dobândite, traumatice și netraumatice, ale aparatului locomotor."
      ]
    },
    {
      id: 11,
      spec: "Alergologie",
      des: [{ name: "Dr. Ramona Muresan", Tel: "0723790400" }],
      img: "/assets/icons/alergo.png",
      text: [
        "Alergologia se ocupa cu diagnosticul si tratarea alergiilor de orice fel (respiratorii, alimentare, medicamentoase), astmului bronsic , eruptiilor cutanate alergice, etc. atat la copii cat si la adult."
      ]
    },
    {
      id: 12,
      spec: "Analize genetice",
      des: [{ name: "http://amsgeneticlab.ro/", Tel: "0213247050" }],
      img: "/assets/icons/genetic.png"
    },
    {
      id: 13,
      spec: "Analize oncogenetice",
      des: [{ name: "http://ams.ro/", Tel: "0213247050" }],
      img: "/assets/icons/genetic.png"
    },
    {
      id: 14,
      spec: "Psihologie clinică și consiliere psihologică",
      des: [{ name: "Psih. Flavia Daiana Grek", Tel: "0748330089" }],
      img: "/assets/icons/psiho.png",
      text: [
        "Evaluarea psihologică presupune atât aplicarea unor teste psihologice cât şi interviul clinic, realizat de un psiholog autorizat în a întreprinde o astfel de evaluare. Evaluarea psihologică se realizează la cererea altor specialiști (ex. terapeut, psihiatru, medic de familie, etc.). Evaluarea psihologică are în vedere investigarea comportamentelor şi a funcţiilor psihice a individului, atât în identificare punctelor forte, a resurselor persoanle, cît și investigarea unor eventuale tulburări. ",
        "Consilierea psihologică este o intervenție psihologică care se adresează persoanelor aflate în situații de criză, sau care se află în impas în ce privește rezolvarea unor situații din viață personală sau profesională. Consilierea psihologică tratează teme concrete, a unei probleme, merge țintit pe problemă. Consilierea psihologică se adresează adulților, copiilor, adolescenților și vârstnicilor deopotrivă. Consilierea se realizează fie prin consiliere individuală, fie prin consiliere de grup, de exemplu în cadrul grupurilor de suport.",
        "Serviciile oferite sunt:",
        "• evaluare psihologică clinică cu referire la factorii psihologici implicati/relevanti pentru sănătate și boală la copii și adulti (evalaure individulă, familie, cuplu, grup/organizție)",
        "• evaluarea psihologică clinică a copiilor cu cerințe educaționale speciale - CES",
        "• evaluarea tulburărilor de neurodezvoltare",
        "• identificarea factorilor psihologici implicați în sănătate, dezvoltare și tulburare/boală mintală, handicap/dizabilități",
        "• consiliere psihologică pentru copii, adoleșcenți, adulți, vârstnici (administrat grup/familie/cuplu sau individual) în scopul optimizării, autocunoașterii și dezvoltării personale, dar și în scopul prevenției și remiterii problemelor emoționale, cognitive și de comportament",
        "• intervenții paliative (ex. consiliere suportivă)",
        "• asistență psihologică clinică a copiilor cu CES"
      ]
    },
    {
      id: 15,
      spec: "Psihoterapie Familială și Consiliere Parentală",
      des: [{ name: "Psih. Andrea Iştoc", Tel: "0737131210" }],
      img: "/assets/icons/fam.png",
      text: [
        "Psihoterapia este o modalitate de tratament cuprinzător, deliberat și planificat, centrată pe reducerea sau eliminarea unor simptome, tulburări mintale sau stări de suferință și/sau psihosomatice și comportamente disfuncționale, cu scopul de a ajuta persoanele privitor la problemele sale de viață.",
        "Psihoterapia este un domeniu aflat la granița dintre medicină și psihologie, în care se utilizează o gamă largă de tehnici cu un cadru clinic și teoretic.",
        "Psihoterapia se adresează adulților, copiilor, adolescenților și de asemenea vârstnicilor.",
        "Consilierea parentală este un serviciu adresat părinților sau adulților care au în grija lor copii și care doresc să depășească diverse stări sau situații cu care se confruntă în relația copilul. Intervenția se referă la orice aspect legat de educația copiilor și de dinamica părinte - copil: schimbări apărute în comportamentul copilului (tantrumuri, violență, regresii, anxietate), adaptarea la un nou mediu sau o nouă situație (grădiniță, școală, casă nouă, divorț, apariția unui frate, doliu etc), gestionarea emoțiilor, gestionare fricilor, bullyng etc.",
        "Servicii oferite:",
        "• Psihoterapie Familială (sau Sistemică) - se adresează oamenilor în relație, include terapia Familială și consiliera maritală, respectiv intervenții de grup.",
        "• Psihoterapie de cuplu - se adresează cuplurilor aflate în impas.",
        "• Psihoterapie individuală - obiectivul intervenției este persoana care se află în impas sau într-o situație de criză.",
        "• Consiliere parentală pentru părinți și adulți cu scopul de a-i ghida să gestioneze situație dificile din relația părinte - copil, dinamica dintre ei sau orice dificultate legată de etapa de dezvoltare a copilului.",
      ]
    },
    {
      id: 16,
      spec: "Logopedie",
      des: [{ name: "Psih. Flavia Daiana Grek", Tel: "0748330089" }],
      img: "/assets/icons/logo.png"
    },
    {
      id: 17,
      spec: "Kinetotetrapie si Recuperare Medicala",
      des: [
      { name: "Dr. Alexandra Tiron", Tel: "0256220614" }
      ],
      img: "/assets/icons/kineto.jpg",
    },
    // {
    //   id: 18,
    //   spec: "Tratamente estetice faciale si corporale",
    //   des: [{ name: "Cosmetico-Terapeut Natalia Crisan", Tel: "0724416302" }],
    //   img: "/assets/icons/body.png",
    //   text: [
    //     "Pentru a putea atinge un echilibru fizic, chimic și emoțional este nevoie de multa grijă și respect față de corpul nostru.",
    //     "Cu ajutorul aparatelor medicale din noua tehnologie reusim sa oferim tratamente profesionale cu rezultate vizibile de la prima sedinta.",
    //     "Va punem la dispozitie tratamente si proceduri care ajuta corpul la refacere, reintinerire naturala si relaxare.        ",
    //     "• Exfolierea si curatarea tenului in profunzime (microdermabraziune)",
    //     "• Tratament de vitaminizare a tenului cu oxigen hiperbaric",
    //     "• Indepartarea petelor de pigment cu ajutorul oxigenului",
    //     "• Reducerea cuperozei cu oxigen",
    //     "• Hidratarea tenului cu oxigen",
    //     "• Diminuarea ridurilor cu oxigen",
    //     "• Indepartarea cearcanelor cu oxigen",
    //     "• Reglarea excesului de sebum cu oxigen",
    //     "• Drenaj limfatic manual",
    //     "• Masaj vibrational profesional pentru celulita",
    //     "• Masaj de relaxare", 
    //     "• Masaj reflexogen",
    //     "Sanatatea este in mainile tale.",
    //     "Nu uita de tine, nu uita de corpul tau."
    //   ]
    // }
  ];
  constructor() { }
  getAllServices() {
    return this.services;
  }
  findElemById(id) {
    for (const iterator of this.services) {
      if (iterator.id == id) {
        return iterator;
      }
    }
    return "NONE";
  }
  findNameById(id) {
    for (const iterator of this.services) {
      if (iterator.id == id) {
        return iterator.spec;
      }
    }
    return "NONE";
  }
  findImgById(id) {
    for (const iterator of this.services) {
      if (iterator.id == id) {
        return iterator.imgPrev;
      }
    }
    return "NONE";
  }
  findTextById(id) {
    for (const iterator of this.services) {
      if (iterator.id == id) {
        return iterator.text;
      }
    }
    return "NONE";
  }
}
