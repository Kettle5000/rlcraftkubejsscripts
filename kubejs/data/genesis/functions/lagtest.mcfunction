scoreboard players add @e[tag=fire] firetime 1
scoreboard players add lesslagger lesslag 1
execute if score lesslagger lesslag > lesslaggy lesslag run scoreboard players set lesslagger lesslag 0
execute as @e[tag=fire] if score @s firetime > fire_dummy firetime run kill @s