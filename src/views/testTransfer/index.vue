<template>
    <div>

        <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
        <div style="text-align: center">
            <el-transfer
                    style="text-align: left; display: inline-block"
                    v-model="value4"
                    filterable
                    :left-default-checked="[2, 3]"
                    :right-default-checked="[1]"
                    :titles="['Source', 'Target']"
                    :button-texts="['到左边', '到右边']"
                    :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
                    @change="handleChange"
                    :data="data">
                <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
                <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
                <el-button class="transfer-footer" slot="right-footer" size="small" @click="handleUUU">操作</el-button>
            </el-transfer>
        </div>


        <div class="contact-item-content ">
            <p><span style="color: #375f23;"><span style="font-size: 10pt; font-family: 微软雅黑; color: #000000;"><i
                    class="el-icon-user-solid"
                    style="color: #ccc; font-size: 16px; margin-right: 6px;"></i>王乃晶 Emma<br/></span></span><span
                    style="font-size: 10pt; font-family: 微软雅黑;"><i class="el-icon-phone"
                                                                   style="color: #ccc; font-size: 16px; margin-right: 6px;"></i>18100199512</span>
            </p>
            <p><span style="font-size: 10pt; font-family: 微软雅黑;"><a href="mailto:wangnaijing@hikvision.com.cn"
                                                                    target="_blank" rel="noopener"><i
                    class="h-icon-email-fill" style="color: #ccc; font-size: 16px; margin-right: 6px;"></i></a><a
                    href="mailto:wangnaijing@hikvision.com.cn" target="_blank" rel="noopener">wangnaijing@hikvision.com.cn</a><br/><br/></span>
            </p>
            <p><span style="font-size: 10pt; font-family: 微软雅黑;"><span style="color: #375f23;"><span
                    style="font-size: 10pt; font-family: 微软雅黑; color: #000000;"></span><span style="color: #000000;"><i
                    class="el-icon-user-solid" style="color: #ccc; font-size: 16px; margin-right: 6px;"></i>华程萍 Claire&nbsp; </span></span><br/><i
                    class="el-icon-phone"
                    style="color: #ccc; font-size: 16px; margin-right: 6px;"></i>18969195673</span></p>
            <p><span style="font-size: 10pt; font-family: 微软雅黑;"><a href="mailto:wangnaijing@hikvision.com.cn"
                                                                    target="_blank" rel="noopener"><i
                    class="h-icon-email-fill" style="color: #ccc; font-size: 16px; margin-right: 6px;"></i></a><a
                    href="mailto:huachengping@hikvision.com.cn" target="_blank" rel="noopener">huachengping@hikvision.com.cn</a><br/></span>
            </p>
        </div>


        <p><span style="color: #375f23;"><strong><span style="font-size: 10pt; font-family: 微软雅黑;">

        </span></strong><span style="font-size: 10pt; font-family: 微软雅黑;"> </span><span
                style="font-size: 10pt; font-family: 微软雅黑; color: #000000;"><i
                class="el-icon-user-solid"
                style="color: #ccc; font-size: 16px; margin-right: 6px;"></i>Emma</span></span></p>
        <p><span style="font-size: 10pt; font-family: 微软雅黑;"><i class="el-icon-phone"
                                                                style="color: #ccc; font-size: 16px; margin-right: 6px;"></i>18100199512</span>
        </p>
        <p><span style="font-size: 10pt; font-family: 微软雅黑;"><a href="mailto:wangnaijing@hikvision.com.cn"
                                                                target="_blank" rel="noopener"><i
                class="h-icon-email-fill" style="color: #ccc; font-size: 16px; margin-right: 6px;"></i></a><a
                href="mailto:wangnaijing@hikvision.com.cn" target="_blank"
                rel="noopener">wangnaijing@hikvision.com.cn</a></span></p>
        <p>&nbsp;</p>
        <p><span style="font-size: 10pt; font-family: 微软雅黑;"><span style="color: #375f23;"><strong><i
                class="el-icon-user-solid" style="color: #ccc; font-size: 16px; margin-right: 6px;"></i></strong><span
                style="color: #000000;">;Claire&nbsp; </span></span><br/><i class="el-icon-phone"
                                                                            style="color: #ccc; font-size: 16px; margin-right: 6px;"></i>18969195673</span>
        </p>
        <p><span style="font-size: 10pt; font-family: 微软雅黑;"><a href="mailto:wangnaijing@hikvision.com.cn"
                                                                target="_blank" rel="noopener"><i
                class="h-icon-email-fill" style="color: #ccc; font-size: 16px; margin-right: 6px;"></i></a><a
                href="mailto:huachengping@hikvision.com.cn" target="_blank"
                rel="noopener">huachengping@hikvision.com.cn</a></span></p>
        <p><span style="font-family: 微软雅黑; font-size: 10pt;">&nbsp;<br/></span></p>
        <p style="margin: 0cm 0cm 0pt;"><span style="font-size: 10pt;"><strong><span lang="EN-US"
                                                                                     style="color: #169179; font-family: '微软雅黑';">Public Consultation Email</span></strong></span>
        </p>
        <p style="margin: 0cm 0cm 0pt;"><span lang="EN-US" style="font-family: '微软雅黑'; font-size: 10pt;">Intranet: hikvisa@hikvision.com.cn</span>
        </p>
        <p style="margin: 0cm 0cm 0pt;"><span lang="EN-US" style="font-family: '微软雅黑'; font-size: 10pt;">Extranet: hikvisa@hikvision.com</span>
        </p>
    </div>
</template>

<style>
    .transfer-footer {
        margin-left: 20px;
        padding: 6px 5px;
    }
</style>

<script>
    export default {
        data() {
            const generateData = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        key: i,
                        label: `备选项 ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            return {
                data: generateData(),
                value: [1],
                value4: [1],
                renderFunc(h, option) {
                    return
                <
                    span > {option.key
                }
                    -{option.label
                }<
                    /span>;
                }
            };
        },

        methods: {
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
            },
            handleUUU() {
                this.value4 = [2, 1]
                console.log(this.value4)
            }
        }
    };
</script>
