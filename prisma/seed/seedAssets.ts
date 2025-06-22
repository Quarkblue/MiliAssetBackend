import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seedAssets() {
    await prisma.asset.createMany({
        data: [
            {
              "name": "12 Gauge Shells",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Water Purification Unit",
              "equipmentType": "OTHER"
            },
            {
              "name": "AK-47",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Humvee",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Antibiotic Pack",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Emergency Trauma Dressing",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "7.62mm Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Signal Booster",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Encrypted Radio",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "5.56mm NATO Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Smoke Grenades",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Climbing Gear",
              "equipmentType": "OTHER"
            },
            {
              "name": "M1 Abrams",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Bradley IFV",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "12 Gauge Shells",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "FN SCAR",
              "equipmentType": "WEAPON"
            },
            {
              "name": "IV Kit",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Chest Seal",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Splint Kit",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "M113 APC",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Tactical Backpack",
              "equipmentType": "OTHER"
            },
            {
              "name": "LAV-25",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "M249 SAW",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Medical Evacuation Litter",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Tracer Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Signal Booster",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Blood Clotting Agent",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "AK-47",
              "equipmentType": "WEAPON"
            },
            {
              "name": "M9 Pistol",
              "equipmentType": "WEAPON"
            },
            {
              "name": "M249 SAW",
              "equipmentType": "WEAPON"
            },
            {
              "name": "CH-47 Chinook",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Signal Flare Gun",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "7.62mm Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Blood Clotting Agent",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Antibiotic Pack",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Chest Seal",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Encrypted Radio",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Anti-Tank Mines",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Signal Booster",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "LAV-25",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Medical Evacuation Litter",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Medical Evacuation Litter",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Tourniquet",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "M9 Pistol",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Tourniquet",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Satellite Phone",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Tracer Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Night Vision Goggles",
              "equipmentType": "OTHER"
            },
            {
              "name": "M1 Abrams",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "M113 APC",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Medical Evacuation Litter",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Rangefinder",
              "equipmentType": "OTHER"
            },
            {
              "name": "Tactical Backpack",
              "equipmentType": "OTHER"
            },
            {
              "name": "5.56mm NATO Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "MP5",
              "equipmentType": "WEAPON"
            },
            {
              "name": "UH-60 Black Hawk",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Radio Repeater",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Rocket Propelled Grenades",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Signal Flare Gun",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "FN SCAR",
              "equipmentType": "WEAPON"
            },
            {
              "name": "M1 Abrams",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Medical Evacuation Litter",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Handheld Radio",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Humvee",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Camouflage Netting",
              "equipmentType": "OTHER"
            },
            {
              "name": "Tool Kit",
              "equipmentType": "OTHER"
            },
            {
              "name": "MP5",
              "equipmentType": "WEAPON"
            },
            {
              "name": "FN SCAR",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Climbing Gear",
              "equipmentType": "OTHER"
            },
            {
              "name": "UH-60 Black Hawk",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Encrypted Radio",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Bradley IFV",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Comm Backpack",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "M113 APC",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "M9 Pistol",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Parachute",
              "equipmentType": "OTHER"
            },
            {
              "name": "Tactical Antenna",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Chest Seal",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Antibiotic Pack",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Barrett M82",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Rangefinder",
              "equipmentType": "OTHER"
            },
            {
              "name": "M320 Grenade Launcher",
              "equipmentType": "WEAPON"
            },
            {
              "name": "LAV-25",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "M4 Carbine",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Antibiotic Pack",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Bradley IFV",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "CH-47 Chinook",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Tracer Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "12 Gauge Shells",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "FN SCAR",
              "equipmentType": "WEAPON"
            },
            {
              "name": "UH-60 Black Hawk",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "UH-60 Black Hawk",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "LAV-25",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Climbing Gear",
              "equipmentType": "OTHER"
            },
            {
              "name": "Rocket Propelled Grenades",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Binoculars",
              "equipmentType": "OTHER"
            },
            {
              "name": "M249 SAW",
              "equipmentType": "WEAPON"
            },
            {
              "name": "UH-60 Black Hawk",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "FN SCAR",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Handheld Radio",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "M113 APC",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Glock 19",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Blood Clotting Agent",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Field Telephone",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Tactical Antenna",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Glock 19",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Emergency Trauma Dressing",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Field Telephone",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Tactical Antenna",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Field Telephone",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "Glock 19",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Glock 19",
              "equipmentType": "WEAPON"
            },
            {
              "name": "M113 APC",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Antibiotic Pack",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Camouflage Netting",
              "equipmentType": "OTHER"
            },
            {
              "name": "M249 SAW",
              "equipmentType": "WEAPON"
            },
            {
              "name": "M4 Carbine",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Water Purification Unit",
              "equipmentType": "OTHER"
            },
            {
              "name": "Tactical Backpack",
              "equipmentType": "OTHER"
            },
            {
              "name": "Antibiotic Pack",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Blood Clotting Agent",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "AK-47",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Night Vision Goggles",
              "equipmentType": "OTHER"
            },
            {
              "name": "Satellite Phone",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "M113 APC",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "5.56mm NATO Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "Night Vision Goggles",
              "equipmentType": "OTHER"
            },
            {
              "name": "Blood Clotting Agent",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "M4 Carbine",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Antibiotic Pack",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Stryker",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "UH-60 Black Hawk",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "Climbing Gear",
              "equipmentType": "OTHER"
            },
            {
              "name": "Burn Dressing",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "AK-47",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Tactical Backpack",
              "equipmentType": "OTHER"
            },
            {
              "name": "Handheld Radio",
              "equipmentType": "COMMUNICATION"
            },
            {
              "name": "M16 Rifle",
              "equipmentType": "WEAPON"
            },
            {
              "name": "AK-47",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Burn Dressing",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "FN SCAR",
              "equipmentType": "WEAPON"
            },
            {
              "name": "LAV-25",
              "equipmentType": "VEHICLE"
            },
            {
              "name": "IV Kit",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "M9 Pistol",
              "equipmentType": "WEAPON"
            },
            {
              "name": "M4 Carbine",
              "equipmentType": "WEAPON"
            },
            {
              "name": "M249 SAW",
              "equipmentType": "WEAPON"
            },
            {
              "name": "Climbing Gear",
              "equipmentType": "OTHER"
            },
            {
              "name": "Combat First Aid Kit",
              "equipmentType": "MEDICAL"
            },
            {
              "name": "Incendiary Rounds",
              "equipmentType": "AMMUNITION"
            },
            {
              "name": "M113 APC",
              "equipmentType": "VEHICLE"
            }
          ]
    })
    console.log("Assets seeded")
}

seedAssets().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
});