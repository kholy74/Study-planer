const getViewportWidth = () =>
  window.innerWidth || document.documentElement.clientWidth;

let ausgabe = `Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel`;

console.log(ausgabe);

function kurs(modulid, name, typ, Studiengang, semester, lehrperson, termin) {
  this.modulid = modulid;
  this.name = name;
  this.typ = typ;
  this.Studiengang = Studiengang;
  this.semester = semester;
  this.lehrperson = lehrperson;
  this.termin = termin;

  this.istValiderTyp = function (id) {
    return  ;
  };
}

function Studiengang(id, name, kurse) {
  this.id = id;
  this.name = name;
  this.kurse = kurse;

  this.getKursById = function () {
    return kurs;
  };
}

function lehrperson(id, nachname) {
  this.id = id;
  this.nachname = nachname;
}

function Termin(beginn, dauer, wochentag, raum) {
  this.beginn = beginn;
  this.dauer = dauer;
  this.wochentag = wochentag;
  this.raum = raum;
}
function Semesterplan(id, name, semester, Studiengang, kurse) {
  this.id = id;
  this.name = name;
  this.semester = semester;
  this.Studiengang = Studiengang;
  this.kurse = kurse;

  this.addKurs = function (kurse) {
    return kurse;
  };
  this.getAnzahlKurse = function () {
    return;
  };
  this.getAnzahlStunden = function () {
    return;
  };
}
