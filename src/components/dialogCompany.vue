<template>
<el-dialog title="选择公司" :visible.sync="dialogVisible" :close-on-click-modal="false" :loading="dialogLoading">
  <el-form :model="addForm" label-width="0px" :rules="addFormRules" ref="addForm">
    <el-form-item>
      <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
    </el-form-item>
    <!-- <el-form-item label="姓名" prop="name"> -->
    <el-form-item>
      <el-tree class="filter-tree" :data="companyTreeData" :props="defaultProps" @node-click="handleNodeClick" default-expand-all :filter-node-method="filterNode" ref="tree">
      </el-tree>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click.native="closeDialog()">取消</el-button>
    <el-button type="primary" @click.native="addSubmit" :loading="addLoading">确定</el-button>
  </div>
</el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkedNode: '',
      defaultProps: {
        children: 'children',
        label: 'orgname'
      },
      dialogLoading: false,
      companyTreeData: [],
      filterText: '',
      filters: {
        name: ''
      },
      addLoading: false,
      addFormRules: {
        name: [{
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        }]
      },
      //新增界面数据
      addForm: {
        name: '',
        sex: -1,
        age: 0,
        birth: '',
        addr: ''
      }
    }
  },
  mounted() {
    this.dialogLoading = true;
    this.initTreeAction();
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      console.log(value, data);
      return data.orgname.indexOf(value) !== -1;
    },
    initTreeAction() {
      this.$http.post(this.HOST + "/PC/InitORGTreeByUser.do", {
        //
      }, {
        emulateJSON: true
      }).then(function(response) {
        if (response.data.success) {
          this.companyTreeData = response.data.data;
        }
        this.dialogLoading = false;
      })
    },
    handleNodeClick(data) {
      this.checkedNode = data;
    },
    closeDialog() {
      this.$emit('closeDialog', '');
    },
    addSubmit: function() {
      if (this.checkedNode=='') {
        this.$message({
          message: '请选择公司',
          type: 'warning'
        });
        return;
      }
      this.addLoading = true;
      this.addLoading = false;
      console.log(this.checkedNode);
      this.$store.dispatch.saveCompanyTreeSelectAction(this.checkedNode);
      this.$emit('handleNodeClick', this.checkedNode);
      // let para = Object.assign({}, this.addForm);
      // para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
    }
  }

}
</script>

<style scoped>

</style>
