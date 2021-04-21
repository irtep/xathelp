/*
...xxx
salasanan takana..
// glitch voisi toimia, kun siinä pääsy backendiin kätevästi ja saa salattua stringejä...
<hae otsik..>   <hae vaustauksista> // etsii vastauksista...
otsikko1	<vastaus><copypainike>
otsikko2	syötä uusi:
otsikko3	<otsikko><vastaus>
//
onload:
käy hakee datan databasesta.. mlabista vaikka..
käy läpi otsikot ja laita ne onClickin ja br:n kanssa tai <ul>
esim:
const allData ? [
  {question: `Miksi poistunut ilmoitus löytyy vielä Googlesta`,
   response: `kiitos yhteydenotostasi. Asuntoilmoitukset Oikotie.fi -sivustolla ovat julkisia ilmoituksen aukioloajan ajan ja ilmoitukset ovat Googlen löydettävissä ja indeksoitavissa, mutta heti kun ilmoitus suljetaan, se poistetaan Googlen hakutuloksista. Google kuitenkin säilyttää vanhat ilmoitukset määrittelemättömän ajan osana hakutuloksiaan, johon Oikotie.fi ei pysty vaikuttamaan.

En valitettavasti pysty vaikuttamaan suoraan Googlen hakutulossivuun. Se päivittyy aikanaan, kun he seuraavan kerran päivittävät hakualgoritmejaan. Kun hakutuloslinkkiä klikkaa, Oikotien sivuilla näkyy vain teksti "Ilmoitus on poistunut"`}
];

*/
/*
{
    "_id": {
        "$oid": "5c8007c9e7179a3e36e2994e"
    },
    "name": "armies",
    "armyList": [
        [
            "Elves_50p",
            [
                {
                    "name": "Kaelyssa",
                    "type": "warcaster",
                    "bgPoints": 29,
                    "pointCost": 0,
                    "factions": [
                        "retribution"
                    ]
                },
                {
                    "name": "Chimera",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 9,
                    "factions": [
                        "retribution"
                    ]
                },
                {
                    "name": "Manticore",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 14,
                    "factions": [
                        "retribution"
                    ]
                },
                {
                    "name": "Banshee",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 18,
                    "factions": [
                        "retribution"
                    ]
                },
                {
                    "name": "Magehunter_assassin",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 4,
                    "factions": [
                        "retribution"
                    ]
                },
                {
                    "name": "Magehunter_assassin",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 4,
                    "factions": [
                        "retribution"
                    ]
                },
                {
                    "name": "Arcanist_Mechanic",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 2,
                    "factions": [
                        "retribution"
                    ]
                },
                {
                    "name": "Dahlia_and_Skarath",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 17,
                    "factions": [
                        "circle",
                        "retribution",
                        "trollbloods"
                    ]
                },
                {
                    "name": "6x_MH_StrikeForce",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "retribution"
                    ]
                }
            ]
        ],
        [
            "Striker_melee_50p",
            [
                {
                    "name": "Stryker1",
                    "type": "warcaster",
                    "bgPoints": 30,
                    "pointCost": 0,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Ironclad",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 12,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Lancer",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Lancer",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "10x_Stormguard",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Rangers",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 9,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "6x_steelh_rifleman",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 8,
                    "factions": [
                        "crucible",
                        "cryx",
                        "cygnar",
                        "khador",
                        "protectorate"
                    ]
                },
                {
                    "name": "Rorsh_and_Brine",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "circle",
                        "cryx",
                        "cygnar",
                        "khador",
                        "protectorate",
                        "trollbloods",
                        "skorne",
                        "legion"
                    ]
                }
            ]
        ],
        [
            "Ironbra_50p_trident",
            [
                {
                    "name": "Ironbra",
                    "type": "warlock",
                    "bgPoints": 27,
                    "pointCost": 0,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Dire_Troll_Bomber",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 19,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Dire_Troll_Mauler",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Troll_impaler",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 11,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Thumper_crew",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 5,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "6x_Cylena_and_hunters",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 12,
                    "factions": [
                        "circle",
                        "cryx",
                        "cygnar",
                        "khador",
                        "retribution",
                        "trollbloods"
                    ]
                },
                {
                    "name": "6x_Fennblades",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 9,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Totem_hunter",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 6,
                    "factions": [
                        "circle",
                        "legion",
                        "skorne",
                        "trollbloods"
                    ]
                }
            ]
        ],
        [
            "Madrak_trident_50p",
            [
                {
                    "name": "Madrak1",
                    "type": "warlock",
                    "bgPoints": 29,
                    "pointCost": 0,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Troll_impaler",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 11,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Troll_impaler",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 11,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Troll_impaler",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 11,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "WrongEye_and_Snapjaw",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 17,
                    "factions": [
                        "circle",
                        "cryx",
                        "trollbloods",
                        "skorne",
                        "legion"
                    ]
                },
                {
                    "name": "6x_Cylena_and_hunters",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 12,
                    "factions": [
                        "circle",
                        "cryx",
                        "cygnar",
                        "khador",
                        "retribution",
                        "trollbloods"
                    ]
                },
                {
                    "name": "10x_Fennblades",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "gobber_bellows_crew",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 2,
                    "factions": [
                        "circle",
                        "legion",
                        "skorne",
                        "trollbloods"
                    ]
                }
            ]
        ],
        [
            "Deneghra_New_50p",
            [
                {
                    "name": "Deneghra1",
                    "type": "warcaster",
                    "bgPoints": 26,
                    "pointCost": 0,
                    "factions": [
                        "cryx"
                    ]
                },
                {
                    "name": "Deathripper",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 6,
                    "factions": [
                        "cryx"
                    ]
                },
                {
                    "name": "Deathripper",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 6,
                    "factions": [
                        "cryx"
                    ]
                },
                {
                    "name": "Defiler",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 8,
                    "factions": [
                        "cryx"
                    ]
                },
                {
                    "name": "Reaper",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 13,
                    "factions": [
                        "cryx"
                    ]
                },
                {
                    "name": "6x_satyrix_bwitches",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 8,
                    "factions": [
                        "cryx"
                    ]
                },
                {
                    "name": "6x_bane_warriors",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cryx"
                    ]
                },
                {
                    "name": "6x_steelh_rifleman",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 8,
                    "factions": [
                        "crucible",
                        "cryx",
                        "cygnar",
                        "khador",
                        "protectorate"
                    ]
                },
                {
                    "name": "WrongEye_and_Snapjaw",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 17,
                    "factions": [
                        "circle",
                        "cryx",
                        "trollbloods",
                        "skorne",
                        "legion"
                    ]
                }
            ]
        ],
        [
            "Mohsar_WW2_50p",
            [
                {
                    "name": "Mohsar",
                    "type": "warlock",
                    "bgPoints": 27,
                    "pointCost": 0,
                    "factions": [
                        "circle"
                    ]
                },
                {
                    "name": "Woldwrath",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 37,
                    "factions": [
                        "circle"
                    ]
                },
                {
                    "name": "Wild_Argus",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 7,
                    "factions": [
                        "circle"
                    ]
                },
                {
                    "name": "Wild_Argus",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 7,
                    "factions": [
                        "circle"
                    ]
                },
                {
                    "name": "Gorax_rager",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 7,
                    "factions": [
                        "circle"
                    ]
                },
                {
                    "name": "5x_Skinwalkers commander",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 19,
                    "factions": [
                        "circle"
                    ]
                }
            ]
        ],
        [
            "stryker_25p",
            [
                {
                    "name": "Stryker1",
                    "type": "warcaster",
                    "bgPoints": 30,
                    "pointCost": 0,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Avenger",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 17,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Defender",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 16,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Rangers",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 9,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "6x_Stormguard",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 9,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Reinholdt",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 4,
                    "factions": [
                        "cygnar",
                        "khador"
                    ]
                }
            ]
        ],
        [
            "Amazonas_25p",
            [
                {
                    "name": "Maddox1",
                    "type": "warcaster",
                    "bgPoints": 30,
                    "pointCost": 0,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Ironclad",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 12,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Firefly",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 8,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Lancer",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Lancer",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "10x_Stormguard",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "cygnar"
                    ]
                }
            ]
        ],
        [
            "Amazonas_50p",
            [
                {
                    "name": "Maddox1",
                    "type": "warcaster",
                    "bgPoints": 30,
                    "pointCost": 0,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Ironclad",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 12,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Lancer",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Lancer",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Firefly",
                    "type": "warjack",
                    "bgPoints": 0,
                    "pointCost": 8,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "10x_Stormguard",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "cygnar"
                    ]
                },
                {
                    "name": "Rorsh_and_Brine",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "circle",
                        "cryx",
                        "cygnar",
                        "khador",
                        "protectorate",
                        "trollbloods",
                        "skorne",
                        "legion"
                    ]
                },
                {
                    "name": "6x_Long_gunners",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "cygnar"
                    ]
                }
            ]
        ],
        [
            "Madrak_25p",
            [
                {
                    "name": "Madrak1",
                    "type": "warlock",
                    "bgPoints": 29,
                    "pointCost": 0,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Dire_Troll_Mauler",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Troll_axer",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 10,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "Troll_impaler",
                    "type": "warbeast",
                    "bgPoints": 0,
                    "pointCost": 11,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "10x_Fennblades",
                    "type": "unit",
                    "bgPoints": 0,
                    "pointCost": 15,
                    "factions": [
                        "trollbloods"
                    ]
                },
                {
                    "name": "gobber_bellows_crew",
                    "type": "solo",
                    "bgPoints": 0,
                    "pointCost": 2,
                    "factions": [
                        "circle",
                        "legion",
                        "skorne",
                        "trollbloods"
                    ]
                }
            ]
        ]
    ]
}
*/
