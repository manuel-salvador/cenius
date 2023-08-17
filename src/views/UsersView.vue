<template>
  <MainLayout>
    <h2 class="page-title">USERS</h2>
    <div class="container">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-xs-6">
                <h2>Manager <b>Admin</b></h2>
              </div>

              <div class="col-xs-6">
                <v-btn color="white" class="btn btn-success" prepend-icon="mdi-plus">
                  <a href="#addEmployeeModal" data-toggle="modal">
                    <span>Add New Employee</span>
                  </a>
                </v-btn>
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label for="selectAll"></label>
                  </span>
                </th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Rol</th>
                <th>User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                    <label for="checkbox1"></label>
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse1"
                  >
                    Thomas
                  </button>
                </td>
                <td>Laiton</td>
                <td>Developer</td>
                <td>Internal User</td>
                <td>
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#editEmployeeModal" class="edit" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a
                    ></v-btn
                  >
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Delete"
                        >&#xE872;</i
                      ></a
                    ></v-btn
                  >
                </td>
              </tr>
              <tr>
                <td colspan="6" class="table__drop-down">
                  <div id="collapse1" class="collapse">
                    <p>Email: thomaslaiton@gmail.com</p>
                    <p>Description: 89 Chiaroscuro Rd, Portland, USA</p>
                    <p>Phone: (171) 555-2222</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox2" name="options[]" value="1" />
                    <label for="checkbox2"></label>
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse2"
                  >
                    Dominique
                  </button>
                </td>
                <td>Perrier</td>
                <td>Tester</td>
                <td>External User</td>
                <td>
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#editEmployeeModal" class="edit" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a
                    ></v-btn
                  >
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Delete"
                        >&#xE872;</i
                      ></a
                    ></v-btn
                  >
                </td>
              </tr>
              <tr>
                <td colspan="6" class="table__drop-down">
                  <div id="collapse2" class="collapse">
                    <p>Email: dominiqueperrier@gmail.com</p>
                    <p>Description: Obere Str. 57, Berlin, Germany</p>
                    <p>Phone: (313) 555-5735</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                    <label for="checkbox3"></label>
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse3"
                  >
                    Maria
                  </button>
                </td>
                <td>Dolores</td>
                <td>Analyst</td>
                <td>External User</td>
                <td>
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#editEmployeeModal" class="edit" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a
                    ></v-btn
                  >
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Delete"
                        >&#xE872;</i
                      ></a
                    ></v-btn
                  >
                </td>
              </tr>
              <tr>
                <td colspan="6" class="table__drop-down">
                  <div id="collapse3" class="collapse">
                    <p>Email: mariadolores@gmail.com</p>
                    <p>Description: 25, rue Lauriston, Paris, France</p>
                    <p>Phone: (503) 555-9931</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                    <label for="checkbox4"></label>
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse4"
                  >
                    Frank
                  </button>
                </td>
                <td>Thompson</td>
                <td>Developer</td>
                <td>Internal User</td>
                <td>
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#editEmployeeModal" class="edit" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a
                    ></v-btn
                  >
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Delete"
                        >&#xE872;</i
                      ></a
                    ></v-btn
                  >
                </td>
              </tr>
              <tr>
                <td colspan="6" class="table__drop-down">
                  <div id="collapse4" class="collapse">
                    <p>Email: frankthompson@gmail.com</p>
                    <p>Description: C/ Araquil, 67, Madrid, Spain</p>
                    <p>Phone: (204) 619-5731</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                    <label for="checkbox5"></label>
                  </span>
                </td>
                <td>
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse5"
                  >
                    Wilson
                  </button>
                </td>
                <td>Blank</td>
                <td>Tester</td>
                <td>Internal User</td>
                <td>
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#editEmployeeModal" class="edit" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a
                    ></v-btn
                  >
                  <v-btn icon="$vuetify" variant="plain"
                    ><a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                      ><i class="material-icons" data-toggle="tooltip" title="Delete"
                        >&#xE872;</i
                      ></a
                    ></v-btn
                  >
                </td>
              </tr>
              <tr>
                <td colspan="6" class="table__drop-down">
                  <div id="collapse5" class="collapse">
                    <p><b>Email:</b> wilsonblank@gmail.com</p>
                    <p><b>Description:</b> Via Monte Bianco 34, Turin, Italy</p>
                    <p><b>Phone:</b> (480) 631-2097</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="clearfix">
            <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
            <v-pagination :length="5"></v-pagination>
          </div>
        </div>
      </div>
    </div>
    <div id="addEmployeeModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Add Employee</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Rol</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>User</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" required></textarea>
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" required />
              </div>
            </div>
            <div class="modal-footer">
              <v-btn type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"
                >Cancel</v-btn
              >
              <v-btn type="submit" class="btn btn-success" value="Add">Add</v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="editEmployeeModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Edit Employee</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Rol</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>User</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" required></textarea>
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" required />
              </div>
            </div>
            <div class="modal-footer">
              <v-btn type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"
                >Cancel</v-btn
              >
              <v-btn type="submit" class="btn btn-info" value="Save">Save</v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="deleteEmployeeModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Delete Employee</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                &times;
              </button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete these Records?</p>
              <p class="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div class="modal-footer">
              <v-btn type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"
                >Cancel</v-btn
              >
              <v-btn type="submit" class="btn btn-danger" value="Delete">Delete</v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue'
