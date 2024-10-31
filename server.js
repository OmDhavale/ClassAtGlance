const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/'));
 //FLOOR 1
 let currentContent = null;
 let currentContent12 = null;
 let currentContent11 = null;
 let currentContent101 = null;
 let currentContent102 = null;
//FLOOR 1 END
//FLOOR 2
 let currentContent24 = null;
 let currentContent23 = null;
 let currentContent22 = null;
 let currentContent21 = null;

 let currentContent208 = null;
 let currentContent207 = null;
 let currentContent206 = null;
 let currentContent205 = null;
 let currentContent204 = null;
 let currentContent203 = null;
 let currentContent202 = null;
 let currentContent201 = null;
 let currentContent210 = null;
 let currentContents = null;
 let currentContentT = null;
 //FLOOR 2 END
 
 //FLOOR3 
 let currentContentcr31 = null;
 let currentContentcr32 = null;
 let currentContentcr33 = null;
 let currentContentcr34 = null;
 let currentContentcr35 = null;
 let currentContentcr36 = null;
 let currentContentcr37 = null;
 let currentContentcr38 = null;

 let currentContentlab301 = null;
 let currentContentlab302 = null;
 let currentContentlab303 = null;
 let currentContentlab304 = null;
 let currentContentlab305 = null;
 let currentContentlab306 = null;
 let currentContentlab307 = null;

 let currentContentseminar = null;
 //FLOOR 3 END

 //FLOOR4
 let currentContentcr41 = null;
 let currentContentcr42 = null;

 let currentContentlab401 = null;
 let currentContentlab402 = null;
 let currentContentlab403 = null;
 let currentContentlab404 = null;
 let currentContentseminar1 = null;
 let currentContentseminar2 = null;
 //FLOOR 4 END

 //FLOOR 5
 let currentContentcr51 = null;
 let currentContentcr52 = null;
 let currentContentcr53 = null;
 let currentContentcr54 = null;
 let currentContentcr55 = null;
 let currentContentcr56 = null;
 let currentContentcr57 = null;
 let currentContentcr58 = null;
 let currentContentcr59 = null;

 let currentContentlab501 = null;
 let currentContentlab502 = null;
 let currentContentlab503 = null;
 let currentContentlab505 = null;
 let currentContentlab506 = null;
 let currentContentlab507 = null;
 let currentContentlab508 = null;
 let currentContentlab509 = null;
 //FLOOR 5 END

 //FLOOR 6
 let currentContentcr61 = null;
 let currentContentcr62 = null;
 let currentContentcr63 = null;
 let currentContentcr64 = null;

 let currentContentlab607 = null;
 let currentContentlab608 = null;
 let currentContentlab609 = null;
 let currentContentlab610 = null;
 let currentContentlab611 = null;
 let currentContentlab612 = null;
 let currentContentlab613 = null;
 let currentContentlab614 = null;
 let currentContentmicro = null;
 let currentContentwork3 = null;
 let currentContentwork2 = null;
 let currentContentwork1 = null;
 let currentContentartificial = null;
 let currentContentnetwork = null;
 //FLOOR 6 END

 //FLOOR 7
 let currentContentcr71 = null;
 let currentContentcr72 = null;
 let currentContentcr73 = null;
 let currentContentcr74 = null;
 let currentContentcr75 = null;
 let currentContentlab701 = null;
 let currentContentlab702 = null;
 let currentContentlab703 = null;
 let currentContentlab704 = null;
 let currentContentlab705 = null;
 let currentContentdrawing1 = null;
 let currentContentdrawing2 = null;
 //FLOOR 7 END
