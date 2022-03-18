import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  team = [
    {
      id: 1, name: "Dr. Simona Bran-Walter", des: "Medic specialist stomatologie generala, competenta in stomatologie preventiva", img: "/assets/team/simona_walter.jpg"
    },
    {
      id: 11, name: "Dr. Beatrice Doandes", des: "Medic specialist implantologie si chirurgie maxilo-faciala", img: "/assets/team/beatrice_doandes.jpeg"
    },
    {
      id: 16, name: "Dr. Ecaterina Comarenco", des: "Medic dentist, <br>Specialist Stomatologie Generala", img: "/assets/team/Ecaterina_comarenco.jpeg"
    },
    {
      id: 23, name: "Dr. Oana Zirbo", des: "Medic Specialist Ortodontie si Ortopedie Dento-Faciala", img: "/assets/team/oana_zirbo.jpg"
    },
    {
      id: 21, name: "Dr. Iana Sorana", des: "Medic Stomatolog, <br>Rezident Stomatologie Generala", img: "/assets/team/sorana_iana.jpg"
    },
    {
      id: 22, name: "Dr. Anusca Diana", des: "Medic Dentist, <br>Rezident Parodontolog", img: "/assets/team/diana_anusca.jpg"
    },
    // {
    //   id: 2, name: "Dr. Marcel Mojse", des: "Medic primar  ortodontie si ortopedie dento-faciala", img: "/assets/team/Moise-Marcel.jpg"
    // },
    // {
    //   id: 3, name: "Dr. Anca Anghel - Lorinți", des: "Medic dentist", img: "/assets/team/anca_anghel.jpg"
    // },
    // {
    //   id: 4, name: "Dr. Marius Crăciun", des: "Medic dentist", img: "/assets/team/marius_craciun.jpg"
    // },
    {
      id: 5, name: "Dr. Danela David", des: "Medic primar medicina de familie", img: "/assets/team/danela_david.jpg"
    },
    {
      id: 6, name: "Dr. Dragoș Stoicu", des: "Medic primar medicina de familie", img: "/assets/team/dragos_stoicu.jpg"
    },
    // {
    //   id: 7, name: "Dr. Ioana Marin", des: "Medic specialist medicina muncii", img: "/assets/team/ioana_marin.jpg"
    // },
    // {
    //   id: 8, name: "Dr. Valentin Duda", des: "Medic medicina muncii", img: "/assets/team/valentin_dura.jpg"
    // },
    {
      id: 9, name: "Dr. Darius Mihart", des: "Medic specialist ortopedie-traumatologie", img: "/assets/team/darius_mihart.jpg"
    },
    {
      id: 10, name: "Dr. Ramona Mureșan", des: "Medic specialist alergolog", img: "/assets/team/ramona_muresan.jpg"
    },
    
    {
      id: 12, name: "Psih. Flavia Daiana Grek", des: "Psiholog", img: "/assets/team/flavia_grek.jpeg"
    },
    {
      id: 24, name: "Psih. Andrea Iştoc", des: "Psiholog", img: "/assets/team/no_image.JPG"
    },
    {
      id: 13, name: "Ramona Cojocaru", des: "Kinetoterapeut", img: "/assets/team/ramona_cojocaru.jpg"
    },
    // {
    //   id: 20, name: " Natalia Crisan", des: "Cosmetico-Terapeut", img: "/assets/team/natalia_crisan.png"
    // },
    {
      id: 14, name: "Loredana Danko", des: "Asistent Medical", img: "/assets/team/loredana_donko.jpg"
    },
    // {
    //   id: 18, name: "Marinela Şipeţan", des: "Registrator Medical", img: "/assets/team/marinela_sipetan.jpg"
    // },
    {
      id: 19, name: "Irina Amurăriţi", des: "Registrator Medical", img: "/assets/team/IRINA_AMURARITI.jpg"
    },
    {
      id: 16, name: "AMS LABORATOR GENETIC", des: "Analize Genetice", img: "/assets/team/logo-ams.png"
    },
    {
      id: 17, name: "AMS 2000 IMPEX TRADING", des: "Analize Oncogenetice", img: "/assets/team/logo-ams.png"
    },
  ]

  ngOnInit() {
  }

}
