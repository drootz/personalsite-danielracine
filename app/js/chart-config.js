var cBusiness = document.getElementById("chart-business-skills"),
    cPersonal = document.getElementById("chart-personal-skills"),
    cLeadership = document.getElementById("chart-leadership-skills"),
    cOfficeTools = document.getElementById("chart-officetools-skills"),
    cCapabilities = document.getElementById("chart-capabilities-skills"),
    cSkills = document.getElementById("chart-skills-skills"),
    cDevStacks = document.getElementById("chart-devstacks-skills"),
    cFETech = document.getElementById("chart-fetech-skills"),
    cBETech = document.getElementById("chart-betech-skills"),
    cOTech = document.getElementById("chart-otech-skills"),
    cDevTools = document.getElementById("chart-devtools-skills");

var vw = window.innerWidth,
    animOffset = vw >= 380 ? vw >= 450 ? 200 : 175 : 150 ;

Chart.defaults.global.animation.easing = 'easeOutExpo';
Chart.defaults.global.animation.duration = 2000;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.startAngle = 36;
Chart.defaults.global.tooltips.backgroundColor = 'rgba(204, 204, 204, 0.9)';
Chart.defaults.global.tooltips.titleFontColor = 'rgba(59, 59, 59, 1)';
Chart.defaults.global.tooltips.titleFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.titleFontSize = 16;
Chart.defaults.global.tooltips.titleSpacing = 1;
Chart.defaults.global.tooltips.titleMarginBottom = 10;
Chart.defaults.global.tooltips.bodyFontColor = 'rgba(59, 59, 59, 1)';
Chart.defaults.global.tooltips.bodyFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.bodyFontSize = 14;
Chart.defaults.global.tooltips.bodySpacing = 1;
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;
Chart.defaults.global.tooltips.cornerRadius = 3;
Chart.defaults.global.tooltips.enabled = true;
Chart.defaults.global.tooltips.mode = 'point';
Chart.defaults.global.tooltips.position = 'nearest';
Chart.defaults.radar.scale.gridLines = false;




var myChartBusiness = new Chart(cBusiness, {
    type: 'radar',
    data: {
      labels: [["Process","Excellence"], ["Problem","Solving"], "Facilitation", ["Project","Mgmt"], ["Change","Mgmt"]],
      datasets: [
          {
            label: "P.Practitioner",
            lineTension: 0.1,
            backgroundColor: "rgba(102, 153, 204, 0.2)",
            borderColor: "rgba(102, 153, 204, 1)",
            pointBackgroundColor: "rgba(102, 153, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102, 153, 204, 1)",
            data: [2, 3, 2, 1, 3]
          },
          {
            label: "P.Manager",
            lineTension: 0.1,
            backgroundColor: "rgba(255, 204, 102, 0.2)",
            borderColor: "rgba(255, 204, 102, 1)",
            pointBackgroundColor: "rgba(255, 204, 102, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 204, 102, 1)",
            data: [2, 3, 3, 2, 3]
          }
      ]
    },
      options: {
        deferred: {
          enabled: true,
          xOffset: 0,
          yOffset: animOffset,
          delay: 200
        },
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(204, 204, 204, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 3,
            min: 0,
            max: 3,
            display: false
          }
        }
      }
});



