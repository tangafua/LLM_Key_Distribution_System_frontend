<template>
    <div>
        <el-button type="primary" @click="openEdit" :disabled="!model">修改</el-button>
        <el-dialog v-model="editDialogVisible" title="修改模型">
            <el-form :model="editModel" ref="editForm">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="模型编号">
                            <el-input v-model="editModel.model_id" :disabled="true"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="模型名称">
                            <el-input v-model="editModel.model_name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="模型状态">
                            <el-select v-model="editModel.model_status" placeholder="请选择状态">
                                <el-option label="启用" value="1"></el-option>
                                <el-option label="禁用" value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="模型价格">
                            <el-input v-model="editModel.model_price"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="模型描述">
                    <el-input type="textarea" v-model="editModel.model_description"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="clear">清空</el-button>
                <el-button type="primary" @click="saveEdit">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        model: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editDialogVisible: false,
            editModel: {
                model_id: '',
                model_name: '',
                model_status: '',
                model_price: '',
                model_description: ''
            }
        };
    },
    watch: {
        model: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.editModel = { ...newVal };
                }
            }
        }
    },
    methods: {
        openEdit() {
            if (this.model) {
                this.editDialogVisible = true;
            } else {
                this.$message.error('请先选择一个模型');
            }
        },
        clear() {
            this.editModel.model_name = '';
            this.editModel.model_status = '';
            this.editModel.model_price = '';
            this.editModel.model_description = '';
        },
        async saveEdit() {
            try {
                const response = await axios.put('http://localhost:5000/admin_editModel', this.editModel);
                if (response.data.status === 1) {
                    this.$message.success('修改成功');
                    this.editDialogVisible = false;
                    this.clear();
                } else {
                    this.$message.error('修改失败');
                }
            } catch (error) {
                console.error('修改出错', error);
                this.$message.error('修改出错，请重试');
            }
        }
    }
};
</script>

<style scoped>
.dialog-footer {
    text-align: center;
}
</style>
