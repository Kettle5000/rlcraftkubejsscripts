execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP1] ^-0.2 ^1 ^1 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP2] ^0.2 ^1 ^2 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP3] ^-0.3 ^1 ^3 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP4] ^-0.4 ^1 ^4 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP5] ^0.5 ^1 ^5 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP6] ^-0.55 ^1 ^6 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP7] ^-0.6 ^1.25 ^7 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP8] ^0.65 ^1.25 ^9 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP9] ^-0.7 ^1.25 ^10 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP10] ^0.8 ^1.25 ^12 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP11] ^-0.8 ^1.25 ^13 facing entity @s
execute as @s at @s run tp @e[type=area_effect_cloud,tag=FFLP12] ^0.85 ^1.25 ^14 facing entity @s
#execute as @e[type=area_effect_cloud,tag=FLD] at @s run particle minecraft:crit ~ ~ ~ 0.2 0.2 0.2 0.04 4
#execute as @e[type=area_effect_cloud,tag=FLD] at @s run particle minecraft:electric_spark ~ ~ ~ 0.5 0.4 0.1 1 4
#execute as @e[type=area_effect_cloud,tag=FLD] at @s run particle minecraft:electric_spark ~ ~ ~ 0.8 0.8 0.8 0.05 15
#execute at @e[tag=FLD,type=area_effect_cloud] run effect give @e[type=#minecraft:undead,distance=..2,tag=!lightningdragon] instant_health 1 1 true
#execute at @e[tag=FLD,type=area_effect_cloud] run effect give @e[type=!#minecraft:undead,distance=..2,tag=!lightningdragon] instant_damage 20 0 true
#execute at @e[tag=FLD,type=area_effect_cloud] run effect give @e[distance=..2,tag=!lightningdragon] slowness 1 1 true