var myChartPersonal = new Chart(cPersonal, {
    type: 'radar',
    data: {
      labels: [["Inspire","Others"], ["Initiative","& Drive"], ["Personal","Effectiveness"], "Creativity", ["Decision","Making"]],
      datasets: [
          {
            label: "P.Practitioner",
            lineTension: 0.1,
            backgroundColor: "rgba(102, 153, 204, 0.2)",
            borderColor: "rgba(102, 153, 204, 1)",
            pointBackgroundColor: "rgba(102, 153, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102, 153, 204, 1)",
            data: [2, 2, 3, 3, 2]
          },
          {
            label: "P.Manager",
            lineTension: 0.1,
            backgroundColor: "rgba(255, 204, 102, 0.2)",
            borderColor: "rgba(255, 204, 102, 1)",
            pointBackgroundColor: "rgba(255, 204, 102, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 204, 102, 1)",
            data: [3, 3, 3, 3, 2]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartLeadership = new Chart(cLeadership, {
    type: 'radar',
    data: {
      labels: [["Relationship","Mgmt"], ["Talent","Mgmt"], ["Impact &","Influence"], ["Risk","Mgmt"], ["Performance","Mgmt"]],
      datasets: [
          {
            label: "P.Practitioner",
            lineTension: 0.1,
            backgroundColor: "rgba(102, 153, 204, 0.2)",
            borderColor: "rgba(102, 153, 204, 1)",
            pointBackgroundColor: "rgba(102, 153, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102, 153, 204, 1)",
            data: [3, 2, 2, 3, 2]
          },
          {
            label: "P.Manager",
            lineTension: 0.1,
            backgroundColor: "rgba(255, 204, 102, 0.2)",
            borderColor: "rgba(255, 204, 102, 1)",
            pointBackgroundColor: "rgba(255, 204, 102, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 204, 102, 1)",
            data: [3, 2, 3, 2, 2]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartCapabilities = new Chart(cCapabilities, {
    type: 'radar',
    data: {
      labels: [["Emotional", "Intelligence"], "French", ["Catalytic","Learning"], "English", ["Social", "Intelligence"]],
      datasets: [
          {
            label: "All",
            lineTension: 0.1,
            backgroundColor: "rgba(204, 204, 204, 0.2)",
            borderColor: "rgba(204, 204, 204, 1)",
            pointBackgroundColor: "rgba(204, 204, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(204, 204, 204, 1)",
            data: [2, 3, 3, 2.5, 2]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartSkills = new Chart(cSkills, {
    type: 'radar',
    data: {
      labels: ["Coaching", ["Commu-","nication"], ["Remote","Work Flow"], ["Tech","Savvy"], "Training"],
      datasets: [
          {
            label: "P.Practitioner",
            lineTension: 0.1,
            backgroundColor: "rgba(102, 153, 204, 0.2)",
            borderColor: "rgba(102, 153, 204, 1)",
            pointBackgroundColor: "rgba(102, 153, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102, 153, 204, 1)",
            data: [2, 2, 3, 3, 2]
          },
          {
            label: "P.Manager",
            lineTension: 0.1,
            backgroundColor: "rgba(255, 204, 102, 0.2)",
            borderColor: "rgba(255, 204, 102, 1)",
            pointBackgroundColor: "rgba(255, 204, 102, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 204, 102, 1)",
            data: [3, 3, 2, 3, 3]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartOfficeTools = new Chart(cOfficeTools, {
    type: 'radar',
    data: {
      labels: [["OS","Windows"], ["MS","Office"], ["MS","SharePoint"], ["MS","Excel/VBA"], ["OS","macOS"]],
      datasets: [
          {
            label: "All",
            lineTension: 0.1,
            backgroundColor: "rgba(204, 204, 204, 0.2)",
            borderColor: "rgba(204, 204, 204, 1)",
            pointBackgroundColor: "rgba(204, 204, 204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(204, 204, 204, 1)",
            data: [3, 2, 2, 3, 3]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartDevStacks = new Chart(cDevStacks, {
    type: 'radar',
    data: {
      labels: ["Tools", ["Back","End"], ["Sys","Admin"], ["Front","End"], "Design"],
      datasets: [
          {
            label: "FE Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(242, 119, 122, 0.2)",
            borderColor: "rgba(242, 119, 122, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [2, 1, 0.5, 2, 1.5]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartFETech = new Chart(cFETech, {
    type: 'radar',
    data: {
      labels: ["SQL", "PHP", "HTML/CSS", "jQuery", "JS"],
      datasets: [
          {
            label: "FE Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(242, 119, 122, 0.2)",
            borderColor: "rgba(242, 119, 122, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [1, 1.5, 2, 2, 1.5]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartBETech = new Chart(cBETech, {
    type: 'radar',
    data: {
      labels: ["SQL", "PHP", "HTML/CSS", "jQuery", "JS"],
      datasets: [
          {
            label: "FE Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(242, 119, 122, 0.2)",
            borderColor: "rgba(242, 119, 122, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [1, 1.5, 2, 2, 1.5]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartOTech = new Chart(cOTech, {
    type: 'radar',
    data: {
      labels: ["SQL", "PHP", "HTML/CSS", "jQuery", "JS"],
      datasets: [
          {
            label: "FE Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(242, 119, 122, 0.2)",
            borderColor: "rgba(242, 119, 122, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [1, 1.5, 2, 2, 1.5]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});




var myChartDevTools = new Chart(cDevTools, {
    type: 'radar',
    data: {
      labels: ["Git", ["Command", "Line"], ["CSS","Preprocessors"], ["Browser","Inspector"], ["Img/Vector", "Editors"]],
      datasets: [
          {
            label: "FE Dev",
            lineTension: 0.1,
            backgroundColor: "rgba(242, 119, 122, 0.2)",
            borderColor: "rgba(242, 119, 122, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [2, 2, 2, 2, 2]
          }
      ]
    },
    options: {
      deferred: {
        enabled: true,
        xOffset: 0,
        yOffset: animOffset,
        delay: 0
      },
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 3,
          min: 0,
          max: 3,
          display: false
        }
      }
    }
});
