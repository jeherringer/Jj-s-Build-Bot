/* 
    ABILITY CATEGORIES:
        - DAMAGE
        - HEALING
        - CC
        - SURVIVABILITY (DMG REDUCTION/BARRIERS)
        - MOBILITY (DASHES/BLINKS)
        - UTILITY (GROUP/SELF BUFFS)
        - DEBUFF
*/


module.exports.abilities = [
    {
        name: "Banshee Wail",
        type: "active",
        category: "CC",
        description: "Slows up to 5 enemies",
        targeting: "cone",
        cooldown: "24 seconds",
        range: "5m",
        discipline: "Banshee",
    },  
    {
        name: "Haunt",
        type: "active",
        category: "Thorns",
        description: "Haunt 3 enemies, reflecting 35% of their damage as Nature damage and healing you for 35% of damage taken",
        targeting: "cone",
        cooldown: "45 seconds",
        range: "5m",
        discipline: "Banshee",
    }, 
    {
        name: "Ghost Army",
        type: "active",
        category: "Area Control",
        description: "Call forth a Ghost Army in front of you dealing 60 - 81 + 70% weapon damage and healing you for 12.5% of damage done",
        targeting: "rectangle",
        cooldown: "23 seconds",
        range: null,
        discipline: "Banshee",
    }, 
    {
        name: "Angel of Death",
        type: "passive",
        category: "Damage",
        description: "Deal 20% more damage to enemies below 30% health",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Banshee",
    }, 
    {
        name: "Song of Speed",
        type: "active",
        category: "Mobility",
        description: "Increase the group's movement speed by 30% for 12 seconds out of combat and 10% for 12 seconds in combat",
        targeting: "group",
        cooldown: "1 second",
        range: null,
        discipline: "Bard",
    },
    {
        name: "Guardian Rythms",
        type: "active",
        category: "Survivability",
        description: "Reduces the group's damage taken by 5% for 12 seconds",
        targeting: "group",
        cooldown: "1 secon",
        range: null,
        discipline: "Bard",
    },{
        name: "Hymn of Restoration",
        type: "active",
        category: "Healing",
        description: "Increase your group's out of combat regeneration by 32 and in combat regeneration by 24 for 12 seconds",
        targeting: "group",
        cooldown: "1 second",
        range: null,
        discipline: "Bard",
    },
    {
        name: "Verses of Victory",
        type: "active",
        category: "Utility",
        description: "Increase your group's attack and support power by 75 for 12 seconds",
        targeting: "group",
        cooldown: "1second",
        range: null,
        discipline: "Bard",
    },
    {
        name: "Form Life",
        type: "active",
        category: "Healing",
        description: "Manifest 2 orbs over 2 casts that heal you or allies for 39 - 48 + 173% weapon damage",
        targeting: "area",
        cooldown: null,
        range: "35m",
        discipline: "Dryad",
    },
    {
        name: "Blast of Leaves",
        type: "active",
        category: "Healing",
        description: "Blast leaves in front of you healing allies in front of you for 96 - 128 + 435% weapon damage over 4 seconds while you channel",
        targeting: "rectangle",
        cooldown: "20",
        range: "7.5m",
        discipline: "Dryad",
    },
    {
        name: "Take Root",
        type: "passive",
        category: "Utility",
        description: "Increase healing bonus by 10% and physical mitigations by 5% when standing still for 2 seconds and until you move",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Dryad",
    },
    {
        name: "Elemental Devourer",
        type: "active",
        category: "Survivability",
        description: "Absorb energy from incoming Fire, Ice, or Electric damage attacks to heal for 125% of the damage inflicted",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Elementalist",
    },
    {
        name: "Reflect Elements",
        type: "active",
        category: "Thorns",
        description: "Reflect 50% weapon damage back to the source of a Fire, Ice, or Electric attack as that same damage type and increase your elemental armor bonus by 25",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Elementalist",
    },
    {
        name: "Fire Wall",
        type: "active",
        category: "Damage",
        description: "Summon a raging inferno to slow and damage any enemies or 30 - 45 + 35% weapon damage as fire lasting 15 seconds",
        targeting: "rectangle",
        cooldown: "23 seconds",
        range: "35m",
        discipline: "Elementalist",
    },
    {
        name: "Conduction",
        type: "passive",
        category: "Damage",
        description: "Increase your attack power by 150 for 30 seconds when damaged by Fire, Ice or Electricity",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Elementalist",
    },
    {
        name: "Free Action",
        type: "active",
        category: "Utility",
        description: "Liberate group members and yourself gaining immunity to Crowd Control effects for 5 seconds",
        targeting: "group",
        cooldown: "45 seconds",
        range: "50m",
        discipline: "Escape Artist",
    },
    {
        name: "Speedy Retaliate",
        type: "active",
        category: "Utility",
        description: "Regain your senses recovering from Knockdown or Stun effects with an attack dealing 113 - 153 + 133% weapon damage and then increasing your movement speed by 30% for 8 seconds",
        targeting: "self",
        cooldown: null,
        range: "5m",
        discipline: "Escape Artist",
    },
    {
        name: "Critical Dodge",
        type: "passive",
        category: "Mobility",
        description: "Recover one dodge pip when hitting critically once per 30 seconds",
        targeting: null,
        cooldown: "30 seconds",
        range: null,
        discipline: "Escape Artist",
    },
    {
        name: "Escapology",
        type: "passive",
        category: "Utility",
        description: "Increase your resolve by 33%, reducing crowd control durations and making it more likely that crowd control immunity triggers after being the victim of multiple control effects",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Escape Artist",
    },
    {
        name: "Purgative",
        type: "active",
        category: "Utility",
        description: "Cleanses your group and yourself of damage over time effects healing for 13 - 15 + 56% weapon damage for each effect removed",
        targeting: "group",
        cooldown: "23 seconds",
        range: "50m",
        discipline: "Field Surgeon",
    },
    {
        name: "Rehabilitation",
        type: "active",
        category: "Healing",
        description: "Tends an ally's wounds relieving 53 + 84% weapon damage plus an additional 1.4 health for every point of stamina. Heals twice over 6 seconds",
        targeting: "reticle",
        cooldown: "9 seconds",
        range: "30m",
        discipline: "Field Surgeon",
    },
    {
        name: "Resuce",
        type: "active",
        category: "Utility",
        description: "Averts an ally's imminent death for 10 seconds, preventing them from dropping below 1 health and healing them for 189 - 231 + 840% weapon damage",
        targeting: "reticle",
        cooldown: "45 seconds",
        range: "35m",
        discipline: "Field Surgeon",
    },
    {
        name: "Noble Purpose",
        type: "passive",
        category: "Utility",
        description: "Inspires you and recovers resource for every 1000 health you restore to others",
        targeting: null,
        cooldown: "15 seconds",
        range: null,
        discipline: "Field Surgeon",
    },
    {
        name: "Force Wave",
        type: "active",
        category: "CC",
        description: "Pushes enemies away from you inflicting 107 - 160 + 133% weapon damage and leaves their movement slowed",
        targeting: "area",
        cooldown: "24 seconds",
        range: null,
        discipline: "Force Mage",
    },
    {
        name: "Kinetic Boost",
        type: "active",
        category: "Damage",
        description: "Empowers you briefly increasing your damage bonus by 20%  and power efficiency by 20% for 20 seconds",
        targeting: "self",
        cooldown: "68 seconds",
        range: null,
        discipline: "Force Mage",
    },
    {
        name: "Reactive Barrier",
        type: "passive",
        category: "Survivability",
        description: "Grants a chance for attacks to generate a Force Shield giving you a barrier and increasing attack power by 150",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Force Mage",
    },
    {
        name: "Wreckoning",
        type: "passive",
        category: "Damage",
        description: "Empowers your barriers to explode when they expire wrecking nearby enemies for 56 - 84 + 70% weapon damage",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Force Mage",
    },
    {
        name: "Indulgence",
        type: "active",
        category: "Utility",
        description: "Cleanses you of sin and become immune to sin for 30 seconds",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Friar",
    },
    {
        name: "Benediction",
        type: "active",
        category: "Utility",
        description: "Blesses group members and you increasing bleed armor by 50 for 30 seconds",
        targeting: "group",
        cooldown: "45 seconds",
        range: null,
        discipline: "Friar",
    },
    {
        name: "Chain Heal",
        type: "active",
        category: "Healing",
        description: "Heals a targeted ally for 63 - 77 + 280% weapon damage and jumps to up to a nearby ally. Each jump reduces healing by 30%",
        targeting: "ray",
        cooldown: "9 seconds",
        range: "35m",
        discipline: "Friar",
    },
    {
        name: "Fortuitous Blessings",
        type: "passive",
        category: "Utility",
        description: "Grants movement speed if you have not recently healed, restores your resource over time if you have healed and are low resource, and support power otherwise",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Friar",
    },
    {
        name: "Invisibility",
        type: "active",
        category: "Utility",
        description: "Makes you dissapear automatically while both standing still and not in combat",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Illusionist",
    },
    {
        name: "Glamour Weapon",
        type: "active",
        category: "Damage",
        description: "Adds a glamour to your weapon increasing attack power by 150 for 15 seconds",
        targeting: "self",
        cooldown: "68 seconds",
        range: null,
        discipline: "Illusionist",
    },
    {
        name: "Phantom Feints",
        type: "passive",
        category: "Damage",
        description: "Tricks enemies with a movement speed debuff to see illusory attacks causing your true attacks to inflict 20% more damage",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Illusionist",
    },
    {
        name: "Hot Foot",
        type: "passive",
        category: "CC",
        description: "Causes your third basic attack to beguile an enemy with an illusion of fire surrounding their feet and reduces their movement speed by 30%",
        targeting: null,
        cooldown:null,
        range: null,
        discipline: "Illusionist",
    },
    {
        name: "Unstoppable",
        type: "active",
        category: "Utility",
        description: "Maximizes your resolve and triggers crowd control immunity for a short time",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Juggernaut",
    },
    {
        name: "Toughness",
        type: "active",
        category: "Utility",
        description: "Strengthens group members and you increasing their maximum health by 20% for 45 seconds",
        targeting: "group",
        cooldown: "68 seconds",
        range: null,
        discipline: "Juggernaut",
    },
    {
        name: "Furious Retaliate",
        type: "active",
        category: "Utility",
        description: "Immediately recover from control effects dealing 113 - 153 + 133% weapon damage to nearby enemies and increasing your resolve",
        targeting: "sphere",
        cooldown: null,
        range: "5m",
        discipline: "Juggernaut",
    },
    {
        name: "Spite",
        type: "passive",
        category: "Survivability",
        description: "Recovers 4 - 6% of your maximum health over 5 seconds each time you suffer a knockdown or stun",
        targeting: "self",
        cooldown: null,
        range: null,
        discipline: "Juggernaut",
    },
    {
        name: "Blade Turning",
        type: "active",
        category: "Survivability",
        description: "Grants a slashing immune barrier for 15 seconds",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Militant Mage",
    },
    {
        name: "Reflection",
        type: "active",
        category: "Thorns",
        description: "Reflects 50% of slashing damage back to the source of a slashing attack",
        targeting: "self",
        cooldown: "24 seconds",
        range: null,
        discipline: "Militant Mage",
    },
    {
        name: "Warp Metal",
        type: "active",
        category: "Debuff",
        description: "Curses an enemy with a destructive aura increasing weapon weight for each slashing damage attack they commit",
        targeting: "ray",
        cooldown: "30 seconds",
        range: "15m",
        discipline: "Militant Mage",
    },
    {
        name: "Sword Ward",
        type: "passive",
        category: "Survivability",
        description: "Enchants your armor with a ward against slashing attacks increasing your slashing armor by 25. Slashing attacks cause Sword Ward to slowly weaken temporarily",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Militant Mage",
    },
    {
        name: "Heads Up",
        type: "active",
        category: "Utility",
        description: "Increases the perception of the group and you by 25 and removes the exposed state",
        targeting: "group",
        cooldown: "68 seconds",
        range: null,
        discipline: "Mole Hunter",
    },
    {
        name: "Flare",
        type: "active",
        category: "Utility",
        description: "Deploys a flare revealing any stealth users in the area. Revealed enemies take 170 - 230 + 200% weapon damage as fire damage",
        targeting: "cone",
        cooldown: "23 seconds",
        range: "30m",
        discipline: "Mole Hunter",
    },
    {
        name: "Get 'Em",
        type: "active",
        category: "CC",
        description: "Stops an enemy in it's tracks causing 85 - 115 + 100% weapon damage and rooting them. Counts as an expose punish ability",
        targeting: "cone",
        cooldown: "24 seconds",
        range: "35m",
        discipline: "Mole Hunter",
    },
    {
        name: "Revenge",
        type: "passive",
        category: "Damage",
        description: "Increases your critical hit chance and critical hit damage by 10 for 30 seconds when damaged by a stealth attack",
        targeting: "self",
        cooldown: null,
        range: null,
        discipline: "Mole Hunter",
    },
    {
        name: "Jelly Skin",
        type: "active",
        category: "Survivability",
        description: "Protects you with skin like rubber granting you a barrier with immunity to crushing damage",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Mudman",
    },
    {
        name: "Muck Spatter",
        type: "active",
        category: "CC",
        description: "Causes crushing attacks made against you have a chance to cause nearby enemies to be afflicted with blindness and severe corruption",
        targeting: "self",
        cooldown: "30 seconds",
        range: "8m",
        discipline: "Mudman",
    },
    {
        name: "Remold",
        type: "active",
        category: "Survivability",
        description: "Causes you to reform like clay easily healing any crushing damage inflicted upon you and healing for an additional 63 - 77 + 280% weapon damage every 5 seconds for 15 seconds",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Mudman",
    },
    {
        name: "Marshy Body",
        type: "passive",
        category: "Survivability",
        description: "Cover yourself in a marshy body that increases your crushing armor by .2 for every point of stamina",
        targeting: "self",
        cooldown: null,
        range: null,
        discipline: "Mudman",
    },
    {
        name: "Fountain of Life",
        type: "active",
        category: "Healing",
        description: "Creates a fountain of life at the targeted location chaining heals to nearby allies and lasting 15 seconds or 30 heals",
        targeting: "area",
        cooldown: "20 seconds",
        range: null,
        discipline: "Naiad",
    },
    {
        name: "Water Spirits",
        type: "active",
        category: "Healing",
        description: "Summons and launches a water spirit which heals allies over 20 seconds or 30 heals. Only heals each player 5 times maximum. Enemies hit suffer a 30% to fire damage taken for 20 seconds",
        targeting: "area",
        cooldown: "25 seconds",
        range: null,
        discipline: "Naiad",
    },
    {
        name: "Grasping Roots",
        type: "active",
        category: "CC",
        description: "Commands nature to envelope enemies in the targeted area rooting them in place and dealing 50 -73 + 63% weapon damage",
        targeting: "area",
        cooldown: "24 seconds",
        range: "35m",
        discipline: "Naiad",
    },
    {
        name: "Supreme Element",
        type: "passive",
        category: "Utility",
        description: "Grants various effects based on elemental damage taken: fire damage heals for 20% of damage inflicted, electric damage deals 10% of damage inflicted back to source, and ice damage applies a 6% healing modifier stacking up to 3 times",
        targeting: "self",
        cooldown: null,
        range: null,
        discipline: "Naiad",
    },
    {
        name: "Pixie Dust",
        type: "active",
        category: "Utility",
        description: "Blankets the targeted area with pixie dust increasing incoming healing by 25% for 25 seconds",
        targeting: "area",
        cooldown: "45 seconds",
        range: "5m",
        discipline: "Pixie",
    },
    {
        name: "Wee One",
        type: "active",
        category: "Debuff",
        description: "Shrinks the targeted area down to size reducing damage bonus by 20% for 25 seconds stacking up to 3 times",
        targeting: "area",
        cooldown: "45 seconds",
        range: "5m",
        discipline: "Pixie",
    },
    {
        name: "Soothing Winds",
        type: "active",
        category: "Healing",
        description: "Heals a targeted ally and another additional ally instantly for 13 - 15 + 56% weapon damage with additional healing over time",
        targeting: "ray",
        cooldown: null,
        range: "35m",
        discipline: "Pixie",
    },
    {
        name: "Pix Fix",
        type: "passive",
        category: "Utility",
        description: "Gains one additional target for chain type healing abilities and reduce the amount of healing falloff by 50%",
        targeting: "self",
        cooldown: null,
        range: null,
        discipline: "Pixie",
    },
    {
        name: "Shrivel",
        type: "active",
        category: "Debuff",
        description: "Curses an enemy with disease and blackmantle, absorbing up to 500 points of healing. Counts as an expose punish ability",
        targeting: "ray",
        cooldown: "45 seconds",
        range: "30m",
        discipline: "Plague Lord",
    },
    {
        name: "Decay",
        type: "active",
        category: "Debuff",
        description: "Infects an enemy with a disesase and reduces healing recieved. Counts as an expose punish ability",
        targeting: "ray",
        cooldown: "45 seconds",
        range: "30m",
        discipline: "Plague Lord",
    },
    {
        name: "Festering Wounds",
        type: "active",
        category: "Debuff",
        description: "Plagues an enemy with disease reducing their healing modifier by 25% and for 30 seconds any healing ability leaves them in the exposed state",
        targeting: "ray",
        cooldown: "45 seconds",
        range: "30m",
        discipline: "Plague Lord",
    },
    {
        name: "Touch of Rot",
        type: "passive",
        category: "Debuff",
        description: "Applies a support power debuff on your third basic attack",
        targeting: null,
        cooldown: null,
        range: null,
        discipline: "Plague Lord",
    },
    {
        name: "Rune Shield",
        type: "active",
        category: "Survivability",
        description: "Protects you increasing elemental armor by 20",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Rune Caster",
    },
    {
        name: "Fortification",
        type: "active",
        category: "Utility",
        description: "Aids your group members and you increasing health by 1000",
        targeting: "group",
        cooldown: "45 seconds",
        range: null,
        discipline: "Rune Caster",
    },
    {
        name: "Sanctuary",
        type: "active",
        category: "Utility",
        description: "Defends an area with a runic symbol increasing allies' armor by 20% for 15 seconds",
        targeting: "area",
        cooldown: "23 seconds",
        range: "10m",
        discipline: "Rune Caster",
    },
    {
        name: "Reprisal",
        type: "active",
        category: "Thorns",
        description: "Absorbs 10% of damage taken for 15 seconds and then explodes inflicting 35% of total damage taken (max 1050) to nearby enemies as fire damage",
        targeting: "self",
        cooldown: "30 seconds",
        range: "5m",
        discipline: "Rune Caster",
    },
    {
        name: "Aura of Terror",
        type: "active",
        category: "CC",
        description: "Surrounds you with a chilling aura of palpable fear that automatically reveals stealthed enemies. Enemies who remain nearby for too long are suppressed and inflicted with frostbite",
        targeting: "self",
        cooldown: "30 seconds",
        range: "5m",
        discipline: "Scarecrow",
    },
    {
        name: "Needlin' Haystack",
        type: "active",
        category: "Thorns",
        description: "Covers your body with sharp needle-like straws increasing piercing armor by 25 and reflecting piercing attacks reflecting 133% weapon damage and causing severe bleeding",
        targeting: "self",
        cooldown: "24 seconds",
        range: null,
        discipline: "Scarecrow",
    },
    {
        name: "Pin Cushion",
        type: "active",
        category: "Survivability",
        description: "Causes you to gain a piercing immune barrier for 15 seconds",
        targeting: "self",
        cooldown: "45 seconds",
        range: null,
        discipline: "Scarecrow",
    },
    {
        name: "Terrifying Features",
        type: "passive",
        category: "CC",
        description: "Protects you with a powerful enchantment periodically stunning attackers",
        targeting: "self",
        cooldown: null,
        range: null,
        discipline: "Scarecrow",
    },
    {
        name: "",
        type: "",
        category: "",
        description: "",
        targeting: "",
        cooldown: "",
        range: "",
        discipline: "Banshee",
    },
];