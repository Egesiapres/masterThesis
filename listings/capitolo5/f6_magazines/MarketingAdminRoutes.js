<DashboardMarketingAdmin>
  <Suspense fallback={<Loading />}>
    <Switch>
      {/* [...] */}
      <Route path="/magazine">
        <PageMagazines />
      </Route>
      {/* [...] */}
    </Switch>
  </Suspense>
</DashboardMarketingAdmin>;