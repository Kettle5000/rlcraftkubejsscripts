
#execute as @e[type=area_effect_cloud,tag=FLD] at @s run particle minecraft:crit ~ ~ ~ 0.2 0.2 0.2 0.04 4
#execute as @e[type=area_effect_cloud,tag=FLD] at @s run particle minecraft:electric_spark ~ ~ ~ 0.5 0.4 0.1 1 4
#execute as @e[type=area_effect_cloud,tag=FLD] at @s run particle minecraft:electric_spark ~ ~ ~ 0.8 0.8 0.8 0.05 15
execute at @e[tag=FLD,type=area_effect_cloud,limit=2] run summon lightning_bolt ~ ~ ~

