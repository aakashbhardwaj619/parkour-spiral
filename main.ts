/**
 * Parkour Spiral
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace parkour {
    //% block="create a parkour spiral || made of $blockType | with $levels levels"
    //% levels.defl=6
    //% blockType.defl=Block.NetherWartBlock
    //% expandableArgumentMode="toggle"
    //% blockType.fieldEditor="gridpicker"
    //% blockType.fieldOptions.width=340 blockType.fieldOptions.columns=8 blockType.fieldOptions.tooltips=true
    //% blockType.fieldOptions.tooltipsXOffset="20" blockType.fieldOptions.tooltipsYOffset="-20"
    //% blockType.fieldOptions.maxRows="8"
    //% blockType.fieldOptions.hasSearchBar=true
    //% blockType.fieldOptions.hideRect=true
    export function createParkourSpiral(blockType: Block = Block.NetherWartBlock, levels: number = 6) {
        let ns = 0
        let ew = 0
        let initialHeight = 5
        let gap = 2
        let height = initialHeight
        let currLevel = levels

        for (let index = 0; index < levels && currLevel > 0; index++) {
            for (let index2 = 0; index2 < currLevel; index2++) {
                createBlock(blockType, ew, height, ns)
                ns += gap
            }
            height += 1
            currLevel += 0 - 1
            ew += gap
            for (let index3 = 0; index3 < currLevel; index3++) {
                createBlock(blockType, ew, height, ns)
                ew += gap
            }
            height += 1
            ns += 0 - gap
            for (let index4 = 0; index4 < currLevel; index4++) {
                createBlock(blockType, ew, height, ns)
                ns += 0 - gap
            }
            height += 1
            ew += 0 - gap
            currLevel += 0 - 1
            for (let index5 = 0; index5 < currLevel; index5++) {
                createBlock(blockType, ew, height, ns)
                ew += 0 - gap
            }
            height += 1
        }
        blocks.fill(
            YELLOW_WOOL,
            pos(ew + 2, height - 2, ns + 2),
            pos(ew + 2, height - 2, ns + 2),
            FillOperation.Replace
        )
        player.teleport(pos(0, initialHeight + 1, 0))
        gameplay.title(mobs.target(LOCAL_PLAYER), "Parkour Spiral", "Let's play")
        gameplay.setGameMode(
            SURVIVAL,
            mobs.target(LOCAL_PLAYER)
        )
    }

    function createBlock(blockType: number, we: number, ud: number, ns: number) {
        blocks.fill(
            blockType,
            pos(we, ud, ns),
            pos(we, ud, ns),
            FillOperation.Replace
        )
    }

    function createPoolFence(fenceType: number, we: number, ud: number, ns: number, we2: number, ud2: number, ns2: number) {
        blocks.fill(
            fenceType,
            pos(we, ud, ns),
            pos(we2, ud2, ns2),
            FillOperation.Outline
        )
    }

    //% block="create a pool || filled with $poolType | of size $poolSize | and fence $fenceType"
    //% poolSize.defl=20
    //% poolType.defl=Block.Lava
    //% fenceType.defl=Block.RedNetherBrick
    //% expandableArgumentMode="toggle"
    //% poolType.fieldEditor="gridpicker"
    //% poolType.fieldOptions.width=340 poolType.fieldOptions.columns=8 poolType.fieldOptions.tooltips=true
    //% poolType.fieldOptions.tooltipsXOffset="20" poolType.fieldOptions.tooltipsYOffset="-20"
    //% poolType.fieldOptions.maxRows="8"
    //% poolType.fieldOptions.hasSearchBar=true
    //% poolType.fieldOptions.hideRect=true
    //% fenceType.fieldEditor="gridpicker"
    //% fenceType.fieldOptions.width=340 fenceType.fieldOptions.columns=8 fenceType.fieldOptions.tooltips=true
    //% fenceType.fieldOptions.tooltipsXOffset="20" fenceType.fieldOptions.tooltipsYOffset="-20"
    //% fenceType.fieldOptions.maxRows="8"
    //% fenceType.fieldOptions.hasSearchBar=true
    //% fenceType.fieldOptions.hideRect=true
    export function createPool(poolSize: number = 20, poolType: Block = Block.Lava, fenceType: Block = Block.RedNetherBrick) {
        let a = poolSize / 4;
        let b = (3 * poolSize) / 4;
        blocks.fill(
            poolType,
            pos(-a, -1, -a),
            pos(b, 0, b),
            FillOperation.Replace
        )
        blocks.fill(
            fenceType,
            pos(-a, -2, -a),
            pos(b, -2, b),
            FillOperation.Replace
        )
        createPoolFence(fenceType, -a, -2, -a, -a, 2, b);
        createPoolFence(fenceType, b, -2, -a, b, 2, b);
        createPoolFence(fenceType, -a, -2, -a, b, 2, -a);
        createPoolFence(fenceType, -a, -2, b, b, 2, b);
    }
}
