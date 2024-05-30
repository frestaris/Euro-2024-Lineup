const teams = [
    {
        name: "Germany",
        formation: '4-2-3-1',
        players: {
            1: { number: 22, name: "ter Stegen" },
            2: { number: 6, name: "Kimmich" },
            3: { number: 2, name: "Rudiger" },
            4: { number: 4, name: "Tah" },
            5: { number: 18, name: "Mittelstadt" },
            6: { number: 23, name: "Andrith" },
            7: { number: 8, name: "Kroos" },
            8: { number: 10, name: "Musiala" },
            9: { number: 21, name: "Gundogan" },
            10: { number: 17, name: "Wirtz" },
            11: { number: 7, name: "Havertz" }
        }
    },
    {
        name: "Scotland",
        formation: '3-4-2-1',
        players: {
            1: { number: 1, name: "Gunn" },
            2: { number: 13, name: "Hendry" },
            3: { number: 5, name: "Cooper" },
            4: { number: 6, name: "Tierney" },
            5: { number: 22, name: "Patterson" },
            6: { number: 4, name: "McTominay" },
            7: { number: 14, name: "Gilmour" },
            8: { number: 3, name: "Robertson" },
            9: { number: 7, name: "McGinn" },
            10: { number: 11, name: "Christie" },
            11: { number: 9, name: "Dykes" }
        }
    },
    {
        name: "Hungary",
        formation: '3-4-2-1',
        players: {
            1: { number: 1, name: "Dibusz" },
            2: { number: 2, name: "Lang" },
            3: { number: 23, name: "Dardai" },
            4: { number: 4, name: "Szalai" },
            5: { number: 14, name: "Bolla" },
            6: { number: 8, name: "Nagy" },
            7: { number: 17, name: "Styles" },
            8: { number: 18, name: "Nagy" },
            9: { number: 16, name: "Gazdag" },
            10: { number: 10, name: "Szoboszlai" },
            11: { number: 9, name: "Adam" }
        }
    },
    {
        name: "Switzerland",
        formation: '3-4-2-1',
        players: {
            1: { number: 12, name: "Mvogo" },
            2: { number: 22, name: "Sthar" },
            3: { number: 4, name: "Elvedi" },
            4: { number: 18, name: "Cumart" },
            5: { number: 3, name: "Wildmer" },
            6: { number: 10, name: "Xhaka" },
            7: { number: 25, name: "Sierro" },
            8: { number: 19, name: "Ndoye" },
            9: { number: 7, name: "Amdouni" },
            10: { number: 20, name: "Aebisther" },
            11: { number: 23, name: "Shaqiri" }
        }
    },
    {
        name: "Spain",
        formation: '4-2-3-1',
        players: {
            1: { number: 23, name: "Simon" },
            2: { number: 20, name: "Carvajal" },
            3: { number: 5, name: "Le Normand" },
            4: { number: 14, name: "Laporte" },
            5: { number: 2, name: "Cucurella" },
            6: { number: 8, name: "Ruiz Pena" },
            7: { number: 16, name: "Rodri" },
            8: { number: 19, name: "Yamal" },
            9: { number: 10, name: "Olmo" },
            10: { number: 11, name: "Williams" },
            11: { number: 7, name: "Morata" }
        }
    },
    {
        name: "Croatia",
        formation: '4-3-3',
        players: {
            1: { number: 12, name: "Labrovic" },
            2: { number: 2, name: "Stanisic" },
            3: { number: 21, name: "Vida" },
            4: { number: 3, name: "Pongracic" },
            5: { number: 4, name: "Gvardiol" },
            6: { number: 13, name: "Vlasic" },
            7: { number: 10, name: "Modric" },
            8: { number: 11, name: "Brozovic" },
            9: { number: 7, name: "Majer" },
            10: { number: 17, name: "Petkovic" },
            11: { number: 20, name: "Pjaca" }
        }
    },
    {
        name: "Italy",
        formation: '3-4-2-1',
        players: {
            1: { number: 12, name: "Vicario" },
            2: { number: 13, name: "Darmian" },
            3: { number: 16, name: "G Mancini" },
            4: { number: 23, name: "Bastoni" },
            5: { number: 25, name: "Bellanova" },
            6: { number: 18, name: "Barella" },
            7: { number: 8, name: "Jorginho" },
            8: { number: 3, name: "F Dimarco" },
            9: { number: 22, name: "Zaniolo" },
            10: { number: 10, name: "Pellegrini" },
            11: { number: 11, name: "Raspadori" }
        }
    },
    {
        name: "Albania",
        formation: '4-2-3-1',
        players: {
            1: { number: 23, name: "Strakosha" },
            2: { number: 2, name: "Balliu" },
            3: { number: 13, name: "Mihaj" },
            4: { number: 6, name: "Djimsiti" },
            5: { number: 3, name: "Mitaj" },
            6: { number: 20, name: "Ramadani" },
            7: { number: 21, name: "Asllani" },
            8: { number: 9, name: "Asani" },
            9: { number: 14, name: "Laci" },
            10: { number: 10, name: "Bajrami" },
            11: { number: 22, name: "Broja" }
        }
    },
    {
        name: "Slovenia",
        formation: '4-4-2',
        players: {
            1: { number: 1, name: "Oblak" },
            2: { number: 2, name: "Karnitnik" },
            3: { number: 4, name: "Blazic" },
            4: { number: 6, name: "Bijol" },
            5: { number: 13, name: "Janza" },
            6: { number: 20, name: "Stojanovic" },
            7: { number: 22, name: "Cerin" },
            8: { number: 10, name: "Elsnik" },
            9: { number: 8, name: "Lovric" },
            10: { number: 9, name: "Sporar" },
            11: { number: 11, name: "Sesko" }
        }
    },
    {
        name: "Denmark",
        formation: '4-3-3',
        players: {
            1: { number: 22, name: "Ronnow" },
            2: { number: 26, name: "Jelert" },
            3: { number: 13, name: "Nelsson" },
            4: { number: 3, name: "Vestergaard" },
            5: { number: 17, name: "Kristiansen" },
            6: { number: 21, name: "Hjulmand" },
            7: { number: 23, name: "Hojbjerg" },
            8: { number: 7, name: "Jensen" },
            9: { number: 24, name: "Dreyer" },
            10: { number: 12, name: "Dolberg" },
            11: { number: 14, name: "Damsgaard" }
        }
    },
    {
        name: "Serbia",
        formation: '3-4-2-1',
        players: {
            1: { number: 1, name: "Rajkovic" },
            2: { number: 4, name: "Milenkovic" },
            3: { number: 13, name: "Masovic" },
            4: { number: 15, name: "Babic" },
            5: { number: 14, name: "Zivkovic" },
            6: { number: 17, name: "Mijailovic" },
            7: { number: 22, name: "Lukic" },
            8: { number: 11, name: "Kostic" },
            9: { number: 19, name: "Samardzic" },
            10: { number: 20, name: "Milinkovic" },
            11: { number: 9, name: "Mitrovic" }
        }
    },
    {
        name: "England",
        formation: '4-2-3-1',
        players: {
            1: { number: 1, name: "Pickford" },
            2: { number: 2, name: "Konsa Ngoyo" },
            3: { number: 5, name: "Stones" },
            4: { number: 6, name: "Dunk" },
            5: { number: 3, name: "Chilwell" },
            6: { number: 21, name: "Mainoo" },
            7: { number: 4, name: "Rice" },
            8: { number: 18, name: "Bowen" },
            9: { number: 10, name: "Bellingham" },
            10: { number: 7, name: "Foden" },
            11: { number: 17, name: "Toney" }
        }
    },
    {
        name: "Netherlands",
        formation: '3-4-1-2',
        players: {
            1: { number: 1, name: "Verbruggen" },
            2: { number: 3, name: "de Ligt" },
            3: { number: 4, name: "van Dijk" },
            4: { number: 5, name: "Ake" },
            5: { number: 22, name: "Dumfries" },
            6: { number: 6, name: "Scouthen" },
            7: { number: 16, name: "Veerman" },
            8: { number: 17, name: "Blind" },
            9: { number: 14, name: "Reijnders" },
            10: { number: 10, name: "Memphis" },
            11: { number: 18, name: "Malen" }
        }
    },
    {
        name: "France",
        formation: '4-3-3',
        players: {
            1: { number: 16, name: "Maignan" },
            2: { number: 3, name: "Clauss" },
            3: { number: 17, name: "Saliba" },
            4: { number: 13, name: "Konate" },
            5: { number: 22, name: "Hernandez" },
            6: { number: 19, name: "Fofana" },
            7: { number: 8, name: "Tchouameni" },
            8: { number: 6, name: "Camavinga" },
            9: { number: 12, name: "Kolo Muani" },
            10: { number: 9, name: "Giroud" },
            11: { number: 10, name: "Mbappe" }
        }
    },
    {
        name: "Poland",
        formation: '3-5-2',
        players: {
            1: { number: 1, name: "Szczesny" },
            2: { number: 5, name: "Bednarek" },
            3: { number: 3, name: "Dawidowicz" },
            4: { number: 14, name: "Kiwior" },
            5: { number: 19, name: "Frankowski" },
            6: { number: 6, name: "Piotrowski" },
            7: { number: 8, name: "Slisz" },
            8: { number: 10, name: "Zielinski" },
            9: { number: 21, name: "Zalewski" },
            10: { number: 7, name: "Swiderski" },
            11: { number: 9, name: "Lewandowski" }
        }
    },
    {
        name: "Austria",
        formation: '4-2-3-1',
        players: {
            1: { number: 1, name: "Schlager" },
            2: { number: 5, name: "Posch" },
            3: { number: 3, name: "Danso" },
            4: { number: 2, name: "Wober" },
            5: { number: 16, name: "Mwene" },
            6: { number: 6, name: "Seiwald" },
            7: { number: 4, name: "Schlager" },
            8: { number: 20, name: "Laimer" },
            9: { number: 19, name: "Baumgartner" },
            10: { number: 18, name: "Schmid" },
            11: { number: 11, name: "Gregoritsch" }
        }
    },
    {
        name: "Ukraine",
        formation: '4-3-3',
        players: {
            1: { number: 23, name: "Lunin" },
            2: { number: 2, name: "Konoplia" },
            3: { number: 13, name: "Zabarnyi" },
            4: { number: 22, name: "Matvyenko" },
            5: { number: 16, name: "Mykolenko" },
            6: { number: 8, name: "Malinovsky" },
            7: { number: 14, name: "Brazhko" },
            8: { number: 7, name: "Sudakov" },
            9: { number: 15, name: "Tsygankov" },
            10: { number: 9, name: "Yaremchuk" },
            11: { number: 10, name: "Mudryk" }
        }
    },
    {
        name: "Slovakia",
        formation: '4-3-3',
        players: {
            1: { number: 12, name: "Rodak" },
            2: { number: 14, name: "Tomic" },
            3: { number: 6, name: "Gyomber" },
            4: { number: 4, name: "Obert" },
            5: { number: 15, name: "De Marco" },
            6: { number: 19, name: "Kucka" },
            7: { number: 13, name: "Hrosovsky" },
            8: { number: 11, name: "Benes" },
            9: { number: 21, name: "Duris" },
            10: { number: 9, name: "Bozenik" },
            11: { number: 17, name: "L Haraslin" }
        }
    },
    {
        name: "Belgium",
        formation: '4-3-3',
        players: {
            1: { number: 13, name: "Sels" },
            2: { number: 21, name: "T Castagne" },
            3: { number: 2, name: "Debast" },
            4: { number: 5, name: "Vertonghen" },
            5: { number: 3, name: "Theate" },
            6: { number: 18, name: "Mangala" },
            7: { number: 6, name: "Mvom" },
            8: { number: 8, name: "Tielemans" },
            9: { number: 11, name: "Trossard" },
            10: { number: 10, name: "Lukaku" },
            11: { number: 7, name: "Doku" }
        }
    },
    {
        name: "Romania",
        formation: '4-3-3',
        players: {
            1: { number: 12, name: "Moldovan" },
            2: { number: 2, name: "Ratiu" },
            3: { number: 3, name: "Dragusin" },
            4: { number: 15, name: "Burca" },
            5: { number: 1, name: "Oprut" },
            6: { number: 18, name: "Marin" },
            7: { number: 6, name: "Marin" },
            8: { number: 10, name: "Stanciu" },
            9: { number: 21, name: "Morutan" },
            10: { number: 7, name: "Alibec" },
            11: { number: 13, name: "Mihaila" }
        }
    },
    {
        name: "Portugal",
        formation: '3-4-2-1',
        players: {
            1: { number: 22, name: "Meireles" },
            2: { number: 3, name: "Pepe" },
            3: { number: 13, name: "Pereira" },
            4: { number: 14, name: "Inacio" },
            5: { number: 2, name: "Dalot" },
            6: { number: 18, name: "Neves" },
            7: { number: 23, name: "Vintinha" },
            8: { number: 20, name: "Cancelo" },
            9: { number: 16, name: "Monteiro" },
            10: { number: 10, name: "Joao Felix" },
            11: { number: 7, name: "Ronaldo" }
        }
    },
    {
        name: "Czech Republic",
        formation: '3-4-2-1',
        players: {
            1: { number: 16, name: "Kovar" },
            2: { number: 17, name: "Vlcek" },
            3: { number: 21, name: "Hranac" },
            4: { number: 4, name: "Krejci" },
            5: { number: 5, name: "Gabriel" },
            6: { number: 22, name: "Soucek" },
            7: { number: 8, name: "Sadilek" },
            8: { number: 15, name: "Jurasek" },
            9: { number: 7, name: "Barak" },
            10: { number: 10, name: "Schick" },
            11: { number: 9, name: "Hlozek" }
        }
    },
    {
        name: "Georgia",
        formation: '3-5-2',
        players: {
            1: { number: 12, name: "Mamardashvili" },
            2: { number: 5, name: "Kverkvelia" },
            3: { number: 4, name: "Kashia" },
            4: { number: 3, name: "Tabidze" },
            5: { number: 2, name: "Kakabadze" },
            6: { number: 9, name: "Davitashvili" },
            7: { number: 16, name: "Kvekveskin" },
            8: { number: 6, name: "Aburjania" },
            9: { number: 15, name: "Azarov" },
            10: { number: 22, name: "Mikautadze" },
            11: { number: 7, name: "Kvaratskhelia" }
        }
    },
    {
        name: "Turkey",
        formation: '4-2-3-1',
        players: {
            1: { number: 23, name: "Cakir" },
            2: { number: 18, name: "Muldur" },
            3: { number: 3, name: "Demiral" },
            4: { number: 22, name: "Ayhan" },
            5: { number: 13, name: "Ozkacar" },
            6: { number: 5, name: "Ozcan" },
            7: { number: 10, name: "Calhanoglu" },
            8: { number: 8, name: "Kahveci" },
            9: { number: 17, name: "Guler" },
            10: { number: 7, name: "Akturkoglu" },
            11: { number: 19, name: "Yildiz" }
        }
    },

]
export default teams;