</script>

<style>
.page-title {
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #000;
}
.container {
  padding: 0;
  margin: -40px 0;
  width: 100%;
}
body {
  color: #1d1d1d;
  background: #f5f5f5;
  font-family: 'Varela Round', sans-serif;
  font-size: 13px;
}
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  min-width: 1000px;
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table__drop-down div {
  margin: 10px 70px;
}
.table__drop-down div p {
  color: #000;
  font-size: 15px;
}
.table-title {
  padding-bottom: 15px;
  background: #5a89c2;
  color: #fff;
  padding: 16px 30px;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
.table-title .btn {
  color: #fff;
  float: right;
  font-size: 13px;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 1px;
  vertical-align: middle;
  font-size: 15px;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
  outline: none !important;
}
table.table td a:hover {
  color: #2196f3;
}
table.table td a.edit {
  color: #ffc107;
}
table.table td a.delete {
  color: #f44336;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a,
.pagination li.active a.page-link {
  background: #03a9f4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
.custom-checkbox {
  position: relative;
}
.custom-checkbox input[type='checkbox'] {
  opacity: 0;
  position: absolute;
  margin: 5px 0 0 3px;
  z-index: 9;
}
.custom-checkbox label:before {
  width: 18px;
  height: 18px;
}
.custom-checkbox label:before {
  content: '';
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  background: white;
  border: 1px solid #bbb;
  border-radius: 2px;
  box-sizing: border-box;
  z-index: 2;
}
.custom-checkbox input[type='checkbox']:checked + label:after {
  content: '';
  position: absolute;
  left: 6px;
  top: 3px;
  width: 6px;
  height: 11px;
  border: solid #000;
  border-width: 0 3px 3px 0;
  transform: inherit;
  z-index: 3;
  transform: rotateZ(45deg);
}
.custom-checkbox input[type='checkbox']:checked + label:before {
  border-color: #03a9f4;
  background: #03a9f4;
}
.custom-checkbox input[type='checkbox']:checked + label:after {
  border-color: #fff;
}
.custom-checkbox input[type='checkbox']:disabled + label:before {
  color: #b8b8b8;
  cursor: auto;
  box-shadow: none;
  background: #ddd;
}
.modal .modal-dialog {
  max-width: 400px;
}
.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
  padding: 20px 30px;
}
.modal .modal-content {
  border-radius: 3px;
}
.modal .modal-footer {
  background: #ecf0f1;
  border-radius: 0 0 3px 3px;
}
.modal .modal-title {
  display: inline-block;
}
.modal .form-control {
  border-radius: 2px;
  box-shadow: none;
  border-color: #dddddd;
}
.modal textarea.form-control {
  resize: vertical;
}
.modal .btn {
  border-radius: 2px;
  min-width: 100px;
}
.modal form label {
  font-weight: normal;
}
</style>
