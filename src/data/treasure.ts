export const treasures: Treasure[] = [
  {
    id: 1, // start, stavi drugi hint
    title: "Početak potrage",
    description: "",
    url: "https://rijeka.hr",
    hint: `
    Građen u srednjem vijeku, gradski toranj, izvorno je predstavljao tipičnu prohodnu kulu kroz koju se ulazilo u utvrđeni grad.  Na donjem dijelu pročelja tornja danas je uočljivo nekoliko njegovih baroknih faza, koje odlikuje bogata arhitektonska plastika portala, u kamenu isklesanoga carskoga grba i reljefa austrijskih careva Leopolda i Karla VI, dok nadgrađe tornja, još od 17. stoljeća, krasi gradska ura.   

Odmah ispod, ističe se dvoglavi orao koji kandžama pridržava urnu iz koje teče nepresušni mlaz vode – Riječki grb dodijeljen gradu još davne 1659. godine. Danas, toranj stoji kao jedan od najpoznatijih simbola grada i njegove slavne prošlosti.  
    `,
    next: [2, 7, 9],
    location: { lat: 45.3266667, lng: 14.4430556 }, // Rijeka center
    category: "START",
    badge: "START"
  },
  // Branch 1
  {
    id: 2,
    title: "Savjet mladih Grada Rijeke",
    description: "Savjet mladih Grada Rijeke savjetodavno je tijelo sastavljeno od 11 mladih članova biranih na mandat od tri godine. Članovi i njihovi zamjenici mlade su osobe s prebivalištem ili boravištem u Rijeci u dobi od 15 do 30 godina. Savjet raspravlja o važnim pitanjima za mlade, predlaže mjere i programe za unapređenje njihovog položaja te sudjeluje u radu Gradskog vijeća. Nadalje, svojim djelovanjem, nastoji informirati mlade te surađuje s drugim savjetima mladih i organizacijama. Savjet mladih dakle ima ključnu ulogu u zagovaranju prava i interesa mladih na lokalnoj razini, osiguravajući njihovu aktivnu uključenost u donošenju odluka.​ ",
    url: "https://www.rijeka.hr/poziv-mladima-ukljucite-se-u-evaluaciju-programa-za-mlade-grada-rijeke",
    hint: `
    Zgrada u kojoj danas djeluje riječka uprava nekadašnje je zdanje Gradske štedionice. 

    Natječaj za njezino projektiranje raspisan je 1912., a izgradnja je okončana na samom početku Prvog svjetskog rata, 1914. Palača je podignuta kao stambeno-poslovno zdanje. Arhitektonsko rješenje unutrašnjosti rad je braće Messinger i Ernesta Fratriscevitsa iz Budimpešte, dok njezino pročelje potpisuje Bruno Slokovich. Kao riječki inženjer, Slokovich je bio bliži očekivanjima naručitelja da građevina upućuje na povijesne talijanske graditeljske stilove.  

    Kao aktualno sjedište Gradskog poglavarstva, građevina je jedan od vizualnih i političkih akcenata riječkog središta. 
    `,
    next: [3],
    location: { lat: 45.3392775, lng: 14.4285268 },
    category: "PODRSKA",
    badge: "SAVJET"
  },
  {
    id: 3,
    title: "Besplatan gradski prijevoz za srednjoškolce ",
    description: "Grad Rijeka osigurava sredstva za troškove javnog gradskog prijevoza učenika srednjih škola koji imaju prebivalište ili boravište na području grada Rijeke.  ",
    url: "https://www.rijeka.hr/teme-za-gradane/obitelj-i-drustvena-skrb/mladi/besplatan-javni-gradski-prijevoz-za-srednjoskolce/ ",
    hint: `
  Spomenik oslobođenja na Delti u Rijeci podignut je 1955. godine na desetu obljetnicu oslobođenja grada, kao simbol slobode i memorijal palim borcima.  

Ovo djelo kipara Vinka Matkovića i Raoula Goldonija stoji na granici između Rijeke i Sušaka, simbolički ujedinjujući dva tadašnja samostalna grada. 
    `,
    next: [4],
    location: { lat: 45.324580, lng: 14.447862 },
    category: "PODRSKA",
    badge: "BESPLATNI"
  },
  {
    id: 4,
    title: "Sufinanciranje javnog prijevoza za studente ",
    description: "Grad Rijeka osigurava sredstva za sufinanciranje dijela cijene javnog prijevoza redovitih studenata Sveučilišta u Rijeci.",
    url: "https://www.rijeka.hr/teme-za-gradane/obitelj-i-drustvena-skrb/mladi/sufinanciranje-javnog-gradskog-prijevoza-za-studente/ ",
    hint: `
    Autotrolej je javni prijevoznik u Rijeci s tradicijom dugom više od 120 godina, čiji se početak smatra  7. studenoga 1899. kada je u Rijeci uveden tramvaj, a time i organiziran javni prijevoz. 

    Tijekom svoje povijesti, Autotrolej je upravljao različitim vrstama prijevoznih sredstava, uključujući, električne tramvaje, trolejbuse i autobuse. Godine 1951. uveden je trolejbus kao suvremenije prijevozno sredstvo, koje pak 1969. godine zamjenjuju autobusi.  

    Danas Autotrolej upravlja velikom mrežom gradskog i prigradskog prijevoza sa suvremenim vozilima i tehnologijama. 
    `,
    next: [5],
    location: { lat: 45.325490, lng: 14.444543 },
    category: "PODRSKA",
    badge: "SUFINANCIRANI"
  },
  {
    id: 5,
    title: "Mjere za stambeno zbrinjavanje mladih",
    description: "Lista stanova za mlade je projekt dodjele gradskih stanova na dugogodišnji najam po ekonomski prihvatljivim cijenama, namijenjenih mladim osobama s prebivalištem ili boravištem na području Rijeke, pri čemu prednost imaju studenti. ",
    url: "https://torpedo.media/novosti-rijeka/grad-rijeka-planira-kroz-provedbu-novog-programa-za-mlade-osigurati-lakse-zaposljavanje-i-stambeno-zbrinjavanje-mladih",
    hint: `
    Hotel Continental u Rijeci otvoren je 17. svibnja 1888. godine i smatra se najstarijim riječkim hotelom koji i danas posluje. Izgradnja traje od 1885. do 1888. godine prema projektu sušačkog arhitekta Mate Glavana, a naručitelj projekta bio je Hinko Bačić, tadašnji načelnik općine Sušak i važna ličnost u društvenom i infrastrukturnom razvoju grada.

    Kavana u hotelu brzo je postala centar društvenog života grada što „Kont“ ostaje i danas.  

  Hotel Continental u Rijeci otvoren je 17. svibnja 1888. godine i smatra se najstarijim riječkim hotelom koji i danas posluje. Izgradnja traje od 1885. do 1888. godine prema projektu sušačkog arhitekta Mate Glavana, a naručitelj projekta bio je Hinko Bačić, tadašnji načelnik općine Sušak i važna ličnost u društvenom i infrastrukturnom razvoju grada. Kavana u hotelu brzo je postala centar društvenog života grada što „Kont“ ostaje i danas.
  `,
    next: [6],
    location: { lat: 45.3267989, lng: 14.4488599 },
    category: "PODRSKA",
    badge: "STANBENI"
  },
  {
    id: 6,
    title: "Programi socijalne i zdravstvene zaštite mladih",
    description: "Grad Rijeka mladima nudi sveobuhvatnu podršku kroz niz programa socijalne i zdravstvene zaštite, s ciljem unaprjeđenja kvalitete života mladih.​ Socijalne usluge uključuju programe poput besplatnog online psihološkog savjetovalište „Sve je ok!“, individualnog i grupnog savjetovanje studenata kroz Sveučilišni savjetovališni centar, ali i rad na prevenciji ovisnosti, nezdravih navika i rizičnih ponašanja.​ ",
    url: "https://www.rijeka.hr/teme-za-gradane/obitelj-i-drustvena-skrb/mladi/zdravstvena-socijalna-zastita-mladih/ ",
    hint: `
Dvorana mladosti naziv ime je višenamjenske sportske dvorane predviđene za održavanje sportskih, kulturnih i zabavnih manifestacija. Ova modernistička dvorana izgrađena je 1973. godine na Trsatu kao reinterpretacija već postojeće karlovačke dvorane.  

Površina dvorane je 5.458 m2, a površina vanjskog prostora je 10.486 m2. Glavna dvorana (površine 1.260 m2) je glavi i najveći prostor Dvorane Mladosti s gledalištem koje raspolaže s 2960 sjedećih mjesta. 
    `,
    next: [],
    location: { lat: 45.3308488, lng: 14.460118 },
    category: "PODRSKA",
    badge: "ZASTITA"
  },
  // END OF BRANCH 1
  {
    id: 7,
    title: "Edukativne i mentorske aktivnosti",
    description: "Grad Rijeka nudi raznolike projekte i radionice koje Dom mladih provodi u bliskoj suradnji sa školama i vrtićima. Aktivnosti se organiziraju prema dogovoru s učiteljima i odgojiteljima, omogućujući svakoj skupini sudjelovanje u programima koji odgovaraju njihovim interesima i potrebama i željama.",
    url: "https://dom-mladih.hr/aktivnosti/?utm_source=chatgpt.com ",
    hint: `
    Dom mladih Rijeka gradska je ustanova čija je osnovna djelatnost organizacija slobodnog vremena djece i mladih. Djeluje već preko pet desetljeća i stekao je status poznate i specifične ustanove koja daje poseban pečat gradu Rijeci i njezinu školstvu.
    
    Odlikuje se raznolikim programima, kvalitetnim radom s učenicima osnovnih i srednjih škola kao i postignutim rezultatima. 
    `,
    next: [8],
    location: { lat: 45.3316341, lng: 14.439544 },
    category: "KARIJERA",
    badge: "EDUKATIVNI"
  },
  // Branch 3
  {
    id: 8,
    title: "Karijerni servis za zapošljavanje mladih",
    description: "Karijerni servis za zapošljavanje mladih predstavlja besplatnu uslugu namijenjenu mladima s područja Grada Rijeke, a usmjerenu na razvoj njihovih karijernih vještina i lakši ulazak na tržište rada. U okviru servisa mladima je dostupna individualna podrška u traženju posla, izradi životopisa i pripremi za razgovor za posao.",
    url: "https://www.rijekadanas.com/rintervju-program-za-mlade-grada-rijeke-lucija-kevo/?utm_source=chatgpt.com",
    hint: `
    U srednjem vijeku, na prostoru današnjeg Školjića, nalazilo se ušće Riječine koja se ulijevala u more.  

    Tijekom obilnih kiša rijeka bi nabujala i nosila sa sobom velike količine pijeska i kamenja. Sav taj sediment počeo se taložiti na ušću rijeke te je formirao otočić, odnosno po lokalnom izrazu školjić.
    `,
    next: [],
    location: { lat: 45.3282718, lng: 14.447108 },
    category: "KARIJERA",
    badge: "KARJERNI"
  },
  {
    id: 9,
    title: "Portal za mlade",
    description: `Portal za mlade uspostavlja otvoren dijalog s mladima grada Rijeke s ciljem povećanja njihove informiranosti i poticanja aktivnog sudjelovanja u kulturnim, društvenim i edukativnim događanjima. Osim informiranja, portal potiče i stvaranje vlastitih sadržaja, čime se mladima daje mogućnost izražavanja svojih ideje i interesa. 

U sklopu ovih aktivnosti razvijen je poseban medijski kanal namijenjen mladima, koji služi ne samo za distribuciju informacija, nego i za istraživanje njihovih potreba i stavova. Na taj način stvara se prostor za dvosmjernu komunikaciju između mladih i grada. 

 `,
    url: "https://www.rijekadanas.com/rintervju-program-za-mlade-grada-rijeke-lucija-kevo/?utm_source=chatgpt.com",
    hint: `
Palača Jadran sagrađena je kao sjedište prvog ugarskog pomorskog poduzeća „Adria”, osnovanog 1882. godine, koje je u Rijeci započelo redovnu plovidbu trgovačke mornarice. Uključena u rizične odnose svjetske trgovine, Adria je povjeravala kormilo svojih brodova pomorcima koji su vodili Adrijine brodove u svjetske luke Španjolske, zapadne Afrike, Tunisa, Alžira, Gibraltara i Messine, a kasnije čak i Brazila. 

Budući da je Palača Jadran trebala trajno simbolizirati brodarstvo, njezin je graditelj, arhitekt Giacomo Zammatio naručio četiri visoka barokizirana kipa koji personificiraju glavna zanimanja moreplovaca - kapetana broda, zapovjednika stroja, kormilara i peljara te su ujedno i portreti četiri vodeća čovjeka Adrije.  

Sa svake strane ulaznog portala u palaču postavljena je jedna figura Atlanta, moćnih nosača tereta koji simbolički nose teret odgovornosti i težinu pomorskih poduhvata. 
    `,
    next: [10],
    location: { lat: 45.327697, lng: 14.4389874 },
    category: "KULTURA",
    badge: "PORTAL"
  },
  {
    id: 10,
    title: "Programi i radionice Doma mladih Rijeka",
    description: "Dom mladih organizira i provodi 11 kreativnih te 9 STEM (inženjerstvo, matematika itd. ) radionica. Sve su radionice posebne i originalne, a za cilj imaju kroz zabavu polaznicima omogućiti istraživanje svojih interesa, razvijanje svojih potencijala, te poticanje  na stvaralaštvo i kreativnost.",
    url: "https://dom-mladih.hr/aktivnosti/?utm_source=chatgpt.com ",
    hint: `
    Dom mladih Rijeka gradska je ustanova čija je osnovna djelatnost organizacija slobodnog vremena djece i mladih. Djeluje već preko pet desetljeća i stekao je status poznate i specifične ustanove koja daje poseban pečat gradu Rijeci i njezinu školstvu.
    
    Odlikuje se raznolikim programima, kvalitetnim radom s učenicima osnovnih i srednjih škola kao i postignutim rezultatima. 
    `,
    next: [11],
    location: { lat: 45.332415, lng: 14.445507 },
    category: "KULTURA",
    badge: "DOMMLADIH"
  },
  {
    id: 11,
    title: "Odjel za mlade — Gradska knjižnica Rijeka",
    description: "Odjel za mlade Gradske knjižnice Rijeka, poznat i pod nazivom „rasadnik“ objedinjuje obrazovanje i zabavu inovativnim Edutainment modelom.  Posvećen je čitateljskoj kulturi, neformalnom obrazovanju, slobodnom vremenu i kreativnosti mladih.  ",
    url: "https://gkr.hr/programi-and-sadrzaji/odjel-za-mlade--p-23?utm_source=chatgpt.com",
    hint: `
    Kompleks često poznat pod nazivom Rikard Benčić je izvorno izgrađen u 18. stoljeću kao rafinerija šećera, a sredinom 19. stoljeća pretvoren je u tvornicu duhana. Nakon Drugog svjetskog rata prenamijenjen je u Tvornicu motora Rikard Benčić koja je zatvorena 1995. godine. 
    
    Danas je stari industrijski kompleks revitaliziran i prenamijenjen u kulturni centar, gdje su svoja vrata otvorili Gradska knjižnica i Dječja kuća.
    `,
    next: [12],
    location: { lat: 45.3316698, lng: 14.4319972 },
    category: "KULTURA",
    badge: "KNJIZNICA"
  },
  {
    id: 12,
    title: "Javni pozivi za kulturne programe mladih",
    description: "Javni natječaji i poticaji za projekte kulture namijenjene mladima (npr. Programi za mlade u kulturi).",
    url: "https://www.mojarijeka.hr/mladi-prijavite-svoje-programe-u-kulturi-na-natjecaj-grada-rijeke/?utm_source=chatgpt.com",
    hint: `
    Guvernerova palača je dvokatnica izgrađena kao rezidencija guvernera Rijeke. 

    Palača služi kao  administrativno i rezidencijalno središte te svjedoči važnim političkim i povijesnim događanjima grada. Izgradnja traje između 1893. i 1896. godine, a vrši se prema projektu poznatog mađarskog arhitekta Alajosa Hauszmanna.  

    Danas, Guvernerova palača je zaštićeni kulturni spomenik i sjedište Pomorskog i povijesnog muzeja Hrvatskog primorja.  `,
    next: [13],
    location: { lat: 45.329275, lng: 14.442348 },
    category: "KULTURA",
    badge: "KULTURNI"
  },
  {
    id: 13,
    title: "Kulturni i festivalni programi za mlade",
    description: "U Rijeci se održava niz obrazovnih, sportskih i kulturnih manifestacija namijenjenih djeci predškolskog i školskog uzrasta, odnosno imaju popratni dječji program, kao i manifestacije u koje se mogu uključiti mladi. Neke od poznatijih takvih događanja su „Student Day Festival“ i „Festival znanosti“.",
    url: "https://www.rijeka.hr/teme-za-gradane/obitelj-i-drustvena-skrb/grad-rijeka-prijatelj-djece/slobodno-vrijeme-djece/manifestacije-za-djecu-i-mlade/ ",
    hint: `
Jedan od najljepših pogleda na grad pruža se upravo s Trsatske gradine. Služila je kao vojna utvrda koju su 1225. podigli Frankopani, a zbog svog položaja bila je i lako branjiva. "Trsat" se prvi put spominje u Vinodolskom zakoniku 1228. god. kao jedan od gradova u vlasti kneza Leonarda Frankopana. Potres 1750. oštećuje utvrdu, nakon čega ostaje napuštena neko vrijeme sve do 1826. kada je kupuje grof Laval Nugent. On je bio austrijski vojskovođa koji je pridonio važnosti utvrde time što ju je obnovio, pretvorio u mauzolej, u njoj izgradio manji hram i donio golemo umjetničko blago koje je skupio tijekom svojih pohoda u Europi. Nakon toga gradina ponovno počinje propadati pa je grad Rijeka ponovno obnavlja 1960. god. Jedan od najljepših pogleda na grad pruža se upravo s Trsatske gradine. Služila je kao vojna utvrda koju su 1225. podigli Frankopani, a zbog svog položaja bila je i lako branjiva. "Trsat" se prvi put spominje u Vinodolskom zakoniku 1228. god. kao jedan od gradova u vlasti kneza Leonarda Frankopana. Potres 1750. oštećuje utvrdu, nakon čega ostaje napuštena neko vrijeme sve do 1826. kada je kupuje grof Laval Nugent. On je bio austrijski vojskovođa koji je pridonio važnosti utvrde time što ju je obnovio, pretvorio u mauzolej, u njoj izgradio manji hram i donio golemo umjetničko blago koje je skupio tijekom svojih pohoda u Europi. Nakon toga gradina ponovno počinje propadati pa je grad Rijeka ponovno obnavlja 1960. god.  

On je bio austrijski vojskovođa koji je pridonio važnosti utvrde time što ju je obnovio, pretvorio u mauzolej, u njoj izgradio manji hram i donio golemo umjetničko blago koje je skupio tijekom svojih pohoda u Europi. Nakon toga gradina ponovno počinje propadati pa je grad Rijeka ponovno obnavlja 1960. godine.  
    `,
    next: [],
    location: { lat: 45.3324403, lng: 14.4553793 },
    category: "KULTURA",
    badge: "FESTIVALNI"
  },
];