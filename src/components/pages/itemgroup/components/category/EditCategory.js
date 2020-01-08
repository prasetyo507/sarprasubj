import React, { Component } from "react";
import { FreeText, Option } from "../../../../common/FormGroup";
import Modal from "../../../../common/Modal";
import { dispatchEditKategori } from "../../store/actions/itemgroupAction";
import { connect } from "react-redux";

class EditCategory extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    let fillCategory = {
      id: 1,
      name: event.target.name.value,
      grup: event.target.optgrup.value
    }
    await this.props.submitKategori(fillCategory.id, fillCategory);
    /* Toast */
    var toast = document.getElementById("snackbar3");
    /* Show Toast */
    toast.className = "show";
    setTimeout(() => {
      /* hide Toast after 2 seconds */
      toast.className = toast.className.replace("show", "");
      this.props.hide();
    }, 2000);
  }
  render() {
    const param = this.props.idCategory;
    if (param) {
      var getEditCategory = this.props.editKategori.find(kategori => {
        return kategori.id === param;
      });
      var forms1 = [
        {
          lableFor: "name",
          lableName: "Nama",
          inputAttr: {
            type: "text",
            placeholder: "Nama Kategori Barang",
            className: "form-control",
            name: "name",
            required: true,
            defaultValue: getEditCategory.name
          }
        }
      ];
      var radiobtn = [
        {
          optionName: "Grup Barang",
          optionList: [
            {
              optionLable: "Habis Pakai",
              inputAttr: {
                type: "radio",
                name: "optgrup",
                value: "CONSUMABLE",
                required: true,
                defaultChecked: getEditCategory.grup === "CONSUMABLE" ? true : false
              }
            },
            {
              optionLable: "Tidak Habis Pakai",
              inputAttr: {
                type: "radio",
                name: "optgrup",
                value: "NONCONSUMABLE",
                required: true,
                defaultChecked: getEditCategory.grup === "NONCONSUMABLE" ? true : false
              }
            }
          ]
        }
      ]
      const save = (
        <button type="submit" className="btn btn-primary pull-right">
          Ubah
      </button>
      );
      const close = (
        <button
          type="button"
          className="btn btn-default pull-left"
          data-dismiss="modal"
        >
          Keluar
      </button>
      );
      return (
        <form onSubmit={this.handleSubmit} >
          <Modal title="Ubah Kategori Barang" save={save} close={close}>
            <div className="col-md-12">
              <FreeText formProp={forms1} />
              <Option formProp={radiobtn} />
            </div>
            <div id="snackbar3">Berhasil...</div>
          </Modal>
        </form>
      );
    } else { return false }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    submitKategori: (index, kategoriData) =>
      dispatch(dispatchEditKategori(index, kategoriData))
  };
};
const mapStateToProps = state => {
  return {
    editKategori: state.kategori.kategoriForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCategory);
