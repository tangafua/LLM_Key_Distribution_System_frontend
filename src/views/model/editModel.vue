<template>
    <div>
		<el-form-item>
            <el-button type="primary" @click="openEdit">修改</el-button>
        </el-form-item>
        <el-dialog v-model="editDialogVisible" title="修改模型">
			<el-form :model="editModel">
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="模型编号">
							<el-input v-model="editModel.id" style="width: 80%;"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="模型名称">
							<el-input v-model="editModel.name" style="width: 80%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
                <el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="模型状态">
							<el-select v-model="editModel.state" placeholder="请选择状态">
								<el-option label="启用" value="1"></el-option>
								<el-option label="禁用" value="0"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="模型价格">
							<el-input v-model="editModel.price" style="width: 100%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="模型描述">
					<el-input v-model="editModel.description" style="width: 100%;"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="clear">清空</el-button>
				<el-button type="primary" @click="editModel">保存</el-button>
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
                id: '',
				name: '',
				state: null,
				price: '',
				description: ''
            }
        };
    },
    watch: {
        tenant: {
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
                this.editModel = { ...this.model };
                this.editDialogVisible = true;
            } else {
                this.$message.error('请先选择一个模型');
            }
        },
        clear() {
            this.editModel = {
                id: '',
				name: '',
				state: null,
				price: '',
				description: ''
            };
        },
        async editModel() {
            this.$http.put("/model/update", this.editModel, {
                headers: {
                'Content-Type': 'application/json'
            }})
            .then((res) => {
                if (res.data.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    });
                        this.editDialogVisible = false;
                        this.clear();
                } else {
                    this.$message.error('修改失败');
                }
            })
            .catch((error) => {
                this.$message.error('修改出错，请重试');
            });
        }
    }
};
</script>
  
<style scoped>
.dialog-footer {
    text-align: center;
}
</style>