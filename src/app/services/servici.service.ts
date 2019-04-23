import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciService {
  services = [
    {
      id: 1,
      spec: "Stomatologie preventivă",
      des: [
        { name: "Dr. Bran-Walter", Tel: "0728386786" }
      ],
      img: "/assets/icons/stoma-prevent.png",
      imgPrev: "assets/imgs/sina-protruzie.jpg",
      text: ["Un dinte sanatos sta intr-o gingie sanatoasa!",
        "Plecand de la aceasta premiza, consideram ca afectiunile parodontale pot fi depistate la timp si prevenite prin periaj, detartraj manual sau cu ultrasunete.",
        "Totodata cu ajutorul jetului pe baza de bicarbonat pot fi indepartate placa bacteriana, petele dentare aparute din cauza alimentatiei dar si diverse afectiuni gingivale.",
        "Sigilarea dintilor  la copii este modul in care putem prevenii aparitia cariei dentare, dar la fel de important este si o fluorizare corecta.",
        "TERAPIA SFORAITULUI CU AJUTORUL   SINELOR DE PROTRUZIE", "DE CE SFORAIM?", "PNEEA IN SOMN apare deobicei atunci cand musculatura valului palatin si a limbii sufera modificari.  SFORAITUL  datorita sunetelor poate deranja partenerul de viata , dar nu numai, el apare datorita modificarilo cailor respiratorii superioare si poate duce la diverse imbolnaviri ale organismului .  Initial inofensiva, apneea in somn poate ajunge de la putine secunde pana la minute , timp in care caile respiratorii sunt inchise datorita limbii si a musculatirii care a suferit modificari . Din acest moment poate sa devina o reala problema de sanatate,  deloc de neglijat ; creierul  trage semnalul de alarma si trezeste organismul  pentru a respira.  Cu cat sunt mai dese aceste semnale sau de durata mai lunga poate duce la stari de oboseala,  lipsa de concentrare ( chiar si de adormire pentru secunde) si creierul incepe sa uite . Exista si riscul cresterii tensiunii arteriale care poate duce la un risc crescut de atac cerebral si chiar  la infarct. Statistica spune ca persoanele cu apnee in somn traiesc in medie cu pana la 7 ani mai putin. DIAGNOTIC Se efectueaza  de catre colegii specialisti din cadrul  laboratorului de somn,  unde cu ajutorul unor aparate se poate masura gradul imbolnavirii. Caile respiratorii superioare sunt verificate si de catre medicii specialisti  O.R.L. pentru a nu fi obstruate (polipi nazali sau alte afectiuni). TERAPIA Situatiile de apnee usoara se pot rezolva cu ajutorul sinelor de protruzie in asa fel incat sforaitul sa nu mai fie o problema, respiratia devine usoara, aceasta  datorita  ortezelor  care pe departe sunt cu mult mai usor de suportat de catre dumneavoastra,  decat alte variante existente pana in prezent. In cazul in care apneea in somn are forma mai severa, medicii specializati in problem de somn si cei  de la O.R.L. va vor recomanda alte metode de terapie ( oxigenoterapie sau chiar operatie). "]
    },
    {
      id: 2,
      spec: "Medicină dentară adulți",
      des: [
        { name: "Dr. Bran-Walter", Tel: "0728386786" },
        { name: "Dr. Craciun", Tel: "0728386786" },
        { name: "Dr. Anghel-Lorinti", Tel: "0728386786" }
      ],
      img: "/assets/icons/dental-adulti.png",
      text: ["Stomatologia zilelor noastre trebuie  sa fie reprezentata prin calitate si tehnici minimal invazive."
        , "Acordam doesebita atentie ca in cadrul cabinetului nostru, durerea sa fie aproape inexistenta."
        , "Stiind ca in acste conditii,  rezultatul final pe care il obtinem, adica vindecarea, sunt mai bune si rapide."
        , "Gama larga de servicii terapeutice atat  pentru copii cat si  pentru adulti, de la obturatii pana la proteze fixe si mobile, sunt de calitate si la standarde de ultima ora."
        , "Armonia si estetica se imbina in cadrul unui act medical, care  sta la baza obiectivelor noastre."]
    },
    {
      id: 3,
      spec: "Medicină dentară copii",
      des: [
        { name: "Dr. Bran-Walter", Tel: "0728386786" },
        { name: "Dr. Anghel-Lorinti", Tel: "0728386786" }
      ],
      img: "/assets/icons/dental-copii.png",
      text: ["Pentru ca atunci cand copii nostrii sunt fericiti, ne transporta si pe noi in starea lor de spirit, ne-am gandit sa inlocuim  banalele plombe triste albe sau de multe ori inca gri, cu culori vesele.",
        "Asocierea cu pietre pretioase, mai ales de catre fetite, este datorata sclipiciului inglobat in obturatii."]
    },
    { id: 4, spec: "Ortodontie si ortopedie dento-faciala", des: [{ name: "Dr. Bran-Walter", Tel: "0728386786" }], img: "/assets/icons/stoma.png" },
    {
      id: 16,
      spec: "Implantologie",
      des: [
        { name: "Dr. Beatrice Doandes", Tel: "0728386786" }
      ],
      img: "/assets/icons/implant.png",
      imgPrev: "assets/imgs/dent-implant.jpg",
      text: [
        "Implantul  dentar este un dispozitiv care se introduce in osul maxilar sau mandibular in scopul de a inchide  spatii care au rezultat in urma pierderii unor dinti.  Peste implanturile dentare se confectioneaza  lucrarea protetica dorita.",
        "Supraprotezarea cu miniimplanturi a fost gandita de a venii in ajutorul tuturor purtatorilor de proteze mobile.",
        "Metoda confera stabilitate imediata protezei.",
        "Dupa inserarea miniimplantelor in os si adaptarea protezei deja existente, in aceeasi sedinta, se observa de catre pacient o imbunatatire a stabilitatii si functionalitatii protezei."
      ]
    },
    { id: 5, spec: "Chirurgie maxilo-faciala", des: [{ name: "Dr. Beatrice Doandes", Tel: "0728386786" }], img: "/assets/icons/stoma-chirurgie.png" },
    {
      id: 6,
      spec: "Medicină de familie",
      des: [
        { name: "Dr. David Daniela", Tel: "0256220614" },
        { name: "Dr. Dragos Stoicu", Tel: "0725560276" }],
      img: "/assets/icons/med-familie.png",
      text: [
        "Rolul medicului de familie este cel de strateg al starii de sanatate a omului sanatos sau bolnav, asigurand asistenta medicala primara si continua, prin actiuni preventive,educationale, terapeutice si de recuperare contribuind astfel la promovarea starii de sanatate a individului, a familiei si colectivitatii.",
        "In cadrul medicinei de familie, pacientul are dreptul la gratuitatea actelor medicale care fac parte din 'pachetul asigurat' cum ar fi : consultatii la cabinet, primirea retetelor compensate sau gratuite, a biletelor de trimitere sau de internare ( dupa caz), vaccinarile obligatorii.",
        "Scopul medicului de familie este acela de a preveni, vindeca sau ameliora suferinta pacientului."
      ]
    },

    {
      id: 8,
      spec: "Medicina muncii",
      des: [{ name: "Dr. Valentin Duda", Tel: "0771509087" }],
      img: "/assets/icons/med-munci.png",
      text: ["Medicina muncii este specialitatea medicala care studiaza relatia om-munca, adaptarea omului la munca si adaptarea muncii la persoana care o efectueaza.",
        "În conformitate cu legislația în vigoare (HG 355/2007; HG 1169/2011) asigurăm:",
        "• controlul medical la angajarea in munca;",
        "• controlul medical de adaptare;",
        "• controlul medical periodic;",
        "• controlul medical la reluarea muncii.",
        "• Întocmire dosare gravide",
        "La cerere:",
        "Aviz medical  Siguranta Circulatiei",
        "Fisa port arma",
        "Fisa medicala pentru obtinerea/preschimbarea permisului auto"
      ]
    },
    {
      id: 10,
      spec: "Ortopedie si Traumatologie",
      des: [{ name: "Dr. Darius Mihart", Tel: "0256220614" }],
      img: "/assets/icons/traumo.png",
      text: ["Ortopedia și traumatologia este specialitatea chirurgicală care se ocupă cu depistarea, diagnosticarea, tratarea și recuperarea afecțiunilor congenitale și dobândite, traumatice și netraumatice, ale aparatului locomotor."]
    },
    {
      id: 11, spec: "Alergologie", des: [{ name: "Dr. Ramona Muresan", Tel: "0723790400" }], img: "/assets/icons/alergo.png",
      text: ['Alergologia se ocupa cu diagnosticul si tratarea alergiilor de orice fel (respiratorii, alimentare, medicamentoase), astmului bronsic , eruptiilor cutanate alergice, etc. atat la copii cat si la adult.'
      ]
    },
    { id: 12, spec: "Analize genetice si Analize oncogenetice", des: [{ name: "http://ams.ro/", Tel: "0213247050" }], img: "/assets/icons/genetic.png" },
    { id: 14, spec: "Psihologie Pediatrica si Psihoterapie", des: [{ name: "Psih. Camelia Bordea", Tel: "0733542254" }], img: "/assets/icons/psiho.png" },
    { id: 16, spec: "Logopedie", des: [{ name: "Psih. Camelia Bordea", Tel: "0733542254" }], img: "/assets/icons/logo.png" }
  ]
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
