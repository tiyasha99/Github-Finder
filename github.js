class Github {
  constructor() {
    this.client_id = '830338f2d724672643a0';
    this.client_secret = 'c206fe7c830c5ca5deacf24332f1fb173cb16320';
    this.repos_count=5;
    this.repos_sort= 'created: asc';
  }
  async getUser(user) {
    const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos= await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}