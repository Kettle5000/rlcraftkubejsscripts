execute as @s run execute at @s run summon area_effect_cloud ~ ~1 ~ {Tags:["Burst"],Duration:10}
execute at @e[tag=Burst,type=area_effect_cloud] run particle minecraft:electric_spark ~ ~1 ~ 0.2 0.2 0.2 0.2 100 force
execute at @e[tag=Burst,type=area_effect_cloud] run particle minecraft:crit ~ ~0.25 ~ 0.2 0.2 0.2 0.3 25 force
execute at @e[tag=Burst,type=area_effect_cloud] run particle soul_fire_flame ~ ~1.75 ~ 0.2 0.2 0.2 0.2 100 force
execute at @e[tag=Burst,type=area_effect_cloud] run effect give @e[type=#magic:undead,distance=..7,tag=!lightningdragon] instant_health 1 1
execute at @e[tag=Burst,type=area_effect_cloud] run effect give @e[type=!#magic:undead,distance=..7,tag=!lightningdragon] instant_damage 1 1
execute at @e[tag=Burst,type=area_effect_cloud] run effect give @e[type=!#magic:undead,distance=..7,tag=!lightningdragon] instant_damage 30 0 true