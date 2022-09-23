/**
 * Parkour Spiral
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace parkour {
    //% block="Create Parkour Spiral"
    export function createParkourSpiral() {
        let initHeight = 0
        let x = 0
        let y = 0
        let height = 0
        let levels = 0
        let currLevel = 0
        let gap = 0
        gameplay.title(mobs.target(LOCAL_PLAYER), "Parkour Spiral", "Let's play")
        x = 0
        y = 0
        height = 5
        initHeight = height
        levels = 6
        currLevel = levels
        gap = 2
        for (let index = 0; index < levels && currLevel > 0; index++) {
            for (let index2 = 0; index2 < currLevel; index2++) {
                blocks.fill(
                    NETHER_WART_BLOCK,
                    pos(y, height, x),
                    pos(y, height, x),
                    FillOperation.Replace
                )
                x += gap
            }
            height += 1
            currLevel += 0 - 1
            y += gap
            for (let index3 = 0; index3 < currLevel; index3++) {
                blocks.fill(
                    NETHER_WART_BLOCK,
                    pos(y, height, x),
                    pos(y, height, x),
                    FillOperation.Replace
                )
                y += gap
            }
            height += 1
            x += 0 - gap
            for (let index4 = 0; index4 < currLevel; index4++) {
                blocks.fill(
                    NETHER_WART_BLOCK,
                    pos(y, height, x),
                    pos(y, height, x),
                    FillOperation.Replace
                )
                x += 0 - gap
            }
            height += 1
            y += 0 - gap
            currLevel += 0 - 1
            for (let index5 = 0; index5 < currLevel; index5++) {
                blocks.fill(
                    NETHER_WART_BLOCK,
                    pos(y, height, x),
                    pos(y, height, x),
                    FillOperation.Replace
                )
                y += 0 - gap
            }
            height += 1
        }
        blocks.fill(
            YELLOW_WOOL,
            pos(y + 2, height - 2, x + 2),
            pos(y + 2, height - 2, x + 2),
            FillOperation.Replace
        )
        blocks.fill(
            LAVA,
            pos(-5, -1, -5),
            pos(15, -1, 15),
            FillOperation.Replace
        )
        player.teleport(pos(0, initHeight + 1, 0))
        gameplay.setGameMode(
            SURVIVAL,
            mobs.target(LOCAL_PLAYER)
        )
    }
}