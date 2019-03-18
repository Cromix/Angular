import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciService {
  services = [
    { id: 1, spec: "Stomatologie preventivă", des: [{ name: "Dr. Bran-Walter", Tel: "0728386786" }], img: "/assets/icons/stoma-prevent.png" },
    { id: 2, spec: "Medicină dentară adulți", des: [{ name: "Dr. Bran-Walter", Tel: "0728386786" }, { name: "Dr. Craciun", Tel: "0728386786" }, { name: "Dr. Anghel-Lorinti", Tel: "0728386786" }], img: "/assets/icons/dental-adulti.png" },
    { id: 3, spec: "Medicină dentară copii", des: [{ name: "Dr. Bran-Walter", Tel: "0728386786" }], img: "/assets/icons/dental-copii.png" },
    { id: 4, spec: "Ortodontie si ortopedie dento-faciala", des: [{ name: "Dr. Bran-Walter", Tel: "0728386786" }], img: "/assets/icons/stoma.png" },
    { id: 16, spec: "Implantologie", des: [{ name: "Dr. Bran-Walter", Tel: "0728386786" }], img: "/assets/icons/stoma.png" },
    { id: 5, spec: "Chirurgie maxilo-faciala", des: [], img: "/assets/icons/stoma-chirurgie.png" },
    { id: 6, spec: "Medicină de familie", des: [{ name: "Dr. David Daniela", Tel: "0256220614" },{ name: "Dr. Dragos Stoicu", Tel: "0725560276" }], img: "/assets/icons/med-familie.png" },
    { id: 7, spec: "Medicină Internă", des: [], img: "/assets/icons/interne.png" },
    { id: 8, spec: "Medicina muncii", des: [{ name: "Dr. Valentin Duda", Tel: "0771509087" }], img: "/assets/icons/med-munci.png" },
    { id: 10, spec: "Ortopedie si Traumatologie", des: [], img: "/assets/icons/traumo.png" },
    { id: 11, spec: "Alergologie", des: [{ name: "Dr. Ramona Muresan", Tel: "0723790400" }], img: "/assets/icons/alergo.png" },
    { id: 12, spec: "Analize genetice", des: [], img: "/assets/icons/genetic.png" },
    { id: 13, spec: "Analize oncogenetice", des: [], img: "/assets/icons/onco.png" },
    { id: 14, spec: "Psihologie Pediatrica", des: [], img: "/assets/icons/psiho.png" },
    { id: 15, spec: "Psihoterapie", des: [{ name: "Psih. Camelia Bordea", Tel: "0733542254" }], img: "/assets/icons/psiho.png" },
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
}