io.on('connection', (socket) => {
  console.log('A user connected');
  //FLOOR 1
  // Send the current content to the new connection //he miss nako karus nahitar refresh kelyavar sagla jaail
  socket.emit('updateContent', currentContent);
  socket.emit('updateContent12', currentContent12);
  socket.emit('updateContent11', currentContent11);
  socket.emit('updateContent101', currentContent101);
  socket.emit('updateContent102', currentContent102);
  //FLOOR 1 END
  
  //FLOOR 2
  socket.emit('updateContent24', currentContent24);
  socket.emit('updateContent23', currentContent23);
  socket.emit('updateContent22', currentContent22);
  socket.emit('updateContent21', currentContent21);

  socket.emit('updateContent208', currentContent208);
  socket.emit('updateContent207', currentContent207);
  socket.emit('updateContent206', currentContent206);
  socket.emit('updateContent205', currentContent205);
  socket.emit('updateContent204', currentContent204);
  socket.emit('updateContent203', currentContent203);
  socket.emit('updateContent202', currentContent202);
  socket.emit('updateContent201', currentContent201);
  socket.emit('updateContent210', currentContent210);  //lab 209 AND 210
  socket.emit('updateContents', currentContents); //seminar hall
  socket.emit('updateContentT', currentContentT); //TUTORIAL ROOM
  //FLOOR 2 END

  //floor 3
  socket.emit('updateContentcr31', currentContentcr31);
  socket.emit('updateContentcr32', currentContentcr32);
  socket.emit('updateContentcr33', currentContentcr33);
  socket.emit('updateContentcr34', currentContentcr34);
  socket.emit('updateContentcr35', currentContentcr35);
  socket.emit('updateContentcr36', currentContentcr36);
  socket.emit('updateContentcr37', currentContentcr37);
  socket.emit('updateContentcr38', currentContentcr38);

  socket.emit('updateContentlab301', currentContentlab301);
  socket.emit('updateContentlab302', currentContentlab302);
  socket.emit('updateContentlab303', currentContentlab303);
  socket.emit('updateContentlab304', currentContentlab304);
  socket.emit('updateContentlab305', currentContentlab305);
  socket.emit('updateContentlab306', currentContentlab306);
  socket.emit('updateContentlab307', currentContentlab307);

  socket.emit('updateContentseminar', currentContentseminar);
  //floor 3 end

  //FLOOR4
  socket.emit('updateContentcr41', currentContentcr41);
  socket.emit('updateContentcr42', currentContentcr42);

  socket.emit('updateContentlab401', currentContentlab401);
  socket.emit('updateContentlab402', currentContentlab402);
  socket.emit('updateContentlab403', currentContentlab403);
  socket.emit('updateContentlab404', currentContentlab404);
  socket.emit('updateContentseminar1', currentContentseminar1);
  socket.emit('updateContentseminar2', currentContentseminar2);
  //FLOOR 4 END

  //FLOOR 5 
  socket.emit('updateContentcr51', currentContentcr51);
  socket.emit('updateContentcr52', currentContentcr52);
  socket.emit('updateContentcr53', currentContentcr53);
  socket.emit('updateContentcr54', currentContentcr54);
  socket.emit('updateContentcr55', currentContentcr55);
  socket.emit('updateContentcr56', currentContentcr56);
  socket.emit('updateContentcr57', currentContentcr57);
  socket.emit('updateContentcr58', currentContentcr58);
  socket.emit('updateContentcr59', currentContentcr59);

  socket.emit('updateContentlab501', currentContentlab501);
  socket.emit('updateContentlab502', currentContentlab502);
  socket.emit('updateContentlab503', currentContentlab503);
  socket.emit('updateContentlab505', currentContentlab505);
  socket.emit('updateContentlab506', currentContentlab506);
  socket.emit('updateContentlab507', currentContentlab507);
  socket.emit('updateContentlab508', currentContentlab508);
  socket.emit('updateContentlab509', currentContentlab509);
  //FLOOR 5 END

  //FLOOR 6
  socket.emit('updateContentcr61', currentContentcr61);
  socket.emit('updateContentcr62', currentContentcr62);
  socket.emit('updateContentcr63', currentContentcr63);
  socket.emit('updateContentcr64', currentContentcr64);

  socket.emit('updateContentlab607', currentContentlab607);
  socket.emit('updateContentlab608', currentContentlab608);
  socket.emit('updateContentlab609', currentContentlab609);
  socket.emit('updateContentlab610', currentContentlab610);
  socket.emit('updateContentlab611', currentContentlab611);
  socket.emit('updateContentlab612', currentContentlab612);
  socket.emit('updateContentlab613', currentContentlab613);
  socket.emit('updateContentlab614', currentContentlab614);
  socket.emit('updateContentmicro', currentContentmicro);
  socket.emit('updateContentwork3', currentContentwork3);
  socket.emit('updateContentwork2', currentContentwork2);
  socket.emit('updateContentwork1', currentContentwork1);
  socket.emit('updateContentartificial', currentContentartificial);
  socket.emit('updateContentnetwork', currentContentnetwork);
  //FLOOR 6 END

  //FLOOR 7
  socket.emit('updateContentcr71', currentContentcr71);
  socket.emit('updateContentcr72', currentContentcr72);
  socket.emit('updateContentcr73', currentContentcr73);
  socket.emit('updateContentcr74', currentContentcr74);
  socket.emit('updateContentcr75', currentContentcr75);

  socket.emit('updateContentlab701', currentContentlab701);
  socket.emit('updateContentlab702', currentContentlab702);
  socket.emit('updateContentlab703', currentContentlab703);
  socket.emit('updateContentlab704', currentContentlab704);
  socket.emit('updateContentlab705', currentContentlab705);
  socket.emit('updateContentdrawing1', currentContentdrawing1);
  socket.emit('updateContentdrawing2', currentContentdrawing2);
  //FLOOR 7 END
  // Listen for changes in the content
  //FLOOR 1
  //CR-13
  socket.on('editContent', (content) => {
    io.emit('updateContent', content); // Broadcast the updated content to all connected clients
    currentContent = content; // Update the current content
  });

  
  //CR-12
  socket.on('editContent12', (content) => {
    io.emit('updateContent12', content); // Broadcast the updated content to all connected clients
    currentContent12 = content; // Update the current content
  });
  //CR11
  socket.on('editContent11', (content) => {
    io.emit('updateContent11', content);
    currentContent11 = content;
  });
  // for Lab 101
  socket.on('editContent101',(content)=> {
    io.emit('updateContent101',content);
    currentContent101 = content;
  })
  //for lab 102
  socket.on('editContent102',(content)=> {
    io.emit('updateContent102',content);
    currentContent102 = content;
  })
  //FLOOR 1 END

  //FLOOR 2 
  socket.on('editContent24', (content) => {
    io.emit('updateContent24', content); // Broadcast the updated content to all connected clients
    currentContent24 = content; // Update the current content
  });

  socket.on('editContent23', (content) => {
    io.emit('updateContent23', content); // Broadcast the updated content to all connected clients
    currentContent23 = content; // Update the current content
  });

  socket.on('editContent22', (content) => {
    io.emit('updateContent22', content); // Broadcast the updated content to all connected clients
    currentContent22 = content; // Update the current content
  });

  socket.on('editContent21', (content) => {
    io.emit('updateContent21', content); // Broadcast the updated content to all connected clients
    currentContent21 = content; // Update the current content
  });

     //labs 208 to 201 and 210 
     socket.on('editContent208', (content) => {
      io.emit('updateContent208', content); // Broadcast the updated content to all connected clients
      currentContent208 = content; // Update the current content
    });
    
    socket.on('editContent207', (content) => {
      io.emit('updateContent207', content); // Broadcast the updated content to all connected clients
      currentContent207 = content; // Update the current content
    });

    socket.on('editContent206', (content) => {
      io.emit('updateContent206', content); // Broadcast the updated content to all connected clients
      currentContent206 = content; // Update the current content
    });

    socket.on('editContent205', (content) => {
      io.emit('updateContent205', content); // Broadcast the updated content to all connected clients
      currentContent205 = content; // Update the current content
    });

    socket.on('editContent204', (content) => {
      io.emit('updateContent204', content); // Broadcast the updated content to all connected clients
      currentContent204 = content; // Update the current content
    });

    socket.on('editContent203', (content) => {
      io.emit('updateContent203', content); // Broadcast the updated content to all connected clients
      currentContent203 = content; // Update the current content
    });

    socket.on('editContent202', (content) => {
      io.emit('updateContent202', content); // Broadcast the updated content to all connected clients
      currentContent202 = content; // Update the current content
    });

    socket.on('editContent201', (content) => {
      io.emit('updateContent201', content); // Broadcast the updated content to all connected clients
      currentContent201 = content; // Update the current content
    });

    socket.on('editContent210', (content) => {
      io.emit('updateContent210', content); // Broadcast the updated content to all connected clients
      currentContent210 = content; // Update the current content
    });

 socket.on('editContents', (content) => {  //SEMINAR HALL
      io.emit('updateContents', content); // Broadcast the updated content to all connected clients
      currentContents = content; // Update the current content
    });

 socket.on('editContentT', (content) => {
      io.emit('updateContentT', content); // Broadcast the updated content to all connected clients
      currentContentT = content; // Update the current content
    });
  //FLOOR 2 END
  //FLOOR 3
  socket.on('editContentcr31', (content) => {
    io.emit('updateContentcr31', content); 
    currentContentcr31 = content; 
  });

  socket.on('editContentcr32', (content) => {
    io.emit('updateContentcr32', content); 
    currentContentcr32 = content; 
  });

  socket.on('editContentcr33', (content) => {
    io.emit('updateContentcr33', content); 
    currentContentcr33 = content; 
  });

  socket.on('editContentcr34', (content) => {
    io.emit('updateContentcr34', content); 
    currentContentcr34 = content; 
  });

  socket.on('editContentcr35', (content) => {
    io.emit('updateContentcr35', content); 
    currentContentcr35 = content; 
  });

  socket.on('editContentcr36', (content) => {
    io.emit('updateContentcr36', content); 
    currentContentcr36 = content; 
  });

  socket.on('editContentcr37', (content) => {
    io.emit('updateContentcr37', content); 
    currentContentcr37 = content; 
  });

  socket.on('editContentcr38', (content) => {
    io.emit('updateContentcr38', content); 
    currentContentcr38 = content; 
  });

  socket.on('editContentlab301', (content) => {
    io.emit('updateContentlab301', content); 
    currentContentlab301 = content; 
  });
  socket.on('editContentlab302', (content) => {
    io.emit('updateContentlab302', content); 
    currentContentlab302 = content; 
  });

  socket.on('editContentlab303', (content) => {
    io.emit('updateContentlab303', content); 
    currentContentlab303 = content; 
  });
  socket.on('editContentlab304', (content) => {
    io.emit('updateContentlab304', content); 
    currentContentlab304 = content; 
  });
  socket.on('editContentlab305', (content) => {
    io.emit('updateContentlab305', content); 
    currentContentlab305 = content; 
  });
  socket.on('editContentlab306', (content) => {
    io.emit('updateContentlab306', content); 
    currentContentlab306 = content; 
  });
  socket.on('editContentlab307', (content) => {
    io.emit('updateContentlab307', content); 
    currentContentlab307 = content; 
  });

  socket.on('editContentseminar', (content) => {
    io.emit('updateContentseminar', content); 
    currentContentseminar = content; 
  });
  //FLOOR 3 END
  
  //FLOOR4
  socket.on('editContentcr41', (content) => {
    io.emit('updateContentcr41', content); 
    currentContentcr41 = content; 
  });

  socket.on('editContentcr42', (content) => {
    io.emit('updateContentcr42', content); 
    currentContentcr42 = content; 
  });

  socket.on('editContentlab401', (content) => {
    io.emit('updateContentlab401', content); 
    currentContentlab401 = content; 
  });

  socket.on('editContentlab402', (content) => {
    io.emit('updateContentlab402', content); 
    currentContentlab402 = content; 
  });

  socket.on('editContentlab403', (content) => {
    io.emit('updateContentlab403', content); 
    currentContentlab403 = content; 
  });

  socket.on('editContentlab404', (content) => {
    io.emit('updateContentlab404', content); 
    currentContentlab404 = content; 
  });

  socket.on('editContentseminar1', (content) => {
    io.emit('updateContentseminar1', content); 
    currentContentseminar1 = content; 
  });

  socket.on('editContentseminar2', (content) => {
    io.emit('updateContentseminar2', content); 
    currentContentseminar2 = content; 
  });
  //FLOOR 4 END

  //FLOOR 5
  socket.on('editContentcr51', (content) => {
    io.emit('updateContentcr51', content); 
    currentContentcr51 = content; 
  });

  socket.on('editContentcr52', (content) => {
    io.emit('updateContentcr52', content); 
    currentContentcr52 = content; 
  });

  socket.on('editContentcr53', (content) => {
    io.emit('updateContentcr53', content); 
    currentContentcr53 = content; 
  });

  socket.on('editContentcr54', (content) => {
    io.emit('updateContentcr54', content); 
    currentContentcr54 = content; 
  });

  socket.on('editContentcr55', (content) => {
    io.emit('updateContentcr55', content); 
    currentContentcr55 = content; 
  });

  socket.on('editContentcr56', (content) => {
    io.emit('updateContentcr56', content); 
    currentContentcr56 = content; 
  });

  socket.on('editContentcr57', (content) => {
    io.emit('updateContentcr57', content); 
    currentContentcr57 = content; 
  });

  socket.on('editContentcr58', (content) => {
    io.emit('updateContentcr58', content); 
    currentContentcr58 = content; 
  });

  socket.on('editContentcr59', (content) => {
    io.emit('updateContentcr59', content); 
    currentContentcr59 = content; 
  });

  socket.on('editContentlab501', (content) => {
    io.emit('updateContentlab501', content); 
    currentContentlab501 = content; 
  });

  socket.on('editContentlab502', (content) => {
    io.emit('updateContentlab502', content); 
    currentContentlab502 = content; 
  });

  socket.on('editContentlab503', (content) => {
    io.emit('updateContentlab503', content); 
    currentContentlab503 = content; 
  });

  socket.on('editContentlab505', (content) => {
    io.emit('updateContentlab505', content); 
    currentContentlab505 = content; 
  });

  socket.on('editContentlab506', (content) => {
    io.emit('updateContentlab506', content); 
    currentContentlab506 = content; 
  });

  socket.on('editContentlab507', (content) => {
    io.emit('updateContentlab507', content); 
    currentContentlab507 = content; 
  });

  socket.on('editContentlab508', (content) => {
    io.emit('updateContentlab508', content); 
    currentContentlab508 = content; 
  });

  socket.on('editContentlab509', (content) => {
    io.emit('updateContentlab509', content); 
    currentContentlab509 = content; 
  });
  //FLOOR 5 END

  //FLOOR 6
  socket.on('editContentcr61', (content) => {
    io.emit('updateContentcr61', content); 
    currentContentcr61 = content; 
  });

  socket.on('editContentcr62', (content) => {
    io.emit('updateContentcr62', content); 
    currentContentcr62 = content; 
  });

  socket.on('editContentcr63', (content) => {
    io.emit('updateContentcr63', content); 
    currentContentcr63 = content; 
  });

  socket.on('editContentcr64', (content) => {
    io.emit('updateContentcr64', content); 
    currentContentcr64 = content; 
  });

  socket.on('editContentlab607', (content) => {
    io.emit('updateContentlab607', content); 
    currentContentlab607 = content; 
  });
  socket.on('editContentlab608', (content) => {
    io.emit('updateContentlab608', content); 
    currentContentlab608 = content; 
  });
  socket.on('editContentlab609', (content) => {
    io.emit('updateContentlab609', content); 
    currentContentlab609 = content; 
  });
  socket.on('editContentlab610', (content) => {
    io.emit('updateContentlab610', content); 
    currentContentlab610 = content; 
  });
  socket.on('editContentlab611', (content) => {
    io.emit('updateContentlab611', content); 
    currentContentlab611 = content; 
  });
  socket.on('editContentlab612', (content) => {
    io.emit('updateContentlab612', content); 
    currentContentlab612 = content; 
  });
  socket.on('editContentlab613', (content) => {
    io.emit('updateContentlab613', content); 
    currentContentlab613 = content; 
  });
  socket.on('editContentlab614', (content) => {
    io.emit('updateContentlab614', content); 
    currentContentlab614 = content; 
  });

  socket.on('editContentmicro', (content) => {
    io.emit('updateContentmicro', content); 
    currentContentmicro = content; 
  });
  socket.on('editContentwork3', (content) => {
    io.emit('updateContentwork3', content); 
    currentContentwork3 = content; 
  });
  socket.on('editContentwork2', (content) => {
    io.emit('updateContentwork2', content); 
    currentContentwork2 = content; 
  });
  socket.on('editContentwork1', (content) => {
    io.emit('updateContentwork1', content); 
    currentContentwork1 = content; 
  });
  socket.on('editContentartificial', (content) => {
    io.emit('updateContentartificial', content); 
    currentContentartificial = content; 
  });
  socket.on('editContentnetwork', (content) => {
    io.emit('updateContentnetwork', content); 
    currentContentnetwork = content; 
  });
  //FLOOR 6 END

  //FLOOR 7
  socket.on('editContentcr71', (content) => {
    io.emit('updateContentcr71', content); 
    currentContentcr71 = content; 
  });

  socket.on('editContentcr72', (content) => {
    io.emit('updateContentcr72', content); 
    currentContentcr72 = content; 
  });
  socket.on('editContentcr73', (content) => {
    io.emit('updateContentcr73', content); 
    currentContentcr73 = content; 
  });
  socket.on('editContentcr74', (content) => {
    io.emit('updateContentcr74', content); 
    currentContentcr74 = content; 
  });
  socket.on('editContentcr75', (content) => {
    io.emit('updateContentcr75', content); 
    currentContentcr75 = content; 
  });
  socket.on('editContentlab701', (content) => {
    io.emit('updateContentlab701', content); 
    currentContentlab701 = content; 
  });
  socket.on('editContentlab702', (content) => {
    io.emit('updateContentlab702', content); 
    currentContentlab702 = content; 
  });
  socket.on('editContentlab703', (content) => {
    io.emit('updateContentlab703', content); 
    currentContentlab703 = content; 
  });
  socket.on('editContentlab704', (content) => {
    io.emit('updateContentlab704', content); 
    currentContentlab704 = content; 
  });
  socket.on('editContentlab705', (content) => {
    io.emit('updateContentlab705', content); 
    currentContentlab705 = content; 
  });
  socket.on('editContentdrawing1', (content) => {
    io.emit('updateContentdrawing1', content); 
    currentContentdrawing1 = content; 
  });
  socket.on('editContentdrawing2', (content) => {
    io.emit('updateContentdrawing2', content); 
    currentContentdrawing2 = content; 
  });
  //FLOOR 7 END
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
