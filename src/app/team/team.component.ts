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
    // {
    //   id: 6, name: "Dr. Dragoș Stoicu", des: "Medic primar medicina de familie", img: "/assets/team/dragos_stoicu.jpg"
    // },
    // {
    //   id: 7, name: "Dr. Ioana Marin", des: "Medic specialist medicina muncii", img: "/assets/team/ioana_marin.jpg"
    // },
    {
      id: 8, name: "Dr. Valentin Duda", des: "Medic medicina muncii", img: "/assets/team/valentin_dura.jpg"
    },
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
      id: 13, name: "Loredana Danko", des: "Asistent Medical", img: "/assets/team/loredana_donko.jpg"
    },
    {
      id: 14, name: "Ramona Circota", des: "Registrator Medical", img: "/assets/team/ramona_circota.jpeg"
    },
    {
      id: 16, name: "Ramona Cojocaru", des: "Analize Oncogenetice", img: "/assets/team/logo-ams.png"
    },
    {
      id: 15, name: "AMS 2000 IMPEX TRADING", des: "Analize Oncogenetice", img: "/assets/team/logo-ams.png"
    },
  ]

  ngOnInit() {
  }

}
