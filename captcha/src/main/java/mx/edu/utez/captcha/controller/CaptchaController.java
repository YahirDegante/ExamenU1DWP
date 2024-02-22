package mx.edu.utez.captcha.controller;

import mx.edu.utez.captcha.Dto.CaptchaResponse;
import mx.edu.utez.captcha.service.CaptchaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(
        origins = "*",
        methods =
                {RequestMethod.POST, RequestMethod.OPTIONS})
@RequestMapping("/api/captcha")
public class CaptchaController {

    @Autowired
    private CaptchaService captchaService;

    @PostMapping("/verificar-captcha")
    public CaptchaResponse verificarCaptcha(
            @RequestParam("solution") String solution){
                return captchaService.verificarCaptcha(solution);
    }
}
