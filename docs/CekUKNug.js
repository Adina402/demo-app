var e={error:{Required:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}.",_RequiredUpload:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 {fieldName}.",_RequiredSelect:"\u0422\u0430\u043A\u0436\u0435 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}.",EqualsLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}\xA0\u2014 \u0440\u043E\u0432\u043D\u043E {params}\xA0\u0441\u0438\u043C\u0432.",MinLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} (\u043D\u0435 \u043C\u0435\u043D\u0435\u0435 {params}).",MaxLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} (\u0434\u043E {params}\xA0\u0441\u0438\u043C\u0432.).",MinMaxLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} (\u043E\u0442 {params.min} \u0434\u043E {params.max}\xA0\u0441\u0438\u043C\u0432.).",Pattern:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}.",IsNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}.",MinNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}, \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0435\u0435 {params}.",MaxNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C {params}.",MinMaxNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u043E\u0442 {params.min} \u0434\u043E {params.max}.",IsDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 (\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413).",MinDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}, \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0435\u0435 {params, date, YYYYMMDD}.",MaxDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u0434\u043E {params, date, YYYYMMDD}.",MinMaxDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u043E\u0442 {params.min, date, YYYYMMDD} \u0434\u043E {params.max, date, YYYYMMDD}.",IsDateDisabled:"\u042D\u0442\u0430 \u0434\u0430\u0442\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442.",IsEmail:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \xABname@example.com\xBB.",MatchesOption:"\u041D\u0435\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E."},warning:{Required:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}.",_RequiredUpload:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 {fieldName}.",_RequiredSelect:"\u0422\u0430\u043A\u0436\u0435 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}.",EqualsLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}\xA0\u2014 \u0440\u043E\u0432\u043D\u043E {paramsn}\xA0\u0441\u0438\u043C\u0432.",MinLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} (\u043D\u0435 \u043C\u0435\u043D\u0435\u0435 {params}).",MaxLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} (\u0434\u043E {params}\xA0\u0441\u0438\u043C\u0432.).",MinMaxLength:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} (\u043E\u0442 {params.min} \u0434\u043E {params.max}\xA0\u0441\u0438\u043C\u0432.).",IsNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}.",MinNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}, \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0435\u0435 {params}.",MaxNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u043C\u0435\u043D\u044C\u0448\u0435, \u0447\u0435\u043C {params}.",MinMaxNumber:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u043E\u0442 {params.min} \u0434\u043E {params.max}.",IsDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 (\u0414\u0414 \u041C\u041C \u0413\u0413\u0413\u0413).",MinDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName}, \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u044E\u0449\u0435\u0435 {params, date, YYYYMMDD}.",MaxDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u0434\u043E {params, date, YYYYMMDD}.",MinMaxDate:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u043E\u0442 {params.min, date, YYYYMMDD} \u0434\u043E {params.max, date, YYYYMMDD}.",IsDateDisabled:"\u042D\u0442\u0430 \u0434\u0430\u0442\u0430 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043E\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442.",IsEmail:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F {fieldName} \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 \xABname@example.com\xBB.",MatchesOption:"\u041D\u0435\u0442 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438\u043B\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E."},success:{DefaultOk:"OK",RandomOk:"success.DefaultOk,success.Correct,success.Succeeded,success.Ok,success.ThisIsRight,success.Changed,success.OkCorrect",Correct:"\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E",Succeeded:"\u0423\u0441\u043F\u0435\u0448\u043D\u043E",Ok:"OK!",ThisIsRight:"\u0412\u0441\u0435 \u0432\u0435\u0440\u043D\u043E.",Changed:"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E!",OkCorrect:"OK, \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E."}};export{e as default};
