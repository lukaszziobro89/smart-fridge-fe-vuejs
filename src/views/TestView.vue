<template>
    <Sidebar/>

  <div class="layout-wrapper layout-content-navbar">
      <!-- Menu -->
      <Sidebar/>
      <!-- / Menu -->

      <!-- Layout container -->
      <div class="layout-page">

        <!-- Content wrapper -->
        <div class="content-wrapper">
          <!-- Content -->

          <div class="container-xxl flex-grow-1 container-p-y">

            <div class="row">

              <div class="navbar-nav align-items-center">
                <div class="nav-item d-flex align-items-center margin150top">
                  <h2>Add new fridge</h2>
                </div>
              </div>

<!--              <div class="navbar-nav align-items-center">-->
<!--                <div class="nav-item d-flex align-items-center">-->

                  <div class="card">
                    <div class="card-header d-flex align-items-center justify-content-between">
                      <h5 class="mb-0">Basic Layout</h5>
                      <small class="text-muted float-end">Default label</small>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label" for="basic-default-name">Name</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" id="basic-default-name" placeholder="John Doe" />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label" for="basic-default-company">Company</label>
                          <div class="col-sm-10">
                            <input
                                type="text"
                                class="form-control"
                                id="basic-default-company"
                                placeholder="ACME Inc."
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label" for="basic-default-email">Email</label>
                          <div class="col-sm-10">
                            <div class="input-group input-group-merge">
                              <input
                                  type="text"
                                  id="basic-default-email"
                                  class="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-default-email2"
                              />
                              <span class="input-group-text" id="basic-default-email2">@example.com</span>
                            </div>
                            <div class="form-text">You can use letters, numbers & periods</div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label" for="basic-default-phone">Phone No</label>
                          <div class="col-sm-10">
                            <input
                                type="text"
                                id="basic-default-phone"
                                class="form-control phone-mask"
                                placeholder="658 799 8941"
                                aria-label="658 799 8941"
                                aria-describedby="basic-default-phone"
                            />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-2 col-form-label" for="basic-default-message">Message</label>
                          <div class="col-sm-10">
                                <textarea
                                    id="basic-default-message"
                                    class="form-control"
                                    placeholder="Hi, Do you have a moment to talk Joe?"
                                    aria-label="Hi, Do you have a moment to talk Joe?"
                                    aria-describedby="basic-icon-default-message2"
                                ></textarea>
                          </div>
                        </div>
                        <div class="row justify-content-end">
                          <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
<!--                </div>-->
<!--              </div>-->


<!--              <div class="navbar-nav align-items-center">-->
<!--                <div class="nav-item d-flex align-items-center">-->
<!--                  <div class="card ">-->
<!--                    <div class="d-flex align-items-end row">-->
<!--                      <div class="col-sm-7">-->
<!--                        <div class="card-body">-->
<!--                          <h5 class="card-title text-primary">Congratulations John! 🎉</h5>-->
<!--                          <p class="mb-4">-->
<!--                            You have done <span class="fw-bold">72%</span> more sales today. Check your new badge in-->
<!--                            your profile.-->
<!--                          </p>-->

<!--                          <a href="javascript:;" class="btn btn-sm btn-outline-primary">View Badges</a>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="col-sm-5 text-center text-sm-left">-->
<!--                        <div class="card-body pb-0 px-0 px-md-4">-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

              <div class="col-6 col-md-4"></div>
            </div>

          </div>
          <!-- / Content -->

          <div class="content-backdrop fade"></div>
        </div>
        <!-- Content wrapper -->
      </div>
      <!-- / Layout page -->
  </div>

</template>

<script>
import Sidebar from "@/components/Sidebar";

export default {
  name: 'TestView',
  components: {
    Sidebar
  }
}
</script>

<style>

.margin150top{
  margin-top: 150px;
}

.margin150left{
  margin-left: 150px;

}.margin150right{
  margin-right: 150px;
}

</style>
