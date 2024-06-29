<template>
    <div>
		<el-form-item>
            <el-button type="primary" @click="openEdit" :disabled="!card">编辑</el-button>
        </el-form-item>
        <el-dialog v-model="editDialogVisible" title="编辑卡段">
			<el-form :model="editCard">
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="卡段编号">
							<el-input v-model="editCard.card_id" style="width: 100%;" disabled></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="卡段名称">
							<el-input v-model="editCard.card_name" style="width: 100%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="12">
						<el-form-item label="卡段状态">
							<el-select v-model="editCard.card_status" placeholder="请选择状态">
								<el-option label="启用" value="1"></el-option>
								<el-option label="禁用" value="0"></el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="分配额度">
							<el-input v-model="editCard.left_balance" style="width: 100%;"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
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
        card: {
            type: Object,
            required: false
        }
    },
    data() {
		return {
			editDialogVisible: false,
			editCard: {
				card_id: '',
				card_name: '',
				card_status: null,
				left_balance: ''
			}
    	};
  	},
    watch: {
        card: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.editCard = { ...newVal };
                }
            }
        }
    },
    methods: {
		openEdit() {
			if (this.card) {
                this.editDialogVisible = true;
            } else {
                this.$message.error('请先选择一个卡段');
            }
		},
		clear() {
			this.editCard.card_name = '';
            this.editCard.card_status = '';
            this.editCard.left_balance = '';
		},
		async saveEdit() {
			try {
				const token = localStorage.getItem('token');
				const response = await axios.put('http://localhost:5000/editCard', this.editCard, {
					headers: { Authorization: `Bearer ${token}` }
				});
				console.log(response);
                if (response.data.status === 1) {
                    this.$message.success('修改成功');
                    this.editDialogVisible = false;
                    this.clear();
                    this.$emit('update-cards');
                } else {
                    this.$message.error('修改失败');
                }
            } catch (error) {
                console.error('修改出错', error);
                this.$message.error('修改出错，请重试');
            }
		}
	}
}
</script>

<style scoped>
.dialog-footer {
    text-align: center;
}
</style>
