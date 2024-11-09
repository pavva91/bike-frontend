<template>
  <footer class="rounded-lg shadow m-4">
    <div class="footer-divs">
      <div
        class="w-full max-w-screen-xl mx-auto p-4 md:py-8 sm:flex sm:items-center sm:justify-between"
      >
        <div>
          <img src="@/assets/bikeservice.png" class="h-8" alt="Enterprise Logo" />
        </div>

        <div>
          <p>BIKE SERVICE CORINALDO<br />VIA NEVOLA, 5<br />60013 CORINALDO (AN)</p>
        </div>

        <div>
          <p>
            <a href="mailto:bikeservicecorinaldo@gmail.com">bikeservicecorinaldo@gmail.com</a
            ><br />T: +39 071 67 697
          </p>
        </div>

        <div>
          <div>
            <!-- TODO: copy this approach to policies -->
            <a
              href="https://www.iubenda.com/privacy-policy/99051779/cookie-policy"
              class="hover:underline me-4 md:me-6"
              title="Cookie Policy "
              >Cookie Policy</a
            >
          </div>
          <div>
            <!-- TODO: copy this approach to policies -->
            <a
              href="https://www.iubenda.com/privacy-policy/99051779"
              class="hover:underline me-4 md:me-6"
              title="Privacy Policy "
              >Privacy Policy</a
            >
          </div>
        </div>
      </div>

      <div class="footer-divs">
        <div>
          <p><strong>© Bike Service |&nbsp;</strong>P.Iva 02803080429</p>
        </div>
        <div>
          <a href="#">
            <img
              src="https://bikeservicecorinaldo.it/wp-content/uploads/2023/11/firmasitiTDS.png"
              class="h-8"
              alt="Enterprise Logo"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
.footer-divs div {
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
}

.footer-divs img {
  margin-left: auto;
  margin-right: auto;
}
</style>
