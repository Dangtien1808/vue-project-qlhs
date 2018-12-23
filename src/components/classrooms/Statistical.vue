<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">Kết Quả Học Tập Của Lớp</h3>
      <!-- <div class="box-tools pull-right"></div> -->
    </div>
    <div class="box-body">
      <div class="table-responsive">
        <table class="table no-margin">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Item</th>
              <th>Status</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="pages/examples/invoice.html">OR9842</a>
              </td>
              <td>Call of Duty IV</td>
              <td>
                <span class="label label-success">Shipped</span>
              </td>
              <td>
                <div
                  data-color="#00a65a"
                  data-height="20"
                  class="sparkbar"
                >90,80,90,-70,61,-83,63</div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="pages/examples/invoice.html">OR1848</a>
              </td>
              <td>Samsung Smart TV</td>
              <td>
                <span class="label label-warning">Pending</span>
              </td>
              <td>
                <div
                  data-color="#f39c12"
                  data-height="20"
                  class="sparkbar"
                >90,80,-90,70,61,-83,68</div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="pages/examples/invoice.html">OR7429</a>
              </td>
              <td>iPhone 6 Plus</td>
              <td>
                <span class="label label-danger">Delivered</span>
              </td>
              <td>
                <div
                  data-color="#f56954"
                  data-height="20"
                  class="sparkbar"
                >90,-80,90,70,-61,83,63</div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="pages/examples/invoice.html">OR7429</a>
              </td>
              <td>Samsung Smart TV</td>
              <td>
                <span class="label label-info">Processing</span>
              </td>
              <td>
                <div
                  data-color="#00c0ef"
                  data-height="20"
                  class="sparkbar"
                >90,80,-90,70,-61,83,63</div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="pages/examples/invoice.html">OR1848</a>
              </td>
              <td>Samsung Smart TV</td>
              <td>
                <span class="label label-warning">Pending</span>
              </td>
              <td>
                <div
                  data-color="#f39c12"
                  data-height="20"
                  class="sparkbar"
                >90,80,-90,70,61,-83,68</div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="pages/examples/invoice.html">OR7429</a>
              </td>
              <td>iPhone 6 Plus</td>
              <td>
                <span class="label label-danger">Delivered</span>
              </td>
              <td>
                <div
                  data-color="#f56954"
                  data-height="20"
                  class="sparkbar"
                >90,-80,90,70,-61,83,63</div>
              </td>
            </tr>
            <tr>
              <td>
                <a href="pages/examples/invoice.html">OR9842</a>
              </td>
              <td>Call of Duty IV</td>
              <td>
                <span class="label label-success">Shipped</span>
              </td>
              <td>
                <div
                  data-color="#00a65a"
                  data-height="20"
                  class="sparkbar"
                >90,80,90,-70,61,-83,63</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false
    };
  },
  mounted() {},
  methods: {}
};
</script>
