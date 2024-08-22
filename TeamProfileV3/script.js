const profiles = {  // detailed description
    member1: {
        name: 'Ronnie Aviles',
        image: 'image/Ronnie.JPG',
        description: 'Ronnie is an integral member of our team with expertise in Robotics. He has contributed to this website project as our Leader. Outside of work, Ronnie enjoys online games and sports.',
        github: 'https://github.com/ronssaaviles',
        linkedin: 'https://www.linkedin.com/in/ronnie-aviles-55a696322/',
        facebook: 'https://www.facebook.com/ronss.2003'
    },
    member2: {
        name: 'Covie Marfil',
        image: 'image/Covie.JPG',
        description: 'Covie specializes in Web Development. His contributions to this website project are noteworthy. Outside of work, Covie enjoys Photography and App development.',
        github: 'https://github.com/Marfil-Covie',
        linkedin: 'https://www.linkedin.com/in/covie-marfil-367484322/',
        facebook: 'https://www.facebook.com/Covie-Marfil/'
    },
    member3: {
        name: 'Jayve Arenas',
        image: 'image/Arenas.JPG',
        description: 'Jayve is known for App Development. He has a strong background in Programming. In his free time, Jayve likes to play sports and online games.',
        github: 'https://github.com/Jayve23',
        linkedin: 'www.linkedin.com/in/jayve-arenas-5013332b6',
        facebook: 'https://www.facebook.com/jabu.arenas.7'
    },
    member4: {
        name: 'Christian Casera',
        image: 'image/Casera.JPG',
        description: 'Christian is a key player in our team with skills in Database Management. His involvement in website project has been invaluable. Christian’s hobbies include App and System Development.',
        github: 'https://github.com/Christian-Casera',
        linkedin: 'https://www.linkedin.com/in/john-casera-072486322/',
        facebook: 'https://www.facebook.com/johnchristian.casera'
    },
    member5: {
        name: 'Yuan Erguiza',
        image: 'image/Yuan.JPG',
        description: 'Yuan brings a wealth of experience in Programming. His work on this website project has been impressive. Yuan enjoys Robotics and Data Mangement in his spare time.',
        github: 'https://github.com/Yuan-Erguiza',
        linkedin: 'https://www.linkedin.com/in/yuan-erguiza-722ab6322/',
        facebook: 'https://www.facebook.com/yuan.arguiza'
    }
};

let currentFocus = null;

function showProfile(memberId) {
    const member = document.getElementById(memberId);
    
    // pang reset ng focus at blur sa mg picture
    if (currentFocus === memberId) {
        document.querySelectorAll('.team-member').forEach(member => {
            member.classList.remove('active', 'inactive');
        });
        document.getElementById('profile-section').classList.remove('visible');
        currentFocus = null;
        return;
    }

    // eto para lumabas yung desription dipende kung sino yung clinick
    const profile = profiles[memberId];
    document.getElementById('profile-image').src = profile.image;
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-text').textContent = profile.description;
    document.getElementById('github-link').href = profile.github;
    document.getElementById('linkedin-link').href = profile.linkedin;
    document.getElementById('facebook-link').href = profile.facebook;

    // sa madaling salita on and off HAHAHAHAHHA hindi ko mapaliwanag
    document.querySelectorAll('.team-member').forEach(member => {
        member.classList.add('inactive');
    });
    member.classList.remove('inactive');
    member.classList.add('active');

    // pampalabas ng profile section
    document.getElementById('profile-section').classList.add('visible');
    currentFocus = memberId;
}


